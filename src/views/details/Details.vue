<template>
  <div>
    <detailNavBar />
  </div>
</template>
<script>
import detailNavBar from './childComps/detailNavBar'

import { getDetail } from 'network/detail'
export default {
  data () {
    return {
      iid: null
    }
  },
  created () {
    //1-保存传入的商品 iid
    // console.log(this.$route.params.iid)
    this.iid = this.$route.params.iid
    //2-根据商品的iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res)
    })
  },
  components: {
    detailNavBar
  }
}
</script>
<style scoped>
</style>