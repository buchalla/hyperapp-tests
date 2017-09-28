const state = {
  name: ''
};

const actions = {
  changeName(state, actions, param) {
    return {
      ...state,
      name: 'name Changed'
    }
  }
}

export default {
  state,
  actions
}
