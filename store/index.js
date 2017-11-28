import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import key from './key'
import roles from './roles'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      key,
      roles
    },
    state,
    actions,
    getters,
    mutations
  })
}

export default createStore
