import { h } from 'hyperapp';

let Counter = ({state, actions, children}) => (
  <div>
    counter: { state.gCounter }
    <br />
    <button onclick={actions.incrementCounter}>+ globalState</button>
    <button onclick={actions.decrementCounter}>- globalState</button>
  </div>
);

export default Counter;
