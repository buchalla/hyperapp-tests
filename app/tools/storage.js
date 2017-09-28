let currentState = {};
let currentActions = {};

export const updateCurrentState = (newState) => {
  currentState = Object.assign({}, newState);
}

export const updateCurrentActions = (newActions) => {
  currentActions = Object.assign({}, newActions);
}

export const getCurrentActions = () => Object.assign({}, currentActions);

export const getCurrentState = () => Object.assign({}, currentState);

export default {
  getCurrentActions,
  getCurrentState,
  updateCurrentState,
  updateCurrentActions
}
