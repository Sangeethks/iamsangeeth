<template lang="html">
  <div class="ims-header ims-section">
    <h2 class="header-title">sangeeth_ks</h2>
    <h5 class="text-comment">// Software Engineer and Web Enthusiast</h5>
    <div class="ims-nav">
      <ul>
        <li><router-link :to="{ name: 'RouteHome' }">Home</router-link></li>
        <li><router-link :to="{ name: 'RouteWork' }">Work</router-link></li>
        <li><a href="/static/sangeeth-ks-resume.pdf" target="_blank">Resume</a></li>
        <li><router-link :to="{ name: 'RouteBlog' }">Blog</router-link></li>
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

.ims-header {
  margin-top: 10px;
}
.header-title {
  margin-bottom: 8px;
}
.ims-nav {
  margin: 10px 0;
}
.ims-nav ul {
  text-align: center;
}
.ims-nav ul li {
  display: inline-block;
  margin: 0 12px;
}
.ims-nav ul li a {
  display: block;
  color: $text-white-color;
  &:hover {
    color: $text-comment-color;
  }
}
</style>
