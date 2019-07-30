<template>
  <div class="recommend">
    <van-row gutter="10">
      <p class="recommend-song">推荐歌单</p>
      <van-col span="8" v-for="item in resultData" :key="item.id">
        <div class="image-style" >
            <img :src="item.picUrl"/>
        </div>
        <span class="song-name mb">{{ item.name }}</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'recommend-song',
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        resultData: this.data
      }
    },
    watch: {
      data: {
        handler(newVal) {
          this.albumList = newVal
        },
        immediate: true
      }
    }
  }
</script>

<style scoped>

</style>
