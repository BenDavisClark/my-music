<template>
  <div class="new-song mb">
    <van-row >
      <p class="new-song-head">
        <span :class="{'new-song-title':newTitle === 0}" @click="handleClickNewSong(0)">新碟</span>
        <span style="margin:0 10px;">|</span>
        <span :class="{'new-song-title':newTitle === 1}" @click="handleClickNewSong(1)">新歌</span>
      </p>
      <div class="mt">
        <van-row v-if="newTitle === 0" gutter="10">
          <van-col span="8" v-for="item in albumList" :key="item.id">
            <div class="image-style" >
              <img :src="item.picUrl"/>
            </div>
            <p class="song-name">{{ item.name }}</p>
          </van-col>
        </van-row>

        <van-row v-if="newTitle === 1" gutter="10">
          <van-col span="8" v-for="item in topSong" :key="item.id">
            <div class="image-style" >
                <img :src="item.album.picUrl"/>
            </div>
            <p class="song-name">{{ item.album.name }}</p>
          </van-col>
        </van-row>
      </div>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'new-song',
    props: {
      data: {
        type: Array,
        default: () => []
      },
      list: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        albumList: this.list,
        topSong: this.data,
        newTitle: 0
      }
    },
    methods: {
      handleClickNewSong(num){
        this.newTitle = num
      }
    },
    watch: {
       data: {
         handler(newVal) {
           this.topSong = newVal
         },
         immediate: true
       },
       list: {
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
