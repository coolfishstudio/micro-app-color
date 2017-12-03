<template>
  <footer>
    <a href="https://github.com/coolfishstudio/cfs-color" target="_blank">
      <svg class="icon" style="width: 50px; height: 50px;">
        <use xlink:href="static/icon.svg#github"></use>
      </svg>
    </a>
    <div>
      <a href="http://yitianyibu.com/" target="_blank">
      yitianyibu.com
      </a> 作品
    </div>
  </footer>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
footer
  padding: 50px
  color: #999
  text-align: center
  a, svg
    transition: all .5s ease
  a
    color: #999
    &:hover
      color: #333
  svg
    fill: #999
    &:hover
      fill: #333
</style>
