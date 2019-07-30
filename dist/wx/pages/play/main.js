require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(123);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3f41f1fa_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(131);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(124)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3f41f1fa_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/play/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f41f1fa", Component.options)
  } else {
    hotAPI.reload("data-v-3f41f1fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lyric_parser__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lyric_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lyric_parser__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'play-index',
  data: function data() {
    return {
      songId: null,
      songDetail: null,
      lyricVisible: false,
      lyric: null,
      isPlaying: false,
      lyricCurrentLine: 0,
      lyricTop: 0,
      playProgress: 0,
      progressRect: null,
      currentTime: 0,
      duration: 0,
      innerAudioContext: null,
      nolyric: false,
      songUrl: ''
    };
  },
  onLoad: function onLoad(option) {
    this.songId = option.id;
  },
  mounted: function mounted() {
    this.getSongDetail();
    this.createAudioCtx();
    this.getProgressRect();
  },

  methods: {
    // 创建音频
    createAudioCtx: function createAudioCtx() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var responseArr, lyricStr;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all([_this.$request.get({ url: '/song/url?id=' + _this.songId }), _this.$http.get('/cloudmusic/?type=lyric&id=' + _this.songId)]);

              case 2:
                responseArr = _context.sent;


                console.log(responseArr);

                _this.songUrl = responseArr[0].data[0].url;

                if (!responseArr[1].data.lrc) {
                  _this.nolyric = true;
                } else {
                  lyricStr = responseArr[1].data.lrc.lyric;

                  _this.lyric = new __WEBPACK_IMPORTED_MODULE_3_lyric_parser___default.a(lyricStr, _this.handleLyric);
                  console.log(_this.lyric);
                }

                _this.innerAudioContext = wx.createInnerAudioContext(); // 创建内部 audio 上下文 InnerAudioContext 对象

                _this.innerAudioContext.autoplay = true;
                _this.innerAudioContext.src = _this.songUrl;
                console.log(_this.innerAudioContext.src);
                _this.innerAudioContext.onPlay(function () {
                  console.log('开始播放');
                  console.log("innerAudioContext", _this.innerAudioContext);
                  _this.playProgress = _this.innerAudioContext.currentTime / _this.innerAudioContext.duration;
                  _this.currentTime = _this.formatTime(_this.innerAudioContext.currentTime);
                  _this.duration = _this.formatTime(_this.innerAudioContext.duration);
                });

                _this.innerAudioContext.onTimeUpdate(function () {
                  _this.playProgress = _this.innerAudioContext.currentTime / _this.innerAudioContext.duration;
                  _this.currentTime = _this.formatTime(_this.innerAudioContext.currentTime);
                  _this.duration = _this.formatTime(_this.innerAudioContext.duration);
                });
                _this.innerAudioContext.onSeeked(function () {
                  _this.playProgress = _this.innerAudioContext.currentTime / _this.innerAudioContext.duration;
                  _this.currentTime = _this.formatTime(_this.innerAudioContext.currentTime);
                });
                _this.innerAudioContext.onPause(function () {});
                _this.innerAudioContext.onEnded(function () {
                  _this.isPlaying = false;
                  _this.lyric.stop();
                  setTimeout(function () {
                    _this.togglePlay();
                    _this.lyric.seek(0);
                  }, 1000);
                });
                _this.innerAudioContext.onError(function (res) {
                  console.log(res.errMsg);
                  console.log(res.errCode);
                });
                _this.togglePlay();

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getProgressRect: function getProgressRect() {
      var _this2 = this;

      var query = wx.createSelectorQuery();
      query.select('.bar-bg').boundingClientRect();
      query.exec(function (res) {
        if (res.length) {
          _this2.progressRect = res[0];
        }
      });
    },


    // 切换播放
    togglePlay: function togglePlay() {
      if (this.isPlaying) {
        this.innerAudioContext.pause();
      } else {
        this.innerAudioContext.play();
      }
      this.isPlaying = !this.isPlaying;
      if (!this.nolyric) {
        this.lyric.togglePlay();
      }
    },


    /**
     *
     * @param time 单位为秒
     * @returns {Promise<void>}
     */
    seekTime: function seekTime(time) {
      this.innerAudioContext.seek(time);
      if (!this.nolyric) {
        this.lyric.seek(time * 1000);
      }
    },


    // 进度条点击
    handleProgressClick: function handleProgressClick(e) {
      var progress = (e.target.x - this.progressRect.left) / (this.progressRect.right - this.progressRect.left);
      var seekTime = Number((this.innerAudioContext.duration * progress).toFixed(3));
      this.seekTime(seekTime);
    },


    //进度条移动
    handleProgressTouchMove: function handleProgressTouchMove(e) {
      var progress = (e.clientX - this.progressRect.left) / (this.progressRect.right - this.progressRect.left);
      var seekTime = Number((this.innerAudioContext.duration * progress).toFixed(3));
      this.seekTime(seekTime);
    },


    //歌词切换
    toggleLyricVisible: function toggleLyricVisible() {
      this.lyricVisible = !this.lyricVisible;
    },
    formatTime: function formatTime(seconds) {
      var m = void 0,
          s = void 0;
      m = Math.floor(seconds / 60);
      m = m.toString().length === 1 ? '0' + m : m;
      s = Math.floor(seconds - 60 * m);
      s = s.toString().length === 1 ? '0' + s : s;
      return m + ':' + s;
    },
    handleLyric: function handleLyric(_ref) {
      var lineNum = _ref.lineNum,
          txt = _ref.txt;

      this.lyricCurrentLine = lineNum;
      if (lineNum > 6) {
        this.lyricTop = (lineNum - 6) * -20;
      } else {
        this.lyricTop = 0;
      }
    },


    // 获取歌曲详情
    getSongDetail: function getSongDetail() {
      var _this3 = this;

      this.$request.get({
        url: '/song/detail?ids=' + this.songId
      }).then(function (res) {
        _this3.songDetail = res.songs[0];
      });
    }
  },
  onUnload: function onUnload() {
    this.innerAudioContext.destroy();
    if (!this.nolyric) {
      this.lyric.destroy();
    }
    this.isPlaying = false;
    this.lyricVisible = false;
  }
});

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.songDetail) ? _c('div', {
    staticClass: "songDetail"
  }, [_c('div', {
    staticClass: "song-bg",
    style: ({
      backgroundImage: 'url(' + _vm.songDetail.al.picUrl + ')'
    })
  }), _vm._v(" "), _c('div', {
    staticClass: "song-warp mt2"
  }, [_c('p', {
    staticClass: "ft16 song-name"
  }, [_vm._v(_vm._s(_vm.songDetail.al.name))]), _vm._v(" "), _c('p', {
    staticClass: "ft12 song-name"
  }, [_vm._v(_vm._s(_vm.songDetail.ar[0].name))]), _vm._v(" "), _c('hr', {
    staticClass: "mt",
    staticStyle: {
      "color": "#fff"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "song-inner",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toggleLyricVisible
    }
  }, [(!_vm.lyricVisible) ? _c('div', {
    staticClass: "song-disc"
  }, [_c('div', {
    staticClass: "song-disc-light"
  }), _vm._v(" "), _c('div', {
    staticClass: "song-disc-dark"
  }), _vm._v(" "), _c('div', {
    staticClass: "song-cover-wrapper"
  }, [(_vm.songDetail && _vm.songDetail.al) ? _c('div', {
    staticClass: "song-cover",
    class: {
      rotate: _vm.isPlaying
    }
  }, [_c('img', {
    staticClass: "song-cover-img",
    attrs: {
      "src": _vm.songDetail.al.picUrl
    }
  })]) : _vm._e()])]) : (_vm.lyricVisible && _vm.lyric) ? _c('div', {
    staticClass: "song-lyric",
    style: ({
      top: _vm.lyricTop + 'px',
      transition: 'all 1s ease'
    })
  }, _vm._l((_vm.lyric.lines), function(lyric, index) {
    return _c('div', {
      key: index,
      class: {
        'current': index === _vm.lyricCurrentLine
      }
    }, [_vm._v("\n              " + _vm._s(lyric.txt) + "\n            ")])
  })) : _c('div', {
    staticClass: "no-lyric"
  }, [_vm._v("\n            纯音乐，请欣赏\n          ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "song-play-info"
  }, [_c('div', {
    staticClass: "song-progress mb"
  }, [_c('div', {
    staticClass: "current-time song-time",
    staticStyle: {
      "margin-right": "15px"
    }
  }, [_vm._v(_vm._s(_vm.currentTime))]), _vm._v(" "), _c('div', {
    staticClass: "bar-bg",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.handleProgressClick
    }
  }, [_c('div', {
    staticClass: "bar-inner",
    style: ({
      width: _vm.playProgress * 100 + '%'
    })
  }), _vm._v(" "), _c('div', {
    staticClass: "bar-point",
    attrs: {
      "eventid": '1'
    },
    on: {
      "touchmove": _vm.handleProgressTouchMove
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "duration song-time"
  }, [_vm._v(_vm._s(_vm.duration))])]), _vm._v(" "), _c('div', {
    staticClass: "song-control"
  }, [_c('van-icon', {
    attrs: {
      "name": "replay",
      "size": "26px",
      "color": "#fff",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('van-icon', {
    attrs: {
      "name": "arrow-left",
      "size": "26px",
      "color": "#fff",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('van-icon', {
    attrs: {
      "name": _vm.isPlaying ? 'pause' : 'play',
      "size": "26px",
      "color": "#fff",
      "eventid": '3',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.togglePlay
    }
  }), _vm._v(" "), _c('van-icon', {
    attrs: {
      "name": "arrow",
      "size": "26px",
      "color": "#fff",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('van-icon', {
    attrs: {
      "name": "bars",
      "size": "26px",
      "color": "#fff",
      "mpcomid": '4'
    }
  })], 1)])]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3f41f1fa", esExports)
  }
}

/***/ })

},[122]);