<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '../static/scss/modules/_variables.scss';

body {
  background-color: $bg-color;
}
</style>
