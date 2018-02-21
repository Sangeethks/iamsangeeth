<template lang="html">
  <div class="ims-checkout">
    <h5 class="ims-sec-title">CHECKOUT</h5>

    <div class="ims-cht-section">
      <p>Follow me on my journey and get a preview of my projects.</p>

      <ul>
        <li><a href="https://github.com/Sangeethks">github</a></li>
        <li><a href="https://twitter.com/sangeethks_in">twitter</a></li>
        <li><a href="https://www.facebook.com/sangeethks.in">facebook</a></li>
        <li><a href="https://www.linkedin.com/in/insangeeth/">linkedin</a></li>
        <li><a href="https://www.behance.net/sangeethks_in">behance</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "~scss/modules/variables";

.ims-cht-section {
  text-align: center;
  ul {
    margin: 25px 0;
    li {
      display: inline-block;
      a {
        display: block;
        color: $text-white-color;
        margin: 0 12px;
        &:hover {
          color: $text-comment-color;
        }
        @media screen and (max-width: $break-small) {
          margin: 0 1px;
        }
      }
    }
  }

}
</style>
