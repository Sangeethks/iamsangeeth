<template lang="html">
  <div class="ims-footer ims-section">
    <cmp-color-seperator></cmp-color-seperator>

    <h5 class="footer-title">Thanks for visiting !</h5>
    <p class="text-comment">&copy; Copyright {{new Date().getFullYear()}}. All rights reserved</p>
  </div>
</template>

<script>
const ColorSeperator = () => import(/* webpackChunkName: "ColorSeperator" */ '@/components/shared/ColorSeperator.vue')

export default {
  components: {
    'cmp-color-seperator': ColorSeperator
  }
}
</script>

<style lang="scss">
.ims-footer {
  text-align: center;
  .ims-color-seperator {
    margin-bottom: 20px;
  }
}
</style>
