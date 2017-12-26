const manager = {
  namespaced: true,
  state: {
    authUser: null,
    data: [],
    subordinates: [],
    selectedSubordinates: [],
    updateSelected: {},
    modal: {
      edit: false,
      create: false
    }
  },
  mutations: {
    editSelectedKey (state, field) {
      Object.assign(state.selected, field)
    },

    openModal (state, type) {
      state.modal[type] = !state.modal[type]
    },

    subordinates (state, payload) {
      state.subordinates = payload
    },

    employeePhoto (state, payload) {
      state.employeePhoto = payload
    },
    SET_USER: function (state, user) {
      state.authUser = user
    }

  },

  getters: {
    employee (state, rootState, rootGetters) {
      return rootGetters.employee
    }
  },

  actions: {
    nuxtServerInit ({
      commit
    }, {
      req
    }) {
      console.log(commit)
      if (req.session && req.session.authUser) {
        commit('SET_USER', req.session.authUser)
      }
    },

    openModal ({ commit }, type) {
      commit('openModal', type)
    },

    async getEmployeePhoto ({commit, state, getters}) {
      const employeeRegistry = getters.employee.registry

      const {
        data
      } = await this.$axios.get(`employee/${employeeRegistry}/photo`)

      commit('employeePhoto', data)
    },

    async getSubordinates ({ commit, state, getters, dispatch }) {
      const employeeId = getters.employee.id
      const {
        data
      } = await this.$axios.get(`employee/${employeeId}/subordinates`)

      commit('subordinates', data)
    }
  }
}

export default manager
