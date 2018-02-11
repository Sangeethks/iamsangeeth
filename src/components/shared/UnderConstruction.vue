<template lang="html">
  <div class="ims-under-const">
    <h1>{{msgUnderConstruction}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'msgUnderConstruction'
    ])
  }
}
</script>
