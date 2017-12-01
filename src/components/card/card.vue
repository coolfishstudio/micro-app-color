<template>
  <div class="app-main-item" :style="'background-color: ' + data.hex + ';border-color: ' + data.hex + ';color: ' + (data.isDepth ? '#fff' : '#000')" :class="{'copied': copied}" @click="changeColor(type, index)">
    <p class="app-main-item-name">【{{ data.name }}】</p>
    <p>{{ data.hex }}</p>
  </div>
</template>

<script>
import { copy, device } from 'common/js/util'
export default {
  data () {
    return {
      copied: false
    }
  },
  props: {
    data: null,
    index: 0,
    type: 0
  },
  methods: {
    changeColor (type, index) {
      this.$emit('click', type, index)
      if (device.isPC()) {
        copy(this.data.hex, () => {
          this.copied = true
          console.log('复制成功')
          setTimeout(() => {
            this.copied = false
          }, 1000)
        })
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app-main-item
  padding: 20px 0
  text-align: center
  color: #fff
  background-color: currentColor
  border-radius: 4px
  margin: 2px
  border: 1px solid currentColor
  transition: all 150ms cubic-bezier(0,0,.21,1)
  position: relative
  &:after
    content: 'Copied!'
    display: block
    position: absolute
    width: 100%
    height: 100%
    top: 0
    right: 0
    text-align: right
    line-height: 150px
    color: currentColor
    transition: all .3s cubic-bezier(.18,.89,.32,1.28)
    opacity: 0
  &:hover
    transform: translateY(-1px)
    box-shadow: 0 0 0.5rem #eee
    border-color: #eee
  &.copied
    &:after
      opacity: 1
      right: 10px
  p
    padding: 5px 0
    font-weight: bold
    &.app-main-item-name
      font-size: 14px
</style>
