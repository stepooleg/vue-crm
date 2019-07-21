import { FETCH_CURRENCY } from '@/store/action-types'
export default {
  state: {

  },
  actions: {
    async [FETCH_CURRENCY] () {
      const ketFixer = process.env.VUE_APP_FIXER
      const res = (await fetch(`http://data.fixer.io/api/latest?access_key=${ketFixer}&symbols=USD,EUR,RUB`)).json()
      return res
    }
  },
  mutations: {

  },
  getters: {

  }

}
