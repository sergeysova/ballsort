/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MouseEvent } from 'react';
import { createEvent, createStore } from 'effector';

export interface Tube {
  balls: BallColor[];
}

export type BallColor = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

// const BALLS_IN_TUBE = 4;

export const startClicked = createEvent<MouseEvent<HTMLButtonElement>>();
export const restartClicked = createEvent<MouseEvent<HTMLButtonElement>>();
export const toMainMenuClicked = createEvent<MouseEvent<HTMLButtonElement>>();
export const tubeClicked = createEvent<MouseEvent<HTMLDivElement>>();

export const $state = createStore<'start' | 'ingame' | 'won'>('start');
export const $moves = createStore(0);
