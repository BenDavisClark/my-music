<template>
  <div class="page-index">
    <van-row>
      <van-tabs animated @change="handleChange" :active="active">
        <van-tab title="发现">
          <div class="mt">
            <van-row>
              <swiper class="swiper" indicator-dots="true" autoplay="true" interval="2000" duration="1000">
                <block v-for="(item, index) in imgUrls" :key="index">
                  <swiper-item>
                    <image :src="item" class="slide-image" mode="widthFix"/>
                  </swiper-item>
                </block>
              </swiper>
            </van-row>
          </div>
          <van-row class="pageRow mt" gutter="10">
            <van-col span="6">
              <van-icon name="youzan-shield"/>
              <span>每日推荐</span>
            </van-col>
            <van-col span="6">
              <van-icon name="comment"/>
              <span>歌单</span>
            </van-col>
            <van-col span="6">
              <van-icon name="point-gift"/>
              <span>排行榜</span>
            </van-col>
            <van-col span="6">
              <van-icon name="diamond"/>
              <span>电台</span>
            </van-col>
          </van-row>
          <hr/>
          <recommend-song
            :data="resultData"
          >
          </recommend-song>

          <new-song
            :data="topSong"
            :list="albumList"
          >
          </new-song>

        </van-tab>

        <van-tab title="推荐">
          <recommend-daily
            :data="resultData"
            :list="newSong"
          >
          </recommend-daily>
        </van-tab>

        <van-tab title="热歌榜">
          <div class="recommend-daily-hot">
            <img src="cloud://dev-ev-hu-3r6iu.6465-dev-ev-hu-3r6iu/hotSong.jpeg"/>
            <van-row gutter="10">
              <van-cell-group v-for="item in hotSong" :key="item.id">
                <van-cell :title="item.name" :label="item.ar[0].name" border="false">
                  <van-icon slot="right-icon" name="play-circle-o" class="custom-icon" size="20px"
                            @click="handlePlay(item)"/>
                </van-cell>
              </van-cell-group>
            </van-row>
          </div>
        </van-tab>

        <van-tab title="搜索">
          <song-search></song-search>
        </van-tab>
      </van-tabs>

    </van-row>
  </div>
</template>

<script>

  import RecommendSong from './components/recommend-song'
  import NewSong from './components/new-song'
  import RecommendDaily from './components/recommend-daily'
  import SongSearch from './components/song-search'
  import { mapMutations } from 'vuex'

  export default {
    components: {
      RecommendSong,
      NewSong,
      RecommendDaily,
      SongSearch
    },
    data() {
      return {
        suggestsVisible: false,
        keywords:'',
        active: 0,
        suggestList:[], //搜索列表
        resultData: [],
        topSong: [], // 华语新歌
        newSong: [], // 新歌榜
        albumList: [], // 新碟
        hotSong: [], // 热歌榜
        imgUrls: [
          'cloud://dev-ev-hu-3r6iu.6465-dev-ev-hu-3r6iu/star1.jpg',
          'cloud://dev-ev-hu-3r6iu.6465-dev-ev-hu-3r6iu/star2.jpg',
          'cloud://dev-ev-hu-3r6iu.6465-dev-ev-hu-3r6iu/star3.jpg'
        ]
      }
    },

    methods: {
       ...mapMutations({
        setSongInfo: 'setSongInfo'
      }),
      // 初始化数据
      initData() {
        //推荐歌单
        this.$request.get({
          url: '/personalized',
        }).then(res => {
          this.resultData = res.result.slice(0, 6)
        })

        // 华语新歌
        this.$request.get({
          url: '/top/song?type=7',
        }).then(res => {
          this.topSong = res.data.slice(0, 3)
        })

        // 新碟
        this.$request.get({
          url: '/top/album?offset=0&limit=3',
        }).then(res => {
          this.albumList = res.albums
        })

        // 新歌榜
        const idx = 0
        this.$request.get({
          url: `/top/list?idx=${idx}`,
        }).then(res => {
          this.newSong = res.playlist.tracks.slice(0, 20)
        })

        // 热歌榜
        let index = 1
        this.$request.get({
          url: `/top/list?idx=${index}`,
        }).then(res => {
          this.hotSong = res.playlist.tracks.slice(0, 20)
        })
      },

      handleChange(event) {
        //console.log(event)
      },
      handlePlay(data) {
        this.setSongInfo(data)
        wx.navigateTo({ url: `/pages/play/main?id=${data.id}` })
      }
    },
    created() {
      this.initData()
    }
  }
</script>

<style lang="scss">
  .page-index {
    .van-hairline--top-bottom::after {
      border-width: 0;
    }
    .swiper {
      padding: 0 18px;
      border-radius: 5px;
      image {
        height: 240px !important;
        width: 100%;
      }
    }
    .song-name {
      font-size: 12px;
    }
    .pageRow {
      width: 100%;
      display: inline-block;
      float: none;
      height: 100px;
      text-align: center;
      vertical-align: middle;
      .van-icon {
        margin: 20px 0 10px;
        color: #323233;
        font-size: 32px;
        color: $color-primary;
      }
      .van-col span {
        display: block;
        padding: 0 5px;
        color: #7d7e80;
        font-size: 12px;
        line-height: 18px;
      }
    }
    .recommend {
      padding: 0 18px;
      _van-col{
        float:left;
      }
      .recommend-song {
        margin: 0 0 10px 5px;
      }
      img {
        width: 100%;
        height: 85px;
      }
    }
    .new-song {
      padding: 0 18px;
      img {
        width: 100%;
        height: 85px;
      }
      .new-song-head {
        font-size: 12px;
        span {
          color: #7d7e80;
        }
      }
      .new-song-title {
        font-size: 16px;
        color: #323233!important;
      }
    }
    .recommend-daily-hot {
      img{
        width:100%;
        height:240px;
      }
      .van-cell {
        padding: 10px 18px;
      }
      .custom-icon {
        line-height: 50px;
        color: $color-primary;
      }
    }
    .hotSearch{
       padding:0 18px;
      display: flex;
      flex-direction:row;
      justify-content : center;
      align-items : center;
      .van-tag{
        margin:0 10px 10px 0;
        &:hover{
          color:#fff!important;
          background-color: #f2826a;
        }
        &:active{
          color:#fff!important;
          background-color: #f2826a;
        }
      }
    }
    .song-name{
      width:100%;
      float:left;
      height:35px;
      color: #7d7e80;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .image-style{
      width:100%;
      height:85px;
      border-radius:5px;
      overflow:hidden;
    }
  }
</style>
