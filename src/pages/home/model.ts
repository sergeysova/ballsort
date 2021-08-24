/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MouseEvent } from 'react';
import { createEvent, createStore } from 'effector';

export interface Tube {
  balls: BallColor[];
}

const NO_SELECTED = -1;
const BALLS_IN_TUBE = 4;

export type BallColor =
  | 0x0
  | 0x1
  | 0x2
  | 0x3
  | 0x4
  | 0x5
  | 0x6
  | 0x7
  | 0x8
  | 0x9
  | 0xa
  | 0xb;

export const startClicked = createEvent<MouseEvent<HTMLButtonElement>>();
export const restartClicked = createEvent<MouseEvent<HTMLButtonElement>>();
export const toMainMenuClicked = createEvent<MouseEvent<HTMLButtonElement>>();
export const tubeClicked = createEvent<MouseEvent<HTMLDivElement>>();

export const $state = createStore<'start' | 'ingame' | 'won'>('start');
export const $moves = createStore(0);
