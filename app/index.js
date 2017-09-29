import { router, Link } from '@hyperapp/router';
import devtools from 'hyperapp-redux-devtools';
import { app, h } from 'hyperapp';
import mixin from './tools/mixin';
import ducks from './ducks';
import routes from './routes';
app({
  ...ducks,
  mixins: [devtools(), mixin, router()],
  root: document.getElementById("app"),
  view: routes
});
