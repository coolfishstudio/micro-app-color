<template>
  <div id="app">
    <cfs-header></cfs-header>
    <section class="list-container">
      <div class="app-main">
        <cfs-list></cfs-list>
      </div>
    </section>
  </div>
</template>

<script>
import CfsHeader from 'components/header/header'
import CfsList from 'components/list/list'

export default {
  components: {
    CfsHeader,
    CfsList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.list-container
  overflow-x: hidden
  overflow-y: scroll
  margin-top: 64px
  -webkit-overflow-scrolling: touch
  .app-main
    width: 100%
    max-width: 800px
    margin: 24px auto
</style>
