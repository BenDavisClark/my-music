<template>
    <div class="mine-index">
        <div class="pd18">
          <van-row gutter="10">
            <p class="ft16 mb" style="padding-left:8px;">
              我的关注
            </p>
            <template v-if="userSongs.length">
            <van-col span="8" v-for="item in userSongs" :key="item.id">
              <div class="image-style" >
                <img :src="item.avatarUrl" style="width:80px;height:80px;"/>
              </div>
              <p class="song-name mb ft12">{{ item.nickname }}</p>
              <p class="song-name mb ft12" v-if="item.signature">个性签名：{{ item.signature }}</p>
            </van-col>
            </template>
            <template v-else>
              <p class="pd18 ft14">暂无数据</p>
            </template>
          </van-row>
        </div>
        <van-row>
          <p class="ft16 pd18 mt mb">
            播放记录
          </p>
          <template v-if="playRecord.length">
            <van-cell-group v-for="item in playRecord" :key="item.id">
              <van-cell :title="item.song.al.name" :label="item.song.ar[0].name" border="false">
                <van-icon slot="right-icon" name="play-circle-o" class="custom-icon" size="20px" @click="handlePlay(item)"/>
              </van-cell>
            </van-cell-group>
          </template>

          <template v-else>
              <p class="ft14" style="padding-left:25px;">暂无数据</p>
          </template>
        </van-row>

    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name:'mine-index',
    data () {
      return {
        userSongs:[],
        playRecord:[]
      }
    },
    computed: {
      ...mapGetters({
          userInfo: 'getUserInfo'
        })
    },
    onLoad() {
      this.initData()
    },
    onShow() {
      this.initData()
    },
    methods: {
      initData() {
        // 我的关注
        this.$request.get({
          url: `/user/follows?uid=${this.userInfo.userId}`,
        }).then(res => {
          this.userSongs = res.follow.slice(0, 10)
        })

        // 获取用户播放记录
        this.$request.get({
          url: `/user/record?uid=${this.userInfo.userId}&type=1`,
        }).then(res => {
          this.playRecord = res.weekData.slice(0, 10)
        })
      },

      handlePlay(data) {
        wx.navigateTo({ url: `/pages/play/main?id=${data.song.id}` })
      }
    }
  }
</script>

<style lang="scss">
  .mine-index{
    .custom-icon {
      line-height: 50px;
      color: $color-primary;
    }
  }
</style>
