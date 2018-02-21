<template lang="html">
  <div class="ims-container">
    <cmp-header></cmp-header>
    <cmp-under-construction></cmp-under-construction>
    <cmp-footer></cmp-footer>
  </div>

</template>

<script>
import Header from '@/components/shared/Header.vue'
import UnderConstruction from '@/components/shared/UnderConstruction.vue'

const Footer = () => import(/* webpackChunkName: "Footer" */ '@/components/shared/Footer.vue')

export default {
  components: {
    'cmp-header': Header,
    'cmp-under-construction': UnderConstruction,
    'cmp-footer': Footer
  }
}
</script>
