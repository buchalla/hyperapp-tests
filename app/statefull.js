let currentState
let currentActions
const statefull = (component) => {

  if (typeof component === 'object') {
    return (props, children) => {
      if (!props.key) {
        throw "You must pass key prop when using statefull component";
      }
      const key = props.key;
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

  return {
    state: {
      _statefull: {}
    },
    actions: {
      _statefull: {
        updateState(state, actions, {index, state: statefullState}) {
          console.log('statefullState', statefullState);
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
        currentState = state
        currentActions = actions
        return view;
      }
    }
  }
}

export default statefull;
