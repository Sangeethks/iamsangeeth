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
@import '~scss/header.scss';
</style>
