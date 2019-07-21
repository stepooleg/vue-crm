import firebase from 'firebase/app'
import { FETCH_INFO_USER } from './action-types'
import { SET_INFO_USER, CLEAR_INFO_USER } from './mutations-types'
export default {
  state: {
    infoUser: {}
  },
  actions: {
    async [FETCH_INFO_USER] ({ dispatch, commit }, _) {
      try {
        const uid = await dispatch('GET_UID')
        const infoUser = (await firebase.database().ref(`/users/${uid}/info_user`).once('value')).val()
        commit(SET_INFO_USER, infoUser)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  },
  mutations: {
    [SET_INFO_USER] (state, infoUser) {
      state.infoUser = infoUser
    },
    [CLEAR_INFO_USER] (state) {
      state.infoUser = {}
    }
  },
  getters: {
    getInfoUser: state => state.infoUser,
    getUserName: state => state.infoUser.name
  }
}
