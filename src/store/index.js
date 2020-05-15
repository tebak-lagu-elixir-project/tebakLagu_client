import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomNumber: 1,
    joinedRoomData: '',
    currentUserName: '',
    allRooms: [],
    socket: ''
  },
  mutations: {
    addRoomNumber (state, payload) {
      state.roomNumber += payload
    },
    set_joinedRoomData (state, payload) {
      state.joinedRoomData = payload
      state.allRooms.push(payload)
    },
    set_currentUserName (state, payload) {
      state.currentUserName = payload
    },
    set_allRooms (state, payload) {
      state.allRooms = payload
    },
    set_socket (state, payload) {
      state.socket = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
