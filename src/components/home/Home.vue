<template lang="html">
  <div class="ims-container">
    <cmp-header></cmp-header>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'

export default {
  components: {
    'cmp-header': Header
  }
}
</script>

<style lang="scss">
@import '../../../static/scss/home.scss';
</style>
