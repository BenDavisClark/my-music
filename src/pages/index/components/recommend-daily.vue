<template>
  <div class="recommend-daily">
    <div class="recommend">
      <van-row gutter="10">
        <p class="recommend-song">推荐歌单</p>
        <van-col span="8" v-for="item in resultData" :key="item.id">
          <div class="image-style" >
            <img :src="item.picUrl"/>
          </div>
          <p class="song-name mb">{{ item.name }}</p>
        </van-col>
      </van-row>
    </div>
    <div class="recommend-daily-new">
      <van-row gutter="10">
        <p class="mt ">新歌速递</p>
        <van-cell-group v-for="item in newData" :key="item.id">
          <van-cell :title="item.name" :label="item.ar[0].name" border="false">
            <van-icon slot="right-icon" name="play-circle-o" class="custom-icon" size="20px" @click="handlePlay(item)"/>
          </van-cell>
        </van-cell-group>
      </van-row>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'recommend-daily',
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
        resultData: this.data,
        newData: this.list
      }
    },
    methods: {
      ...mapMutations({
        setSongInfo: 'setSongInfo'
      }),
      handlePlay(data) {
        this.setSongInfo(data)
      }
    },
    watch: {
      data: {
        handler(newVal) {
          this.resultData = newVal
        },
        immediate: true
      },
      list: {
        handler(newVal) {
          this.newData = newVal
        },
        immediate: true
      }
    }
  }
</script>

<style lang="scss">
  .recommend-daily {
    .recommend-daily-new {
      p {
        padding: 0 18px;
      }
      .van-cell {
        padding: 10px 18px;
      }
      .custom-icon {
        line-height: 50px;
        color: $color-primary;
      }
    }
  }

</style>
