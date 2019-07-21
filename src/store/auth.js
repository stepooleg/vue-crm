import firebase from 'firebase/app'
import { LOGIN_WITH_FIREBASE, LOGOUT_WITH_FIREBASE, REGISTER_IN_FIREBASE } from './action-types'
import { CLEAR_INFO_USER } from './mutations-types'
export default {
  actions: {
    async [LOGIN_WITH_FIREBASE] ({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async [LOGOUT_WITH_FIREBASE] ({ commit }) {
      await firebase.auth().signOut()
      commit(CLEAR_INFO_USER)
    },
    async [REGISTER_IN_FIREBASE] ({ dispatch, commit }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('GET_UID')
        await firebase.database().ref(`/users/${uid}/info_user`).set({
          bill: 0,
          name
        })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    GET_UID () {
      const { currentUser } = firebase.auth()
      return currentUser ? currentUser.uid : null
    }
  }
}
