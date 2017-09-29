import axios from 'axios';

const state = {
  requests: {
    isLoading: false,
    error: false
  }
}

const actions = {
  requestData(state, actions, key) {
    return {
      ...state,
      requests: {
        ...state.requests,
        [key]: {
          data: null,
          isLoading: true,
          error: false
        },
        isLoading: true
      }
    }
  },
  receiveData(state, actions, { data, key }) {
    return {
      ...state,
      requests: {
        ...state.requests,
        [key]: {
          data,
          isLoading: false,
          error: false
        },
        isLoading: false
      }
    }
  },
  receiveError(state, actions, { error, key}) {
    return {
      ...state,
      requests: {
        ...state.requests,
        [key]: {
          data: null,
          isLoading: false,
          error
        },
        isLoading: false
      }
    }
  },
  fetchData(state, actions, { url, key, method = 'get', data = {}, config = {} }) {
    return update => {
      actions.requestData(key);

      const baseConfig = {
        url,
        method,
        data
      }

      return axios(Object.assign({}, baseConfig, config))
        .then(
          (res) => actions.receiveData({
            data: res.data,
            key,
            res
          }),
          (error) => actions.receiveError({
            error,
            key
          })
        )
    }
  }
}

export default {
  state,
  actions
}
