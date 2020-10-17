<template>
  <NavBar>
    <div slot="left"
         @click="back">
      <img src="~assets/img/common/back.svg"
           alt=""
           class="backImg">
    </div>
    <div slot="center">
      <div class="title">
        <div v-for="(item, index) in title"
             :key="index"
             class="title-item"
             @click="changeTitle(index)"
             :class="{active: index===currentIdx}">{{item}}</div>
      </div>
    </div>
  </NavBar>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data () {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      isActive: false,
      currentIdx: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    back () {
      this.$router.back()
    },
    changeTitle (index) {
      this.currentIdx = index
      this.$emit('themeClick', index)
    }
  }
}
</script>
<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 13px;
}
.backImg {
  margin-top: 10px;
}
.active {
  color: var(--color-high-text);
}
</style>