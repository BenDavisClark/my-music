<template>
    <div class="songDetail" v-if="songDetail">
      <div class="song-bg" :style="{backgroundImage: 'url(' + songDetail.al.picUrl + ')'}">
      </div>

      <div class="song-warp mt2">
          <p class="ft16 song-name">{{ songDetail.name }}</p>
          <p class="ft12 song-name">{{ songDetail.ar[0].name }}</p>
          <hr class="mt" style="color:#fff;"/>
          <div class="song-inner" @click="toggleLyricVisible">
             <div class="song-disc" v-if="!lyricVisible">
                <div class="song-disc-light"></div>
                <div class="song-disc-dark"></div>
                <div class="song-cover-wrapper">
                  <div class="song-cover" :class="{rotate: isPlaying}" v-if="songDetail && songDetail.al">
                    <img class="song-cover-img" :src="songDetail.al.picUrl">
                  </div>
                </div>
              </div>
              <div class="song-lyric" v-else-if="lyricVisible && lyric"
                   :style="{top: lyricTop + 'px', transition: 'all 1s ease'}">
                <div v-for="(lyric,index) in lyric.lines" :key="index" :class="{'current': index === lyricCurrentLine}">
                  {{ lyric.txt }}
                </div>
              </div>
              <div class="no-lyric" v-else>
                纯音乐，请欣赏
              </div>
          </div>
      </div>
      <div class="song-play-info">
        <div class="song-progress mb">
          <div class="current-time song-time" style="margin-right: 15px;">{{ currentTime }}</div>
          <div class="bar-bg" @click="handleProgressClick">
            <div class="bar-inner" :style="{width: playProgress * 100 + '%'}"></div>
            <div class="bar-point" @touchmove="handleProgressTouchMove"></div>
          </div>
          <div class="duration song-time">{{ duration }}</div>
        </div>
        <div class="song-control">
          <van-icon name="replay" size="26px" color="#fff"/>
          <van-icon name="arrow-left" size="26px" color="#fff"/>
          <van-icon :name="isPlaying ? 'pause' : 'play'" size="26px" color="#fff" @click="togglePlay"/>
          <van-icon name="arrow" size="26px" color="#fff"/>
          <van-icon name="bars" size="26px" color="#fff"/>
        </div>
      </div>
    </div>
</template>

<script>
import Lyric from 'lyric-parser'
export default {
    name:'play-index',
    data () {
      return {
        songId: null, //歌曲id
        songDetail:null, //歌曲详情
        lyricVisible:false, //显示歌词
        lyric: null, //歌词内容
        isPlaying: false, //是否播放
        lyricCurrentLine: 0,
        lyricTop:0,
        playProgress: 0,
        progressRect: null,
        currentTime: 0,
        duration: 0,
        innerAudioContext: null,
        nolyric: false,
        songUrl: ''
      }
    },
    onLoad(option) {
      this.songId = option.id
    },
    mounted() {
      this.getSongDetail()
      this.createAudioCtx()
      this.getProgressRect()
    },
    methods: {
      // 创建音频
      async createAudioCtx() {
        let that = this
        const responseArr = await Promise.all([
          this.$request.get({url:`/song/url?id=${this.songId}`}),
          //this.$request.get({url:`/lyric?id=${this.songId}`}),
          this.$http.get(`/cloudmusic/?type=lyric&id=${this.songId}`)
        ])

        this.songUrl = responseArr[0].data[0].url

        if (!responseArr[1].data.lrc) {
          this.nolyric = true
        } else {
          const lyricStr = responseArr[1].data.lrc.lyric
          this.lyric = new Lyric(lyricStr, this.handleLyric)
        }

        this.innerAudioContext = wx.createInnerAudioContext()  // 创建内部 audio 上下文 InnerAudioContext 对象

        this.innerAudioContext.autoplay = false
        this.innerAudioContext.src = this.songUrl
        this.innerAudioContext.onPlay(() => {
          this.playProgress = this.innerAudioContext.currentTime / this.innerAudioContext.duration
          this.currentTime = this.formatTime(this.innerAudioContext.currentTime)
          this.duration = this.formatTime(this.innerAudioContext.duration)
        })

        this.innerAudioContext.onTimeUpdate(() => {
          this.playProgress = this.innerAudioContext.currentTime / this.innerAudioContext.duration
          this.currentTime = this.formatTime(this.innerAudioContext.currentTime)
          this.duration = this.formatTime(this.innerAudioContext.duration)
        })
        this.innerAudioContext.onSeeked(() => {
          this.playProgress = this.innerAudioContext.currentTime / this.innerAudioContext.duration
          this.currentTime = this.formatTime(this.innerAudioContext.currentTime)
        })
        this.innerAudioContext.onPause(() => {
        })
        this.innerAudioContext.onEnded(() => {
          this.isPlaying = false
          this.lyric.stop()
          setTimeout(() => {
            that.togglePlay()
            that.lyric.seek(0)
          }, 1000)
        })
        this.innerAudioContext.onError((res) => {
          vant.Toast.fail(res.errMsg);
        })
        this.togglePlay()
      },

      getProgressRect() {
        const query = wx.createSelectorQuery() //创建节点查询器 query
        query.select('.bar-bg').boundingClientRect()  //选择class=bar-bg的节点
        query.exec((res) => {
          if (res.length) {
            this.progressRect = res[0]
          }
        })
      },

      // 切换播放
      togglePlay() {
        if (this.isPlaying) {
          this.innerAudioContext.pause()
        } else {
          this.innerAudioContext.play()
        }
        this.isPlaying = !this.isPlaying
        // if (!this.nolyric) {
        //   this.lyric.togglePlay()
        // }
      },

      /**
       *
       * @param time 单位为秒
       * @returns {Promise<void>}
       */
      seekTime(time) {
        this.innerAudioContext.seek(time)
        if (!this.nolyric) {
          this.lyric.seek(time * 1000)
        }
      },

      // 进度条点击
      handleProgressClick(e) {
        let progress = (e.target.x - this.progressRect.left) / (this.progressRect.right - this.progressRect.left)
        let seekTime = Number((this.innerAudioContext.duration * progress).toFixed(3))
        this.seekTime(seekTime)
      },

      //进度条移动
      handleProgressTouchMove(e) {
        let progress = (e.clientX - this.progressRect.left) / (this.progressRect.right - this.progressRect.left)
        let seekTime = Number((this.innerAudioContext.duration * progress).toFixed(3))
        this.seekTime(seekTime)
      },

      //歌词切换
      toggleLyricVisible() {
        this.lyricVisible = !this.lyricVisible
      },

      formatTime(seconds) {
        let m, s
        m = Math.floor(seconds / 60)
        m = m.toString().length === 1 ? ('0' + m) : m
        s = Math.floor(seconds - 60 * m)
        s = s.toString().length === 1 ? ('0' + s) : s
        return m + ':' + s
      },

      handleLyric({lineNum, txt}) {
        this.lyricCurrentLine = lineNum
        if (lineNum > 6) {
          this.lyricTop = (lineNum - 6) * -20
        } else {
          this.lyricTop = 0
        }
      },

      // 获取歌曲详情
      getSongDetail() {
        this.$request.get({
          url: `/song/detail?ids=${this.songId}`,
        }).then(res => {
          this.songDetail = res.songs[0]
        })
      }
    },
    onUnload() {
      this.innerAudioContext.destroy()
      if (!this.nolyric) {
        this.lyric.destroy()
      }
      this.isPlaying = false
      this.lyricVisible = false
    }
}
</script>

<style lang="scss">
  @keyframes rotates {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  $progress-bar-height: 3px;
  .songDetail {
    .song-bg {
      opacity: 1;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: auto 100%;
      transform: scale(1.5);
      transform-origin: center top;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      z-index: -1;
      transition: opacity .3s linear;
      filter: blur(5px);
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: ' ';
        background-color: rgba(0, 0, 0, .8);
      }
    }
    .song-warp {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 100px;
      left: 0;
      z-index: 10;
      p {
        color: #fff;
      }
      .song-inner {
        position: relative;
        margin-top: 30px;
        height: calc(100% - 50px);
        overflow: auto;
      }
    }
    .song-name {
      color: #fff;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }
    .song-lyric {
      position: absolute;
      left: 50px;
      right: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: rgba(255, 255, 255, .6);
      font-size: 14px;
      line-height: 2;
      text-align: center;
      .current {
        color: #fff;
      }
    }
    .no-lyric {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 14px;
      text-align: center;
    }
    .song-disc{
      position: relative;
      width: 260px;
      height: 260px;
      margin: 80px auto;
      .song-disc-light {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url("https://s3.music.126.net/m/s/img/disc_light-ip6.png?996fc8a2bc62e1ab3f51f135fc459577");
        background-size: contain;
        z-index: 1;
      }
      .song-disc-dark {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url("https://s3.music.126.net/m/s/img/disc-ip6.png?69796123ad7cfe95781ea38aac8f2d48");
        background-size: contain;
        z-index: 2;
      }
    }
    .song-cover-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 3;
      .song-cover {
        position: relative;
        width: 100%;
        height: 100%;
        .song-cover-img {
          position: absolute;
          width: 200px;
          height: 200px;
          top: 12%;
          left: 12%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          animation: rotates 20s linear infinite;
        }
      }
    }
    .song-play-info{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 80px;
      z-index: 10;
      .song-control{
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
      }
    }
  .song-progress{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    .song-time{
      color: #fff;
      font-size: 10px;
    }
    .duration{
      margin-left: 5px;
    }
    .current-time{
      margin-right: 10px;
    }
  }
  .bar-bg{
    width: calc(100% - 42px);
    position: relative;
    height: $progress-bar-height;
    background-color: #ccc;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .bar-inner{
    height: $progress-bar-height;
    background-color: $color-primary;
  }
  .bar-point{
    margin-left: -6px;
    width: 3px;
    height: 3px;
    background-color: $color-primary;
    border: 6px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  }
</style>
