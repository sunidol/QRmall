<template>
  <div class="tabbar-item"
       @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeText">
      <slot name="item-text"></slot>
    </div>

    <!-- <img src="../../assets/img/tabbar/home.svg"
         alt="">
    <div>首页</div> -->
  </div>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    txtColor: {
      type: String,
      default: 'deeppink'
    }
  },
  data () {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive () {
      return this.$route.path === this.path
    },
    activeText () {
      return this.isActive ? { 'color': this.txtColor } : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)
    }
  }
}
</script>
<style scoped>
.tabbar-item {
  flex: 1;
  height: 49px;

  text-align: center;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;

  margin-top: 3px;
  vertical-align: middle;
}
</style>
