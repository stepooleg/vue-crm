<template>
  <div>
    <Loader
      v-if="loading"
    />
    <div v-else class="app-main-layout">
      <navbar @click="isOpen = !isOpen"/>
      <sidebar :isOpen="isOpen"/>
      <main class="app-content" :class="{full: !isOpen}">
        <div class="app-page">
          <router-view/>
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/elements/Navbar'
import Sidebar from '@/components/elements/Sidebar'
import { FETCH_INFO_USER } from '@/store/action-types'

export default {
  name: 'MainLayout',
  data: () => ({
    isOpen: true,
    loading: true
  }),
  components: {
    Navbar,
    Sidebar
  },
  async mounted () {
    if (!Object.keys(this.$store.getters.getInfoUser).length > 0) {
      await this.$store.dispatch(FETCH_INFO_USER)
    }
    this.loading = false
  }
}
</script>

<style scoped>

</style>
