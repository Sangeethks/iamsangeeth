<template lang="html">
  <div class="ims-container">
    <cmp-header></cmp-header>
    <cmp-readme></cmp-readme>
    <cmp-commits></cmp-commits>
    <cmp-checkout></cmp-checkout>
    <cmp-footer></cmp-footer>
  </div>
</template>

<script>
import Header from '@/components/shared/Header.vue'
const Readme = () => import(/* webpackChunkName: "Readme" */ './Read-me.vue')
const Commits = () => import(/* webpackChunkName: "Commits" */ './Commits.vue')
const Checkout = () => import(/* webpackChunkName: "Checkout" */ './Checkout.vue')
const Footer = () => import(/* webpackChunkName: "Footer" */ '@/components/shared/Footer.vue')

export default {
  components: {
    'cmp-header': Header,
    'cmp-readme': Readme,
    'cmp-commits': Commits,
    'cmp-checkout': Checkout,
    'cmp-footer': Footer
  }
}
</script>
