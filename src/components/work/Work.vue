<template lang="html">
  <div class="ims-container">
    <cmp-header></cmp-header>

    <!-- <cmp-under-construction></cmp-under-construction> -->

    <div class="row">
        <div class="col-md-3">
            <h1>hello</h1>
        </div>
        <div class="col-md-3">
            <h1>hello</h1>
        </div>
        <div class="col-md-3">
            <h1>hello</h1>
        </div>
        <div class="col-md-3">
            <h1>hello</h1>
        </div>
    </div>

    <slot-portfolio-card v-for="i in 5" :key="i"></slot-portfolio-card>

    <cmp-footer></cmp-footer>
  </div>

</template>

<script>
import Header from '@/components/shared/Header.vue'
// import UnderConstruction from '@/components/shared/UnderConstruction.vue'

const Footer = () => import(/* webpackChunkName: "Footer" */ '@/components/shared/Footer.vue')
const PortfolioCard = () => import(/* webpackChunkName: "PortfolioCard" */ '@/components/slots/PortfolioCard.vue')

export default {
  components: {
    'cmp-header': Header,
    // 'cmp-under-construction': UnderConstruction,
    'slot-portfolio-card': PortfolioCard,
    'cmp-footer': Footer
  }
}
</script>
