require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_recommend_song_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_58af8322_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_recommend_song_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(101)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-58af8322"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_recommend_song_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_58af8322_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_recommend_song_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/recommend-song.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] recommend-song.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58af8322", Component.options)
  } else {
    hotAPI.reload("data-v-58af8322", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  name: 'recommend-song',
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      resultData: this.data
    };
  },

  watch: {
    data: {
      handler: function handler(newVal) {
        this.albumList = newVal;
      },

      immediate: true
    }
  }
});

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "recommend"
  }, [_c('van-row', {
    attrs: {
      "gutter": "10",
      "mpcomid": '1'
    }
  }, [_c('p', {
    staticClass: "recommend-song"
  }, [_vm._v("推荐歌单")]), _vm._v(" "), _vm._l((_vm.resultData), function(item, index) {
    return _c('van-col', {
      key: item.id,
      attrs: {
        "span": "8",
        "mpcomid": '0_' + index
      }
    }, [_c('div', {
      staticClass: "image-style"
    }, [_c('img', {
      attrs: {
        "src": item.picUrl
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "song-name mb"
    }, [_vm._v(_vm._s(item.name))])])
  })], 2)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-58af8322", esExports)
  }
}

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_new_song_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_669d76cb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_new_song_vue__ = __webpack_require__(107);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-669d76cb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_new_song_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_669d76cb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_new_song_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/new-song.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] new-song.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-669d76cb", Component.options)
  } else {
    hotAPI.reload("data-v-669d76cb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  name: 'new-song',
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      albumList: this.list,
      topSong: this.data,
      newTitle: 0
    };
  },

  methods: {
    handleClickNewSong: function handleClickNewSong(num) {
      this.newTitle = num;
    }
  },
  watch: {
    data: {
      handler: function handler(newVal) {
        this.topSong = newVal;
      },

      immediate: true
    },
    list: {
      handler: function handler(newVal) {
        this.albumList = newVal;
      },

      immediate: true
    }
  }
});

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "new-song mb"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('p', {
    staticClass: "new-song-head"
  }, [_c('span', {
    class: {
      'new-song-title': _vm.newTitle === 0
    },
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.handleClickNewSong(0)
      }
    }
  }, [_vm._v("新碟")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin": "0 10px"
    }
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    class: {
      'new-song-title': _vm.newTitle === 1
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.handleClickNewSong(1)
      }
    }
  }, [_vm._v("新歌")])]), _vm._v(" "), _c('div', {
    staticClass: "mt"
  }, [(_vm.newTitle === 0) ? _c('van-row', {
    attrs: {
      "gutter": "10",
      "mpcomid": '1'
    }
  }, _vm._l((_vm.albumList), function(item, index) {
    return _c('van-col', {
      key: item.id,
      attrs: {
        "span": "8",
        "mpcomid": '0_' + index
      }
    }, [_c('div', {
      staticClass: "image-style"
    }, [_c('img', {
      attrs: {
        "src": item.picUrl
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "song-name"
    }, [_vm._v(_vm._s(item.name))])], 1)
  })) : _vm._e(), _vm._v(" "), (_vm.newTitle === 1) ? _c('van-row', {
    attrs: {
      "gutter": "10",
      "mpcomid": '3'
    }
  }, _vm._l((_vm.topSong), function(item, index) {
    return _c('van-col', {
      key: item.id,
      attrs: {
        "span": "8",
        "mpcomid": '2_' + index
      }
    }, [_c('div', {
      staticClass: "image-style"
    }, [_c('img', {
      attrs: {
        "src": item.album.picUrl
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "song-name"
    }, [_vm._v(_vm._s(item.album.name))])], 1)
  })) : _vm._e()], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-669d76cb", esExports)
  }
}

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_recommend_daily_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4715db2f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_recommend_daily_vue__ = __webpack_require__(111);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(109)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_recommend_daily_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4715db2f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_recommend_daily_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/recommend-daily.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] recommend-daily.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4715db2f", Component.options)
  } else {
    hotAPI.reload("data-v-4715db2f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(26);

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
  name: 'recommend-daily',
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      resultData: this.data,
      newData: this.list
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapMutations */])({
    setSongInfo: 'setSongInfo'
  }), {
    handlePlay: function handlePlay(data) {
      this.setSongInfo(data);
    }
  }),
  watch: {
    data: {
      handler: function handler(newVal) {
        this.resultData = newVal;
      },

      immediate: true
    },
    list: {
      handler: function handler(newVal) {
        this.newData = newVal;
      },

      immediate: true
    }
  }
});

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "recommend-daily"
  }, [_c('div', {
    staticClass: "recommend"
  }, [_c('van-row', {
    attrs: {
      "gutter": "10",
      "mpcomid": '1'
    }
  }, [_c('p', {
    staticClass: "recommend-song"
  }, [_vm._v("推荐歌单")]), _vm._v(" "), _vm._l((_vm.resultData), function(item, index) {
    return _c('van-col', {
      key: item.id,
      attrs: {
        "span": "8",
        "mpcomid": '0_' + index
      }
    }, [_c('div', {
      staticClass: "image-style"
    }, [_c('img', {
      attrs: {
        "src": item.picUrl
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "song-name mb"
    }, [_vm._v(_vm._s(item.name))])], 1)
  })], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "recommend-daily-new"
  }, [_c('van-row', {
    attrs: {
      "gutter": "10",
      "mpcomid": '5'
    }
  }, [_c('p', {
    staticClass: "mt "
  }, [_vm._v("新歌速递")]), _vm._v(" "), _vm._l((_vm.newData), function(item, index) {
    return _c('van-cell-group', {
      key: item.id,
      attrs: {
        "mpcomid": '4_' + index
      }
    }, [_c('van-cell', {
      attrs: {
        "title": item.name,
        "label": item.ar[0].name,
        "border": "false",
        "mpcomid": '3_' + index
      }
    }, [_c('van-icon', {
      staticClass: "custom-icon",
      attrs: {
        "name": "play-circle-o",
        "size": "20px",
        "eventid": '0_' + index,
        "mpcomid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.handlePlay(item)
        }
      },
      slot: "right-icon"
    })], 1)], 1)
  })], 2)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4715db2f", esExports)
  }
}

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_song_search_vue__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_82951b72_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_song_search_vue__ = __webpack_require__(115);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(113)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-82951b72"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_song_search_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_82951b72_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_song_search_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/song-search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] song-search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-82951b72", Component.options)
  } else {
    hotAPI.reload("data-v-82951b72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 113:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  name: "song-search",
  data: function data() {
    return {
      suggestsVisible: false,
      playlist: [],
      suggestList: [],
      keywords: '',
      objword: '',
      hotSearch: []
    };
  },
  created: function created() {
    this.initData();
  },

  methods: {
    initData: function initData() {
      var _this = this;

      // 热门搜索
      this.$request.get({
        url: '/search/hot'
      }).then(function (res) {
        _this.hotSearch = res.result.hots.slice(0, 10);
      });
    },


    // 搜索
    search: function search() {
      var _this2 = this;

      this.suggestsVisible = false;
      this.$request.get({
        url: '/search?keywords=' + this.keywords + '&limit=10'
      }).then(function (res) {
        _this2.playlist = res.result.songs;
      });
    },

    //搜索建议
    getSearchSuggest: function getSearchSuggest() {
      var _this3 = this;

      this.$request.get({
        url: '/search/suggest?keywords=' + this.keywords + '&type=mobile'
      }).then(function (res) {
        _this3.suggestList = res.result.allMatch || [];
      });
    },
    handleSelect: function handleSelect(data) {
      this.keywords = data;
      this.search();
    },
    handlerBlur: function handlerBlur() {
      this.search();
    },
    handlePlay: function handlePlay(item) {
      wx.navigateTo({ url: '/pages/play/main?id=' + item.id });
    }
  },
  watch: {
    keywords: function keywords(newVal, oldVal) {
      if (newVal && newVal !== oldVal && this.suggestsVisible) {
        this.getSearchSuggest();
      }
    }
  }
});

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "song-search"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('div', {
    staticClass: "search-box mb"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keywords),
      expression: "keywords"
    }],
    staticClass: "search-input",
    attrs: {
      "placeholder": "搜索歌曲",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.keywords)
    },
    on: {
      "focus": function($event) {
        $event.preventDefault();
        _vm.suggestsVisible = true
      },
      "blur": function($event) {
        $event.preventDefault();
        _vm.handlerBlur($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.keywords = $event.target.value
      }
    }
  })])]), _vm._v(" "), (_vm.suggestsVisible && _vm.keywords && _vm.suggestList.length) ? _c('div', {
    staticClass: "search-suggest pd18"
  }, [_c('div', {
    staticClass: "search-keyword",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.search()
      }
    }
  }, [_vm._v("搜索\"" + _vm._s(_vm.keywords) + "\"")]), _vm._v(" "), _vm._l((_vm.suggestList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "suggest-item pd18",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleSelect(item.keyword)
        }
      }
    }, [_vm._v("\n      " + _vm._s(item.keyword) + "\n    ")])
  })], 2) : _vm._e(), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '3'
    }
  }, [(!_vm.playlist.length) ? _c('div', {
    staticClass: "hotSearch"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('p', {
    staticClass: "mb"
  }, [_vm._v("热门搜索")]), _vm._v(" "), _vm._l((_vm.hotSearch), function(item, index) {
    return _c('van-tag', {
      key: item.id,
      attrs: {
        "color": "#f2826a",
        "size": "large",
        "plain": "true",
        "eventid": '3_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleSelect(item.first)
        }
      }
    }, [_vm._v(_vm._s(item.first) + "\n        ")])
  })], 2)], 1) : _vm._e()]), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '7'
    }
  }, [(_vm.playlist.length) ? _c('div', {
    staticClass: "play-list pd18"
  }, _vm._l((_vm.playlist), function(item, index) {
    return _c('van-cell-group', {
      key: item.id,
      attrs: {
        "mpcomid": '6_' + index
      }
    }, [_c('span', {
      staticClass: "play-list-index"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('van-cell', {
      attrs: {
        "title": item.name,
        "label": item.artists[0].name,
        "border": "false",
        "mpcomid": '5_' + index
      }
    }, [_c('van-icon', {
      staticClass: "custom-icon",
      attrs: {
        "name": "play-circle-o",
        "size": "20px",
        "eventid": '4_' + index,
        "mpcomid": '4_' + index
      },
      on: {
        "click": function($event) {
          _vm.handlePlay(item)
        }
      },
      slot: "right-icon"
    })], 1)], 1)
  })) : _vm._e()])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-82951b72", esExports)
  }
}

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-index"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '24'
    }
  }, [_c('van-tabs', {
    attrs: {
      "animated": "",
      "active": _vm.active,
      "eventid": '1',
      "mpcomid": '23'
    },
    on: {
      "change": _vm.handleChange
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "发现",
      "mpcomid": '13'
    }
  }, [_c('div', {
    staticClass: "mt"
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "indicator-dots": "true",
      "autoplay": "true",
      "interval": "2000",
      "duration": "1000"
    }
  }, _vm._l((_vm.imgUrls), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item,
        "mode": "widthFix"
      }
    })])], 1)
  }))], 1)], 1), _vm._v(" "), _c('van-row', {
    staticClass: "pageRow mt",
    attrs: {
      "gutter": "10",
      "mpcomid": '10'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "6",
      "mpcomid": '3'
    }
  }, [_c('van-icon', {
    attrs: {
      "name": "youzan-shield",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('span', [_vm._v("每日推荐")])], 1), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "6",
      "mpcomid": '5'
    }
  }, [_c('van-icon', {
    attrs: {
      "name": "comment",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('span', [_vm._v("歌单")])], 1), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "6",
      "mpcomid": '7'
    }
  }, [_c('van-icon', {
    attrs: {
      "name": "point-gift",
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('span', [_vm._v("排行榜")])], 1), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "6",
      "mpcomid": '9'
    }
  }, [_c('van-icon', {
    attrs: {
      "name": "diamond",
      "mpcomid": '8'
    }
  }), _vm._v(" "), _c('span', [_vm._v("电台")])], 1)], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('recommend-song', {
    attrs: {
      "data": _vm.resultData,
      "mpcomid": '11'
    }
  }), _vm._v(" "), _c('new-song', {
    attrs: {
      "data": _vm.topSong,
      "list": _vm.albumList,
      "mpcomid": '12'
    }
  })], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "推荐",
      "mpcomid": '15'
    }
  }, [_c('recommend-daily', {
    attrs: {
      "data": _vm.resultData,
      "list": _vm.newSong,
      "mpcomid": '14'
    }
  })], 1), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "热歌榜",
      "mpcomid": '20'
    }
  }, [_c('div', {
    staticClass: "recommend-daily-hot"
  }, [_c('img', {
    attrs: {
      "src": "cloud://dev-ev-hu-3r6iu.6465-dev-ev-hu-3r6iu/hotSong.jpeg"
    }
  }), _vm._v(" "), _c('van-row', {
    attrs: {
      "gutter": "10",
      "mpcomid": '19'
    }
  }, _vm._l((_vm.hotSong), function(item, index) {
    return _c('van-cell-group', {
      key: item.id,
      attrs: {
        "mpcomid": '18_' + index
      }
    }, [_c('van-cell', {
      attrs: {
        "title": item.name,
        "label": item.ar[0].name,
        "border": "false",
        "mpcomid": '17_' + index
      }
    }, [_c('van-icon', {
      staticClass: "custom-icon",
      attrs: {
        "name": "play-circle-o",
        "size": "20px",
        "eventid": '0_' + index,
        "mpcomid": '16_' + index
      },
      on: {
        "click": function($event) {
          _vm.handlePlay(item)
        }
      },
      slot: "right-icon"
    })], 1)], 1)
  }))], 1)]), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "搜索",
      "mpcomid": '22'
    }
  }, [_c('song-search', {
    attrs: {
      "mpcomid": '21'
    }
  })], 1)], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1e08d622", esExports)
  }
}

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(91);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1e08d622_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(116);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(92)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1e08d622_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e08d622", Component.options)
  } else {
    hotAPI.reload("data-v-1e08d622", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_recommend_song__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_new_song__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_recommend_daily__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_song_search__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(26);

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
  components: {
    RecommendSong: __WEBPACK_IMPORTED_MODULE_1__components_recommend_song__["a" /* default */],
    NewSong: __WEBPACK_IMPORTED_MODULE_2__components_new_song__["a" /* default */],
    RecommendDaily: __WEBPACK_IMPORTED_MODULE_3__components_recommend_daily__["a" /* default */],
    SongSearch: __WEBPACK_IMPORTED_MODULE_4__components_song_search__["a" /* default */]
  },
  data: function data() {
    return {
      suggestsVisible: false,
      keywords: '',
      active: 0,
      suggestList: [], //搜索列表
      resultData: [],
      topSong: [], // 华语新歌
      newSong: [], // 新歌榜
      albumList: [], // 新碟
      hotSong: [], // 热歌榜
      imgUrls: ['cloud://dev-ev-hu-3r6iu.6465-dev-ev-hu-3r6iu/star1.jpg', 'cloud://dev-ev-hu-3r6iu.6465-dev-ev-hu-3r6iu/star2.jpg', 'cloud://dev-ev-hu-3r6iu.6465-dev-ev-hu-3r6iu/star3.jpg']
    };
  },


  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["b" /* mapMutations */])({
    setSongInfo: 'setSongInfo'
  }), {
    // 初始化数据
    initData: function initData() {
      var _this = this;

      //推荐歌单
      this.$request.get({
        url: '/personalized'
      }).then(function (res) {
        _this.resultData = res.result.slice(0, 6);
      });

      // 华语新歌
      this.$request.get({
        url: '/top/song?type=7'
      }).then(function (res) {
        _this.topSong = res.data.slice(0, 3);
      });

      // 新碟
      this.$request.get({
        url: '/top/album?offset=0&limit=3'
      }).then(function (res) {
        _this.albumList = res.albums;
      });

      // 新歌榜
      var idx = 0;
      this.$request.get({
        url: '/top/list?idx=' + idx
      }).then(function (res) {
        _this.newSong = res.playlist.tracks.slice(0, 20);
      });

      // 热歌榜
      var index = 1;
      this.$request.get({
        url: '/top/list?idx=' + index
      }).then(function (res) {
        _this.hotSong = res.playlist.tracks.slice(0, 20);
      });
    },
    handleChange: function handleChange(event) {
      //console.log(event)
    },
    handlePlay: function handlePlay(data) {
      this.setSongInfo(data);
    }
  }),
  created: function created() {
    this.initData();
  }
});

/***/ })

},[90]);