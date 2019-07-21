<template>
  <div class="app-loader">
    <div class="preloader-wrapper active">
      <div class="spinner-layer" :class="colorLoader">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Loader',
  computed: {
    colorLoader () {
      const colorsLoader = ['spinner-red-only', 'spinner-blue-only', 'spinner-green-only']
      return colorsLoader[Math.floor(Math.random() * 3)]
    }
  }
}
</script>

<style scoped>

</style>
