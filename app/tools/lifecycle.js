import { h } from 'hyperapp';

const lifecycle = ({
  oncreate = () => {},
  onremove = () => {},
  onupdate = () => {}
}) => (component) => (props) => (
  <div
    oncreate={oncreate.bind(null, props)}
    onremove={onremove.bind(null, props)}
    onupdate={onupdate.bind(null, props)}
  >
    { component(props) }
  </div>
);

export default lifecycle
