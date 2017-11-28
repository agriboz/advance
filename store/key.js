const key = {
  namespaced: true,
  state: {
    data: [],
    selected: {},
    updateSelected: {},
    modal: {
      edit: false
    }
  },
  mutations: {
    editSelectedKey (state, field) {
      Object.assign(state.selected, field)
    },

    keyOpenEditModal (state) {
      state.modal.edit = !state.modal.edit
    },

    keySettings (state, payload) {
      state.data = payload
    },

    setSelectedKey (state, selectedKey) {
      state.selected = selectedKey
    }
  },
  actions: {
    keyOpenEditModal ({ commit }) {
      commit('keyOpenEditModal')
    },

    async keySettings ({ commit }) {
      const { data } = await this.$axios.get('appsettings')
      commit('keySettings', data)
    },

    setSelectedKey ({ commit }) {
      commit('setSelectedKey')
    },

    editSelectedKey ({ commit, state }, payload) {
      commit('editSelectedKey', payload)
    },

    async updateSelectedKey ({ commit, dispatch, state }, payload) {
      await this.$axios.put(`appsettings/${payload.key}`, payload)
      await commit('keyOpenEditModal')
      await dispatch('keySettings')
      // data has no id that is why getting again
    }
  }
}

export default key
