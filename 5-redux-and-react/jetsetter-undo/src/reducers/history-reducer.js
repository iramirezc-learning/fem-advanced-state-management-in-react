import { UNDO, REDO } from '../constants';

export default function(state = {}, action) {

  if (action.type === UNDO) {
    if (!state.history.past.length) return state;
    const newFuture = [state.currentState, ...state.history.future];
    const [currentState, ...newPast] = state.history.past;
    
    return {
      currentState,
      history: {
        past: newPast,
        future: newFuture
      }
    };
  }

  if (action.type === REDO) {
    if(!state.history.future.length) return state;
    const [currentState, ...newFuture] = state.history.future;
    const newPast = [state.currentState, ...state.history.past]

    return {
      currentState,
      history: {
        past: newPast,
        future: newFuture,
      }
    }
  }

  return state;
}