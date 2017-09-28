import { getCurrentActions, getCurrentState, updateCurrentActions } from './storage';

const statefull = (component) => {
  return (props, children) => {
    if (!props.key) {
      throw "You must pass key prop when using statefull component";
    }
    const key = props.key;
    let currentState = getCurrentState();
    let currentActions = getCurrentActions();

    const initializing = !currentState || !currentState._statefull || !currentState._statefull[key]
    if (initializing) {
      currentActions._statefull.updateState({
        index: key,
        state: component.state
      })
    }
    const state = initializing ? component.state : currentState._statefull[key];

    const actions = Object.keys(component.actions).reduce((prev, actionKey) => {
      let action = component.actions[actionKey];
      prev[actionKey] = (data) => {
        const newContainerState = action(state, prev, data)
        currentActions._statefull.updateState({
          index: key,
          state: newContainerState
        })
      };
      return prev;
    }, {});

    return component.view(state, actions, children);
  }
}

export default statefull;
