/* eslint-disable @typescript-eslint/no-non-null-assertion, no-shadow */
import { MouseEvent } from 'react';
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  guard,
  sample,
} from 'effector';
import shuffle from 'lodash/shuffle';
import head from 'lodash/head';

export interface Tube {
  balls: BallColor[];
}

export type BallColor = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

const COLORS_IN_GAME = 4;
const BALLS_IN_TUBE = 4;
const getCountOfTubes = (colors: number) => colors + 2; // magic

export const startClicked = createEvent<MouseEvent<HTMLButtonElement>>();
export const restartClicked = createEvent<MouseEvent<HTMLButtonElement>>();
export const toMainMenuClicked = createEvent<MouseEvent<HTMLButtonElement>>();
export const tubeClicked = createEvent<MouseEvent<HTMLDivElement>>();

const tubeSelected = tubeClicked.map((event) =>
  Number.parseInt(event.currentTarget.dataset.position ?? '', 10),
);
const gameFinishedSuccessfully = createEvent();

export const $state = createStore<'start' | 'ingame' | 'won'>('start');
export const $moves = createStore(0);

const $tubes = createStore<Tube[]>([]);
const $currentSelectedTubeIndex = createStore<number | null>(null);

export const $field = combine(
  $tubes,
  $currentSelectedTubeIndex,
  (tubes, selectedIndex) => {
    return tubes.map((tube, index) => {
      const isCurrent = selectedIndex === index;
      const over = isCurrent ? head(tube.balls)! : null;
      const leftBalls = isCurrent ? tube.balls.slice(1) : tube.balls;
      return { balls: leftBalls, over, complete: isComplete(tube) };
    });
  },
);

const $filledTubesCount = $field.map(
  (tubes) => tubes.filter(({ complete }) => complete).length,
);

function isComplete(tube: Tube): boolean {
  if (tube.balls.length === BALLS_IN_TUBE) {
    const firstBall = head(tube.balls)!;
    return tube.balls.every((ball) => ball === firstBall);
  }
  return false;
}

const generateTubesFx = createEffect<{ colorsCount: number }, Tube[]>();

$state.on(startClicked, () => 'ingame');

sample({
  clock: [startClicked, restartClicked],
  fn: () => ({ colorsCount: COLORS_IN_GAME }),
  target: generateTubesFx,
});

generateTubesFx.use(({ colorsCount }) => {
  const tubesCount = getCountOfTubes(colorsCount);
  const availableBalls = shuffle(
    Array.from(
      { length: BALLS_IN_TUBE * colorsCount },
      (_, index) => (index % BALLS_IN_TUBE) as BallColor,
    ),
  );

  const filledTubes = Array.from({ length: colorsCount }).map(() => ({
    balls: Array.from({ length: BALLS_IN_TUBE }).map(
      () => availableBalls.pop()!,
    ),
  }));

  const emptyTubes = Array.from({ length: tubesCount - colorsCount }, () => ({
    balls: [],
  }));

  return [...filledTubes, ...emptyTubes];
});

$tubes.on(generateTubesFx.doneData, (_, tubes) => tubes);
$moves.reset(generateTubesFx);

const tubeWillChange = sample({
  clock: tubeSelected,
  source: [$tubes, $currentSelectedTubeIndex],
  fn: ([tubes, currentIndex], selectedIndex) => ({
    tubes,
    currentIndex,
    selectedIndex,
  }),
});

const ballUplift = guard({
  source: tubeWillChange,
  filter({ tubes, currentIndex, selectedIndex }) {
    return currentIndex === null && tubes[selectedIndex].balls.length !== 0;
  },
});

$currentSelectedTubeIndex.on(
  ballUplift,
  (_, { selectedIndex }) => selectedIndex,
);

const ballDownliftBack = guard({
  source: tubeWillChange,
  filter({ currentIndex, selectedIndex }) {
    return currentIndex === selectedIndex;
  },
});

$currentSelectedTubeIndex.on(ballDownliftBack, () => null);

const ballMoved = guard({
  source: tubeWillChange,
  filter({ tubes, currentIndex, selectedIndex }) {
    if (currentIndex === null) return false;
    if (currentIndex === selectedIndex) return false;

    // we proofed that source tube is not empty
    // ballUplift triggered only when tube is not empty
    const sourceTube = tubes[currentIndex];
    const targetTube = tubes[selectedIndex];

    const sourceBall = head(sourceTube.balls);
    const targetBall = head(targetTube.balls);

    const isTargetTubeEmpty = targetBall === undefined;
    return isTargetTubeEmpty ? true : targetBall === sourceBall;
  },
});

$tubes.on(ballMoved, (_, { tubes, currentIndex, selectedIndex }) => {
  const sourceBall = head(tubes[currentIndex!].balls)!;

  return tubes.map((tube, index) => {
    if (index === currentIndex) return { balls: tube.balls.slice(1) };
    if (index === selectedIndex) return { balls: [sourceBall, ...tube.balls] };
    return tube;
  });
});
$currentSelectedTubeIndex.on(ballMoved, () => null);
$moves.on(ballMoved, (count) => count + 1);

guard({
  source: $filledTubesCount,
  filter: (filled) => filled === COLORS_IN_GAME,
  target: gameFinishedSuccessfully,
});

$state.on(gameFinishedSuccessfully, () => 'won');

$currentSelectedTubeIndex.reset(restartClicked);
$moves.reset(restartClicked);

$state.on(toMainMenuClicked, () => 'start');
