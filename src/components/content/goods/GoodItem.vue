<template>
  <div class="good-item"
       @click="itemDetail">
    <img :src="showImg"
         alt=""
         @load="imgLoad">
    <div class="good-info">
      <p>{{goodItem.title}}</p>
      <span class="price">{{goodItem.price}}</span>
      <span class="collect">{{goodItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    showImg () {
      return this.goodItem.image || this.goodItem.show.img
    }
  },
  methods: {
    imgLoad () {
      // console.log('图片加载完成就会调用该函数')
      //betterScroll需要监听每一张图片是否加载完成，加载完成就让scroll实例调用refresh
      this.$bus.$emit('imgLoadFinished')

      //为了让监听事件在不同路由时，发送给不同组件，可以用条件判断,还有一个办法就是及时取消home页面的事件监听
      // if(this.$route.path.indexOf('/home')){
      //   this.$bus.$emit('homeImgLoadFinished')
      // }else if(this.$route.path.indexOf('/detail')){
      //   this.$bus.$emit('detailImgLoadFinished')
      // }
    },
    itemDetail () {
      // console.log(this.goodItem.iid)
      if (this.goodItem.iid !== undefined) {
        this.$router.push('/detail/' + this.goodItem.iid)
      } else {
        window.location.href = this.goodItem.item_url
      }
    }
  }
}
</script>
<style scoped>
.good-item {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}
.good-item img {
  width: 100%;
  border-radius: 5px;
}
.good-info {
  position: absolute;
  left: 0;
  bottom: 5px;
  right: 0;

  text-align: center;

  font-size: 12px;
}
.good-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.good-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.good-info .collect {
  position: relative;
}
.good-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>