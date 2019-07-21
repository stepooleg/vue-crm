<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <Loader v-if="loading"/>
    <div v-else class="row">
      <HomeBill
        :rates="currency.rates"
        :currencies = "currencies"
      />
      <HomeCurrency
        :currencies = "currencies"
        :rates="currency.rates"
        :date="currency.date"
      />
    </div>

  </div>
</template>

<script>
import HomeBill from '@/components/elements/HomeBill'
import HomeCurrency from '@/components/elements/HomeCurrency'
import { FETCH_CURRENCY } from '@/store/action-types'

export default {
  name: 'home',
  data: () => ({
    loading: true,
    currency: null,
    currencies: ['RUB', 'USD', 'EUR']
  }),
  async mounted () {
    this.currency = await this.$store.dispatch(FETCH_CURRENCY)
    this.loading = false
  },
  components: {
    HomeBill,
    HomeCurrency
  },
  methods: {
    async refresh () {
      this.loading = true
      this.currency = await this.$store.dispatch(FETCH_CURRENCY)
      this.loading = false
    }
  }
}
</script>
