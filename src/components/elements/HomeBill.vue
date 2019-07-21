<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>
        <p
          v-for="currency in currencies"
          class="currency-line"
          :key="currency">
          <span>{{getCurrency(currency) | currencyFilter(currency)}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBill',
  props: {
    rates: {
      type: Object,
      required: true
    },
    currencies: {
      type: Array,
      default: () => ['RUB']
    }
  },
  data: () => ({}),
  computed: {
    normalizeToRub () {
      return this.$store.getters.getInfoUser.bill / (this.rates['RUB'] / this.rates['EUR'])
    }
  },
  methods: {
    getCurrency (currency) {
      return Math.floor(this.normalizeToRub * this.rates[currency])
    }
  }
}
</script>

<style scoped>

</style>
