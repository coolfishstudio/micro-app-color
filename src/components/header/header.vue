<template>
  <header class="app-header" :style="'color: ' + data.hex">
    <h1 class="app-header-title" :style="'color: ' + (data.isDepth ? '#fff' : '#000')">传统色彩{{ data.name ? ('-' + data.name) : '' }}</h1>
    <span class="app-header-title-hex" :style="'color: ' + (data.isDepth ? '#fff' : '#000')">{{ data.hex }}</span>
    <span class="app-header-title-rgb" :style="'color: ' + (data.isDepth ? '#fff' : '#000')">{{ data.rgb }}</span>
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
  height: 64px
  background-color: currentColor
  box-shadow: 0 1px 1px 0 currentColor, 0 2px 1px -2px currentColor, 0 1px 3px 0 currentColor
  transition: background-color 300ms, color 300ms
  .app-header-title
    font-weight: 400
    font-size: 20px
    line-height: 64px
    position: relative
    z-index: 1
    user-select: none
    margin-left: 20px
    font-weight: bold
  span
    position: absolute
    right: 20px
    display: block
    text-align: right
    width: 200px
    line-height: 26px
    z-index: 10
    &.app-header-title-hex
      top: 8px
    &.app-header-title-rgb
      bottom: 8px
</style>
