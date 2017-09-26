const state = {
  gCounter: 0
}

const actions = {
  incrementCounter(state, actions, param) {
    return {
      ...state,
      gCounter: state.gCounter + 1
    }
  },
  decrementCounter(state, actions, param) {
    return {
      ...state,
      gCounter: state.gCounter - 1
    }
  }
}

export default { state, actions };
