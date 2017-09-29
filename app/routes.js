import { app, h } from 'hyperapp';
import Home from './pages/Home';
import BeninoOuBenina from './pages/BeninoOuBenina';

export default [
  [
    "/",
    (state, actions) => <Home state={state} actions={actions}/>,
  ],
  [
    "/benino-ou-benina",
    (state, actions) => <BeninoOuBenina />
  ],
  [
    "*",
    () => (
      <div>
        PAGE 404
      </div>
    )
  ]
]
