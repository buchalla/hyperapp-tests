import counter from './counter';
import names from './names';

export default {
  state: {
    ...counter.state,
    ...names.state
  },
  actions: {
    ...counter.actions,
    ...names.actions
  }
}
