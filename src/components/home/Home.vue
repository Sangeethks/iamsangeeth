<template lang="html">
  <div class="ims-container">
    <cmp-header></cmp-header>
    <cmp-readme></cmp-readme>
    <cmp-commits></cmp-commits>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
const Readme = () => import(/* webpackChunkName: "Readme" */ './Read-me.vue')
const Commits = () => import(/* webpackChunkName: "Commits" */ './Commits.vue')

export default {
  components: {
    'cmp-header': Header,
    'cmp-readme': Readme,
    'cmp-commits': Commits
  }
}
</script>

<style lang="scss">
@import '../../../static/scss/home.scss';
</style>
