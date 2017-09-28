import { h } from 'hyperapp';
import statefull from '../statefull/component';

const StatefullCounter  = statefull({
  actions: {
    inc: (state) => ({
      value: state.value + 1
    }),
    dec: (state) => ({
      value: state.value -1
    })
  },
  state: {
    value: 0
  },
  view: (state, actions) => (
    <div>
      STATEFULL COUNTER: { state.value }
      <br />
      <button onclick={actions.inc}>+ inc</button>
      <button onclick={actions.dec}>+ dec</button>
    </div>
  )
});

export default StatefullCounter;
