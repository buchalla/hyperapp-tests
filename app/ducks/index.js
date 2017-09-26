import counter from './counter';

export default {
  state: {
    ...counter.state
  },
  actions: {
    ...counter.actions
  }
}
