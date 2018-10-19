<template>
  <div>
    <router-link tag="div" to='/' class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" :style="opcityStyle" v-show="!showAbs">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opcityStyle: {
        opcity: 0,
      },
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opcity = top / 140;
        opcity = opcity > 1 ? 1 : opcity;
        this.opcityStyle = { opcity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    },
  },
  mounted() {
    window.addEventlistener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    text-align: center
    line-height: .8rem
    border-radius: .4rem
    background: rbg(0, 0, 0, .8)
    .header-abs-back
      color: #fff
      font-size: .4rem
    .header-fixed
      z-index: 2
      position: fixed
      top: 0
      left: 0
      right: 0
      height: $headerHeight
      line-height: $headerHeight
      text-align: center
      color: #fff
      background: $bgColor
      font-size: .4rem
      .header-fixed-back
        width: .64rem
        text-align: center
        font-size: .4rem
        position: absolute
        top: 0
        left: 0
        color: #fff
</style>