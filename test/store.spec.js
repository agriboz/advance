import { mutations, getters, actions, state } from '../store'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

describe('advance store', () => {
  let $store

  beforeEach(() => {
    $store = new Vuex.Store({
      actions,
      state,
      mutations,
      getters
    })
  })

  it('should get default sidebar state', () => {
    const openSidebar = $store.state.openSidebar
    expect(openSidebar).toBe(false)
  })

  it(`should change sidebar state to 'true'`, () => {
    $store.dispatch('openSidebar')
    expect($store.state.openSidebar).toBe(true)
  })

  it(`should get menu length to be '5'`, () => {
    expect($store.getters.menu.length).toBe(5)
  })
})
