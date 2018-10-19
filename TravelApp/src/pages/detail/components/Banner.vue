<template>
  <div>
    <div class="banner" @click="handleGallaryClick">
      <img class="banner-img" :src='bannerImg'>
      <div class="banner-info">
        <div class="banner-title">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <Fade>
      <commom-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></commom-gallary>
    </Fade>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary';
import Fade from 'common/fade/Fade'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    Fade,
  },
  props: {
    sightName: String,
    bannerImgs: Array,
    bannerImg: String,
  },
  data() {
    return {
      showGallary: false,
    };
  },
  methods: {
    handleGallaryClose() {
      this.showGallary = false;
    },
    handleLetterClick() {
      this.showGallary = true;
    },
  },
};
</script>
<style lang="styl" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 50%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        padding: 0 .4rem
        margin-top: .14rem
        border-radius: .2rem
        backgorund: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>