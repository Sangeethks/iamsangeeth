<template lang="html">
  <div class="ims-container">
    <cmp-header></cmp-header>
    <cmp-under-construction></cmp-under-construction>
    <cmp-color-seperator></cmp-color-seperator>
    <cmp-footer></cmp-footer>
  </div>

</template>

<script>
import Header from '@/components/shared/Header.vue'
import UnderConstruction from '@/components/shared/UnderConstruction.vue'

const ColorSeperator = () => import(/* webpackChunkName: "ColorSeperator" */ '@/components/shared/ColorSeperator.vue')
const Footer = () => import(/* webpackChunkName: "Footer" */ '@/components/shared/Footer.vue')

export default {
  components: {
    'cmp-header': Header,
    'cmp-under-construction': UnderConstruction,
    'cmp-color-seperator': ColorSeperator,
    'cmp-footer': Footer
  }
}
</script>

<style lang="scss">
@import '~scss/work.scss';
</style>
