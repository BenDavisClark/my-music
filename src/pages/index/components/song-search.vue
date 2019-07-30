<template>
  <div class="song-search">
    <van-row>
      <div class="search-box mb">
        <input v-model="keywords" @focus.prevent="suggestsVisible = true" @blur.prevent="handlerBlur" placeholder="搜索歌曲" class="search-input">
      </div>
    </van-row>

    <div class="search-suggest pd18" v-if="suggestsVisible && keywords && suggestList.length">
      <div class="search-keyword" @click="search()">搜索"{{ keywords }}"</div>
      <div class="suggest-item pd18" v-for="(item, index) in suggestList" :key="index" @click="handleSelect(item.keyword)">
        {{ item.keyword }}
      </div>
    </div>

    <van-row>
      <div class="hotSearch" v-if="!playlist.length">
        <van-row>
          <p class="mb">热门搜索</p>
          <van-tag color="#f2826a" size="large" plain="true" v-for="item in hotSearch" @click="handleSelect(item.first)"
                   :key="item.id">{{ item.first }}
          </van-tag>
        </van-row>
      </div>
    </van-row>

    <van-row>
      <div class="play-list pd18" v-if="playlist.length">
        <van-cell-group v-for="(item,index) in playlist" :key="item.id">
          <span class="play-list-index">{{ index+1 }}</span>
          <van-cell :title="item.name" :label="item.artists[0].name" border="false">
            <van-icon slot="right-icon" name="play-circle-o" class="custom-icon" size="20px" @click="handlePlay(item)"/>
          </van-cell>
        </van-cell-group>
      </div>
    </van-row>

  </div>
</template>

<script>
  export default {
    name: "song-search",
    data() {
      return {
        suggestsVisible: false,
        playlist: [],
        suggestList: [],
        keywords: '',
        objword: '',
        hotSearch: []
      }
    },
    created(){
      this.initData()
    },
    methods: {
      initData(){
        // 热门搜索
        this.$request.get({
          url: '/search/hot',
        }).then(res => {
          this.hotSearch = res.result.hots.slice(0,10)
        })
      },

      // 搜索
      search() {
        this.suggestsVisible = false
        this.$request.get({
          url: `/search?keywords=${this.keywords}&limit=10`,
        }).then(res => {
          this.playlist = res.result.songs
        })
      },
      //搜索建议
      getSearchSuggest() {
        this.$request.get({
          url: `/search/suggest?keywords=${this.keywords}&type=mobile`,
        }).then(res => {
          this.suggestList = res.result.allMatch || []
        })
      },

      handleSelect(data) {
        this.keywords = data
        this.search()
      },

      handlerBlur(){
        this.search()
      },

      handlePlay(item) {
          wx.navigateTo({ url: `/pages/play/main?id=${item.id}` })
      }
    },
    watch: {
      keywords: function(newVal, oldVal) {
        if (newVal && newVal !== oldVal && this.suggestsVisible) {
          this.getSearchSuggest()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

.song-search{
  .search-box{
    padding: 15px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    color: #333;
    .search-input{
      padding: 5px 18px;
      border: 1px solid #eee;
      border-radius: 5px;
    }
  }
  .search-suggest{
    position:absolute;
    z-index: 100;
    top:70px;
    background-color: #fcfcfd;
    box-shadow: 0 10px 20px #ddd;
    font-size: 14px;
    padding: 0 5px;
    width:100%;
    .search-keyword{
      color: #507daf;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
    }
    .suggest-item{
        color: #666;
        padding: 10px 0;
        border-bottom: 1px solid #eee;
        &:last-child{
          border-bottom: 0
        }
    }
  }
  .search-keyword{
    color: #507daf;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }
  .play-list {
    .custom-icon {
      line-height: 50px;
      color: $color-primary;
    }
    .play-list-index{
      position:absolute;
      top:21px;
      z-index:99;
      left:-6px;
      color:$color-primary;
    }
  }
}
</style>
