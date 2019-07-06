import firebase from 'firebase/app'

export default {
  action: {
    async LOGIN_WITH_FIREBASE ({ dispatch, commit }, { email, password }) {
      console.log(email, password)
      try {
        console.log(email, password)
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {}
    }
  }
}
