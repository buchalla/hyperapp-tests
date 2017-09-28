import { getCurrentState, getCurrentActions } from './storage';

const connect = (mapStateToProps, mapActions) => {
  return (component) => {
    return (props, children) => {
      let componentProps = mapStateToProps(getCurrentState());
      let componentActions = mapActions(getCurrentActions());
      return component({
        ...props,
        ...componentProps,
        ...componentActions
      }, children)
    };
  }
}

export default connect;
