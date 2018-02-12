<template lang="html">
  <div class="ims-container">
    <cmp-header></cmp-header>
    <cmp-readme></cmp-readme>
    <cmp-commits></cmp-commits>
    <cmp-checkout></cmp-checkout>
    <cmp-color-seperator></cmp-color-seperator>
    <cmp-footer></cmp-footer>
  </div>
</template>

<script>
import Header from '@/components/shared/Header.vue'
const Readme = () => import(/* webpackChunkName: "Readme" */ './Read-me.vue')
const Commits = () => import(/* webpackChunkName: "Commits" */ './Commits.vue')
const Checkout = () => import(/* webpackChunkName: "Checkout" */ './Checkout.vue')
const ColorSeperator = () => import(/* webpackChunkName: "ColorSeperator" */ '@/components/shared/ColorSeperator.vue')
const Footer = () => import(/* webpackChunkName: "Footer" */ '@/components/shared/Footer.vue')

export default {
  components: {
    'cmp-header': Header,
    'cmp-readme': Readme,
    'cmp-commits': Commits,
    'cmp-checkout': Checkout,
    'cmp-color-seperator': ColorSeperator,
    'cmp-footer': Footer
  }
}
</script>

<style lang="scss">
@import '../../../static/scss/home.scss';
</style>
