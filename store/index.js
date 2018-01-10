import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import key from './key'
import roles from './roles'
import manager from './manager'
import advanceListSolution from './advanceListSolution'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      key,
      roles,
      manager,
      advanceListSolution
    },
    state,
    actions,
    getters,
    mutations
  })
}

createStore().dispatch('browserInit')

export default createStore
