<template>
  <div class="app-main-layout">
    <navbar @click="isOpen = !isOpen"/>
    <sidebar :isOpen="isOpen"/>
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/elements/Navbar'
import Sidebar from '@/components/elements/Sidebar'

export default {
  name: 'MainLayout',
  data: () => ({
    isOpen: true
  }),
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style scoped>

</style>
