import { h } from 'hyperapp';
import Counter from '../components/Counter';
import StatefullCounter from '../components/StatefullCounter';

const Home = ({ state, actions }) => (
  <div>
    <h1>
      Hellcome to home.
    </h1>
    <br />
    <Counter state={state} actions={actions} />
    <br />
    <Counter state={state} actions={actions} />
    <hr />
    <br />
    <StatefullCounter key="statefull_counter" />
    <br />
    <br />
    <StatefullCounter key="statefull_counter_do_fabeni" />
    <hr />
    <a onclick={() => actions.router.go('/about')}>to go about</a>
    <br />
    <a onclick={() => actions.router.go(`/withParam/${Math.round(Math.random() * 20)}`)}>go to random param page</a>
  </div>
);

export default Home;
