import connect from '../tools/connect';
import lifecycle from '../tools/lifecycle';
import { h } from 'hyperapp';


const Andre = connect(
  ({ _statefull }) => ({
    fabeniCounter: _statefull.statefull_counter_do_fabeni,
  })
)(lifecycle({
  oncreate: (a,b,c) => {
    console.log(a,b,c)
    console.log('andre criado!!!');
  },
  onupdate: (a,b,c) => {
    console.log('andre updated');
    console.log(a,b,c)
  },
  onremove: (a,b,c) => {
    console.log('andre removed');
    console.log(a,b,c)
  }
})((props) =>{
  return (
    <div>
      AnDREEEEE
    </div>
  )
}))

const ContainerCounter = (props) => {
  return (
    <div>
      FABENI COUNTER { props.fabeniCounter &&  props.fabeniCounter.value ? props.fabeniCounter.value : 0 }
      <br />
      <br />
      Global Counter { props.gCounter }

      {
        props.gCounter > 3 ?
        <Andre name="andreeeeeee" counter={props.gCounter}/>
        : null
      }
      <br />
      <button onclick={props.incrementCounter}> incrementCounter global </button>
      <button onclick={props.decrementCounter}> decrementCounter global </button>
      <br />
      <br />
      Name: { props.name }
      <br />
      <button onclick={props.changeName}>Change name</button>
      <hr />
    </div>
  )
};

const connector = connect(
  ({ _statefull, gCounter, name }) => ({
    fabeniCounter: _statefull.statefull_counter_do_fabeni,
    gCounter,
    name
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
