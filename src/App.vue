<template>
  <div id="app">
    <cfs-header :data="currData"></cfs-header>
    <section class="list-container">
      <div class="app-main">
        <div class="app-main-items" v-for="(items, type) in data" :key="type">
          <div class="app-main-items-head">
            <div class="app-main-items-head-title">{{ items.title }}</div>
          </div>
          <div class="app-main-items-body">
            <div v-for="(item, index) in items.list" :key="index" class="app-main-items-card">
              <cfs-card :data="item" :index="index" :type="type" @click="changeColor"></cfs-card>
            </div>
          </div>
        </div>
      </div>
    </section>
    <cfs-footer></cfs-footer>
  </div>
</template>

<script>
import CfsHeader from 'components/header/header'
import CfsCard from 'components/card/card'
import CfsFooter from 'components/footer/footer'

import { colorDepthByRgb, hex2Rgb } from 'common/js/util'
import listData from 'common/js/data'

export default {
  components: {
    CfsHeader,
    CfsCard,
    CfsFooter
  },
  data () {
    return {
      data: listData || [],
      currData: null,
      copied: false
    }
  },
  created () {
    this._initData()
  },
  methods: {
    _initData () {
      let _data = this.data
      _data.map(_items => {
        _items.list.map(_item => {
          _item.rgb = hex2Rgb(_item.hex)
          _item.isDepth = colorDepthByRgb(_item.rgb)
          return _item
        })
        return _items
      })
      let _currList = _data[Math.floor((Math.random() * _data.length))].list || []
      this.currData = _currList[Math.floor((Math.random() * _currList.length))]
      this.data = _data
    },
    changeColor (type, index) {
      this.currData = this.data[type].list[index]
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
    margin: 30px auto
    .app-main-items
      background-color: #fff
      border-radius: 2px
      font-size: 12px
      border: 1px solid $color-main-border
      margin: 0 15px 30px 15px
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
