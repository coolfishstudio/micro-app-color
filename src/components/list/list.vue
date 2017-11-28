<template>
  <div class="app-main-items">
    <div class="app-main-items-head">
      <div class="app-main-items-head-title">中国传统色彩标准色卡</div>
    </div>
    <div class="app-main-items-body">
      <div v-for="(item, index) in list" :key="index" class="app-main-items-card">
        <div class="app-main-item" :style="'background-color: ' + item.hex + ';color: ' + (item.isDepth ? '#fff' : '#000')">
          <p>{{ item.name }}</p>
          <p>{{ item.hex }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { colorDepthByRgb, hex2Rgb } from 'common/js/util'

let data = [{ name: '精白', hex: '#ffffff' },
  { name: '银白', hex: '#e9e7ef' },
  { name: '铅白', hex: '#f0f0f4' },
  { name: '霜色', hex: '#e9f1f6' },
  { name: '雪白', hex: '#f0fcff' },
  { name: '莹白', hex: '#e3f9fd' },
  { name: '月白', hex: '#d6ecf0' },
  { name: '象牙白', hex: '#fffbf0' },
  { name: '缟', hex: '#f2ecde' },
  { name: '鱼肚白', hex: '#fcefe8' },
  { name: '白粉', hex: '#fff2fd' },
  { name: '茶白', hex: '#f3f9f1' },
  { name: '鸭卵青', hex: '#e0eee8' },
  { name: '素', hex: '#e0f0e9' },
  { name: '青白', hex: '#c0ebd7' },
  { name: '蟹壳青', hex: '#bbcdc5' }]

export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this._initData()
  },
  methods: {
    _initData () {
      data.map(item => {
        item.rgb = hex2Rgb(item.hex)
        item.isDepth = colorDepthByRgb(item.rgb)
        return item
      })
      this.list = data
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.app-main-items
  background-color: #fff
  border-radius: 2px
  font-size: 12px
  border: 1px solid $color-main-border
  margin: 0 15px
  .app-main-items-head
    height: 48px
    line-height: 48px
    border-bottom: 1px solid $color-main-border
    padding: 0 24px
    .app-main-items-head-title
      font-size: 14px
      color: $color-main-title
      font-weight: 500
  .app-main-items-body
    padding: 0
    margin-right: -1px
    margin-bottom: -1px
    &:after
      content: ''
      display: block
      clear: both
    .app-main-items-card
      width: 25%
      float: left
      position: relative
      z-index: 1
      .app-main-item
        padding: 5px 0 5px 10px
        color: #fff
        border: 1px solid $color-main-border
        border-top: 0
        border-left: 0
        border-bottom-right-radius: 10px
        p
          padding: 5px 0
</style>
