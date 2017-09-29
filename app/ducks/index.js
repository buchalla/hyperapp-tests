import counter from './counter';
import names from './names';
import requests from './requests';
export default {
  state: {
    ...requests.state,
    ...counter.state,
    ...names.state
  },
  actions: {
    ...requests.actions,
    ...counter.actions,
    ...names.actions
  }
}
