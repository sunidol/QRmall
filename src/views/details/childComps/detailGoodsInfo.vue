<template>
  <div v-if="Object.keys(detailInfo).length !== 0"
       class="detailInfo">
    <div class="info-desc clear-fix">
      <div class="start left"></div>
      <div class="desc">
        {{detailInfo.desc}}
      </div>
      <div class="end right"></div>
    </div>
    <div class="info-key">
      {{detailInfo.detailImage[0].key}}
    </div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list"
           :src="item"
           :key="index"
           alt=""
           @load="detailImg">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      count: 0,
      imgLength: 0
    }
  },
  methods: {
    detailImg () {
      if (++this.count === this.imgLength) {
        this.$emit('detailImgLength')
      }
    }
  },
  watch: {
    detailInfo () {
      this.imgLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>
<style scoped>
.detailInfo {
  margin-top: 24px;
  border-top: 3px solid #eee;
  padding: 20px 8px 0 8px;
}
/* .info-desc {
  clear: both;
} */
.start,
.end {
  width: 25%;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.start::before,
.end::after {
  content: "";
  width: 5px;
  height: 5px;
  position: absolute;
  bottom: 0;
  background-color: #333;
}
.end::after {
  right: 0;
}
.desc,
.info-key {
  padding: 15px 0;
  font-size: 14px;
}
.info-list img {
  width: 100%;
}
</style>