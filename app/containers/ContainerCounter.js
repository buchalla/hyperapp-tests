import connect from '../statefull/connect';
import { h } from 'hyperapp';

const ContainerCounter = (props) => {
  return (
    <div>
      CONTAINER GLOBAL COUNTER { props.fabeniCounter &&  props.fabeniCounter.value ? props.fabeniCounter.value : 0 }
      <br />
      <button onclick={props.incrementCounter}> incrementCounter global </button>
      <button onclick={props.decrementCounter}> decrementCounter global </button>
      <button onclick={props.changeName}>Change name</button>
    </div>
  )
};

const connector = connect(
  ({ _statefull }) => ({
    fabeniCounter: _statefull.statefull_counter_do_fabeni
  }),
  ({ incrementCounter, decrementCounter, changeName }) => {
    return ({
      incrementCounter,
      decrementCounter,
      changeName
    })
  }
);

export default connector(ContainerCounter);
