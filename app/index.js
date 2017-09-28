import { router, Link } from '@hyperapp/router';
import devtools from 'hyperapp-redux-devtools';
import { app, h } from 'hyperapp';
// import statefull from './statefull';
import mixin from './statefull/mixin';
import ducks from './ducks';
import Home from './pages/Home';
import Counter from './components/Counter';

app({
  ...ducks,
  mixins: [devtools(), mixin, router()],
  root: document.getElementById("app"),
  view: [
    [
      "/",
      (state, actions) => <Home state={state} actions={actions}/>,
    ],
    [
      "*",
      () => (
        <div>
          PAGE 404
        </div>
    )]
  ]
});
