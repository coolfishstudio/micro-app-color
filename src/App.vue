<template>
  <div id="app">
    <cfs-header :data="currData"></cfs-header>
    <section class="list-container">
      <div class="app-main">
        <div class="app-main-items">
          <div class="app-main-items-head">
            <div class="app-main-items-head-title">中国传统色彩标准色卡</div>
          </div>
          <div class="app-main-items-body">
            <div v-for="(item, index) in list" :key="index" class="app-main-items-card" @click="changeColor(index)">
              <div class="app-main-item" :style="'background-color: ' + item.hex + ';color: ' + (item.isDepth ? '#fff' : '#000')">
                <p>{{ item.name }}</p>
                <p>{{ item.hex }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CfsHeader from 'components/header/header'

import { colorDepthByRgb, hex2Rgb } from 'common/js/util'
import listData from 'common/js/data'

export default {
  components: {
    CfsHeader
  },
  data () {
    return {
      list: listData || [],
      currData: null
    }
  },
  created () {
    this._initData()
  },
  methods: {
    _initData () {
      let data = this.list
      data.map(item => {
        item.rgb = hex2Rgb(item.hex)
        item.isDepth = colorDepthByRgb(item.rgb)
        return item
      })
      this.currData = data[Math.floor((Math.random() * data.length))]
      this.list = data
    },
    changeColor (index) {
      this.currData = this.list[index]
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.list-container
  overflow-x: hidden
  overflow-y: scroll
  margin-top: 64px
  -webkit-overflow-scrolling: touch
  .app-main
    width: 100%
    max-width: 800px
    margin: 24px auto
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
          cursor: pointer
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
