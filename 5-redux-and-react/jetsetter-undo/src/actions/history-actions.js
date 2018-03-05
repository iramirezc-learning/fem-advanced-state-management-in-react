import {
  UNDO,
  REDO
} from '../constants';

export const undo = () => ({
  type: UNDO
});

export const redo = () => ({
  type: REDO
});
