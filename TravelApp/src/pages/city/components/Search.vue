<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" placeholder="请输入想去的城市" v-model="keyworld">
    </div>
    <div class="search-content" ref="search" v-show="keyworld">
      <ul>
        <li class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
import { mapMutations } from 'vuex';

export default {
  name: 'CitySearch',
  props: {
    cities: Object,
  },
  data() {
    return {
      keyword: '',
      timer: null,
      list: [],
    };
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push('/');
    },
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    },
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (const i in this.ciites) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1
              || value.name.indexOf(this.keyword) > -1) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
  mounted() {
    this.scroll = new Bscroll(this.$ref.search, {
      click: true,
    });
  }
};
</script>

<style lang="styl" scoped>
  @import '~style/varible.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      color: #666
      text-align: center
      height: .64rem
      width: 100%
      border-radius: .06rem
      box-sizing: border-box
      padding: 0 .1rem
      line-height: .64rem
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background: #fff
</style>