export default {
  state: {
    toggle: true
  },
  getters: {
    getToggle(state) {
      return state.toggle
    }
  },
  mutations: {
    setToggle(state, toggle) {
      state.toggle = toggle
    }
  }
}