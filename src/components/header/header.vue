<template>
  <header class="app-header">
    <h1 class="app-header-title">传统色彩-霜色</h1>
  </header>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.app-header
  width: 100%
  position: fixed
  top: 0
  left: 0
  z-index: 10
  color: #e9f1f6
  height: 64px
  background-color: currentColor
  box-shadow: 0 1px 1px 0 currentColor, 0 2px 1px -2px currentColor, 0 1px 3px 0 currentColor
  .app-header-title
    font-weight: 400
    font-size: 20px
    line-height: 64px
    position: relative
    z-index: 1
    margin-left: 20px
    color: #000000
</style>
