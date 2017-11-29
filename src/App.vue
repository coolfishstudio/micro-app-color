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
            <div v-for="(item, index) in list" :key="index" class="app-main-items-card">
              <cfs-card :data="item" :index="index" @click="changeColor"></cfs-card>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CfsHeader from 'components/header/header'
import CfsCard from 'components/card/card'

import { colorDepthByRgb, hex2Rgb } from 'common/js/util'
import listData from 'common/js/data'

export default {
  components: {
    CfsHeader,
    CfsCard
  },
  data () {
    return {
      list: listData || [],
      currData: null,
      copied: false
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
        padding: 2px
        margin-right: -1px
        &:after
          content: ''
          display: block
          clear: both
        .app-main-items-card
          width: 33.33%
          float: left
          position: relative
          z-index: 1
          cursor: pointer
</style>
