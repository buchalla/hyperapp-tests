import { updateCurrentState, updateCurrentActions } from './storage';

const mixin = () => {
  return {
    state: {
      _statefull: {}
    },
    actions: {
      _statefull: {
        updateState(state, actions, {index, state: statefullState}) {
          return {
            ...state,
            _statefull: {
              ...state._statefull,
              [index]: statefullState
            }
          }
        }
      }
    },
    events: {
      render(state, actions, view) {
        updateCurrentState(state);
        updateCurrentActions(actions);
        return view;
      }
    }
  }
}


export default mixin;
