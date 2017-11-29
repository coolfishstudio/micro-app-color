<template>
  <header class="app-header" :style="'background-color: ' + data.hex">
    <h1 class="app-header-title" :style="'color: ' + (data.isDepth ? '#fff' : '#000')">传统色彩{{ data.name ? ('-' + data.name) : '' }}</h1>
  </header>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    data: null
  }
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
  transition: background-color 300ms
  user-select: none
  .app-header-title
    font-weight: 400
    font-size: 20px
    line-height: 64px
    position: relative
    z-index: 1
    margin-left: 20px
    transition: color 300ms
    color: #000000
</style>
