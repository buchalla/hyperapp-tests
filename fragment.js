const fragment = (scopedMixin) => {
  const mixinName = scopedMixin.name || hash(JSON.stringify(scopedMixin))

  const view = (globalState, globalActions, children) => {
    const state = globalState[mixinName]
    const actions = globalActions[mixinName]
    scopedMixin.wanted.forEach(item => {
      if (globalState[item]) state[item] = globalState[item]
      if (globalActions[item]) actions[item] = globalActions[item]
    })
    return scopedMixin.view(state, actions, children)
  }

  return (props, children) => {

    if (children) {
      return view(props.state, props.actions, children)

    } else {
      const state = { [mixinName]: scopedMixin.state }
      const actions = {}


      const events = Object.keys(scopedMixin.events || {}).reduce((obj, key) => merge(obj, {
        [key]: (state, actions, arg1, arg2) =>
          scopedMixin.events[key](state[mixinName], actions[mixinName], arg1[mixinName], arg2)
      }), {})

      init(actions, { [mixinName]: scopedMixin.actions })

      for (const i = 0, mixins = []; i < mixins.length; i++) {
        const mixin = mixins[i](scopedMixin)
        mixins = mixins.concat(mixin.mixins || [])

        if (mixin.state != null) {
          state = merge(state, mixin.state)
        }

        init(actions, mixin.actions)

        Object.keys(mixin.events || []).map(function (key) {
          events[key] = (events[key] || []).concat(mixin.events[key])
        })
      }

      function init(namespace, children, lastName) {
        Object.keys(children || []).map(key => {
          const action = children[key]
          const name = lastName ? lastName + "." + key : key

          if (typeof action === "function") {
            namespace[key] = (state, actions, data, emit) => ({
              [mixinName]: merge(
                state[mixinName],
                action(
                  state[mixinName],
                  actions[mixinName],
                  data,
                  emit
                )
              )
            })

          } else {
            init(namespace[key] || (namespace[key] = {}), action, name)
          }
        })
      }
      return {
        state,
        actions,
        events
      }
    }
  }
}

function hash(str) {
  let hash = 0, i, char
  if (str.length == 0) return hash
  for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}

function merge(a, b) {
  const obj = {}

  if (typeof b !== "object" || Array.isArray(b)) {
    return b
  }

  for (const i in a) {
    obj[i] = a[i]
  }
  for (const i in b) {
    obj[i] = b[i]
  }

  return obj
}

export {
  fragment
}
