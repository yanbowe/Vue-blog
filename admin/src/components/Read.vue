<template>
  <div style="height: 100%">
    <head-nav></head-nav>
    <a-side></a-side>
  </div>
</template>

<script>
  import Aside from '../components/common/Aside'
  import HeadNav from '../components/common/HeadNav'
  export default {
    name: "Read",
    components:{
      "a-side":Aside,
      "head-nav":HeadNav
    }

  }
</script>

<style type="text/scss" lang="scss" scoped>
</style>
