
  let  CAI_RUIBIN_EMAIL={};
  (function (global, factory) {
      global.wangEditor = factory()
  }(CAI_RUIBIN_EMAIL, (
      function () { 'use strict';

  var polyfill = function () {
  
      // Object.assign
      if (typeof Object.assign != 'function') {
          Object.assign = function (target, varArgs) {
              // .length of function is 2
              if (target == null) {
                  // TypeError if undefined or null
                  throw new TypeError('Cannot convert undefined or null to object');
              }
  
              var to = Object(target);
  
              for (var index = 1; index < arguments.length; index++) {
                  var nextSource = arguments[index];
  
                  if (nextSource != null) {
                      // Skip over if undefined or null
                      for (var nextKey in nextSource) {
                          // Avoid bugs when hasOwnProperty is shadowed
                          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                              to[nextKey] = nextSource[nextKey];
                          }
                      }
                  }
              }
              return to;
          };
      }
  
      // IE 中兼容 Element.prototype.matches
      if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
              var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                  i = matches.length;
              while (--i >= 0 && matches.item(i) !== this) {}
              return i > -1;
          };
      }
  };
  
  function createElemByHTML(html) {
      var div = void 0;
      div = document.createElement('div');
      div.innerHTML = html;
      return div.children;
  }
  

  function isDOMList(selector) {
      if (!selector) {
          return false;
      }
      if (selector instanceof HTMLCollection || selector instanceof NodeList) {
          return true;
      }
      return false;
  }
  

  function querySelectorAll(selector) {
      var result = document.querySelectorAll(selector);
      if (isDOMList(result)) {
          return result;
      } else {
          return [result];
      }
  }
  

  var eventList = [];
  

  function DomElement(selector) {
      if (!selector) {
          return;
      }
  
      // selector 本来就是 DomElement 对象，直接返回
      if (selector instanceof DomElement) {
          return selector;
      }
  
      this.selector = selector;
      var nodeType = selector.nodeType;
  
      // 根据 selector 得出的结果（如 DOM，DOM List）
      var selectorResult = [];
      if (nodeType === 9) {
          // document 节点
          selectorResult = [selector];
      } else if (nodeType === 1) {
          // 单个 DOM 节点
          selectorResult = [selector];
      } else if (isDOMList(selector) || selector instanceof Array) {
          // DOM List 或者数组
          selectorResult = selector;
      } else if (typeof selector === 'string') {
          // 字符串
          selector = selector.replace('/\n/mg', '').trim();
          if (selector.indexOf('<') === 0) {
              // 如 <div>
              selectorResult = createElemByHTML(selector);
          } else {
              // 如 #id .class
              selectorResult = querySelectorAll(selector);
          }
      }
  
      var length = selectorResult.length;
      if (!length) {
          // 空数组
          return this;
      }
  
      // 加入 DOM 节点
      var i = void 0;
      for (i = 0; i < length; i++) {
          this[i] = selectorResult[i];
      }
      this.length = length;
  }
  

  DomElement.prototype = {
      constructor: DomElement,
  
      // 类数组，forEach
      forEach: function forEach(fn) {
          var i = void 0;
          for (i = 0; i < this.length; i++) {
              var elem = this[i];
              var result = fn.call(elem, elem, i);
              if (result === false) {
                  break;
              }
          }
          return this;
      },
  
      // clone
      clone: function clone(deep) {
          var cloneList = [];
          this.forEach(function (elem) {
              cloneList.push(elem.cloneNode(!!deep));
          });
          return $(cloneList);
      },
  
      // 获取第几个元素
      get: function get(index) {
          var length = this.length;
          if (index >= length) {
              index = index % length;
          }
          return $(this[index]);
      },
  
      // 第一个
      first: function first() {
          return this.get(0);
      },
  
      // 最后一个
      last: function last() {
          var length = this.length;
          return this.get(length - 1);
      },
  
      // 绑定事件
      on: function on(type, selector, fn) {
          // selector 不为空，证明绑定事件要加代理
          if (!fn) {
              fn = selector;
              selector = null;
          }
  
          // type 是否有多个
          var types = [];
          types = type.split(/\s+/);
  
          return this.forEach(function (elem) {
              types.forEach(function (type) {
                  if (!type) {
                      return;
                  }
  
                  // 记录下，方便后面解绑
                  eventList.push({
                      elem: elem,
                      type: type,
                      fn: fn
                  });
  
                  if (!selector) {
                      // 无代理
                      elem.addEventListener(type, fn);
                      return;
                  }
  
                  // 有代理
                  elem.addEventListener(type, function (e) {
                      var target = e.target;
                      if (target.matches(selector)) {
                          fn.call(target, e);
                      }
                  });
              });
          });
      },
  
      // 取消事件绑定
      off: function off(type, fn) {
          return this.forEach(function (elem) {
              elem.removeEventListener(type, fn);
          });
      },
  
      // 获取/设置 属性
      attr: function attr(key, val) {
          if (val == null) {
              // 获取值
              return this[0].getAttribute(key);
          } else {
              // 设置值
              return this.forEach(function (elem) {
                  elem.setAttribute(key, val);
              });
          }
      },
  
      // 添加 class
      addClass: function addClass(className) {
          if (!className) {
              return this;
          }
          return this.forEach(function (elem) {
              var arr = void 0;
              if (elem.className) {
                  // 解析当前 className 转换为数组
                  arr = elem.className.split(/\s/);
                  arr = arr.filter(function (item) {
                      return !!item.trim();
                  });
                  // 添加 class
                  if (arr.indexOf(className) < 0) {
                      arr.push(className);
                  }
                  // 修改 elem.class
                  elem.className = arr.join(' ');
              } else {
                  elem.className = className;
              }
          });
      },
  
      // 删除 class
      removeClass: function removeClass(className) {
          if (!className) {
              return this;
          }
          return this.forEach(function (elem) {
              var arr = void 0;
              if (elem.className) {
                  // 解析当前 className 转换为数组
                  arr = elem.className.split(/\s/);
                  arr = arr.filter(function (item) {
                      item = item.trim();
                      // 删除 class
                      if (!item || item === className) {
                          return false;
                      }
                      return true;
                  });
                  // 修改 elem.class
                  elem.className = arr.join(' ');
              }
          });
      },
  
      // 修改 css
      css: function css(key, val) {
          var currentStyle = key + ':' + val + ';';
          return this.forEach(function (elem) {
              var style = (elem.getAttribute('style') || '').trim();
              var styleArr = void 0,
                  resultArr = [];
              if (style) {
                  // 将 style 按照 ; 拆分为数组
                  styleArr = style.split(';');
                  styleArr.forEach(function (item) {
                      // 对每项样式，按照 : 拆分为 key 和 value
                      var arr = item.split(':').map(function (i) {
                          return i.trim();
                      });
                      if (arr.length === 2) {
                          resultArr.push(arr[0] + ':' + arr[1]);
                      }
                  });
                  // 替换或者新增
                  resultArr = resultArr.map(function (item) {
                      if (item.indexOf(key) === 0) {
                          return currentStyle;
                      } else {
                          return item;
                      }
                  });
                  if (resultArr.indexOf(currentStyle) < 0) {
                      resultArr.push(currentStyle);
                  }
                  // 结果
                  elem.setAttribute('style', resultArr.join('; '));
              } else {
                  // style 无值
                  elem.setAttribute('style', currentStyle);
              }
          });
      },
  
      // 显示
      show: function show() {
          return this.css('display', 'block');
      },
  
      // 隐藏
      hide: function hide() {
          return this.css('display', 'none');
      },
  
      // 获取子节点
      children: function children() {
          var elem = this[0];
          if (!elem) {
              return null;
          }
  
          return $(elem.children);
      },
  
      // 获取子节点（包括文本节点）
      childNodes: function childNodes() {
          var elem = this[0];
          if (!elem) {
              return null;
          }
  
          return $(elem.childNodes);
      },
  
      // 增加子节点
      append: function append($children) {
          return this.forEach(function (elem) {
              $children.forEach(function (child) {
                  elem.appendChild(child);
              });
          });
      },
  
      // 移除当前节点
      remove: function remove() {
          return this.forEach(function (elem) {
              if (elem.remove) {
                  elem.remove();
              } else {
                  var parent = elem.parentElement;
                  parent && parent.removeChild(elem);
              }
          });
      },
  
      // 是否包含某个子节点
      isContain: function isContain($child) {
          var elem = this[0];
          var child = $child[0];
          return elem.contains(child);
      },
  
      // 尺寸数据
      getSizeData: function getSizeData() {
          var elem = this[0];
          return elem.getBoundingClientRect(); // 可得到 bottom height left right top width 的数据
      },
  
      // 封装 nodeName
      getNodeName: function getNodeName() {
          var elem = this[0];
          return elem.nodeName;
      },
  
      // 从当前元素查找
      find: function find(selector) {
          var elem = this[0];
          return $(elem.querySelectorAll(selector));
      },
  
      // 获取当前元素的 text
      text: function text(val) {
          if (!val) {
              // 获取 text
              var elem = this[0];
              return elem.innerHTML.replace(/<.*?>/g, function () {
                  return '';
              });
          } else {
              // 设置 text
              return this.forEach(function (elem) {
                  elem.innerHTML = val;
              });
          }
      },
  
      // 获取 html
      html: function html(value) {
          var elem = this[0];
          if (value == null) {
              return elem.innerHTML;
          } else {
              elem.innerHTML = value;
              return this;
          }
      },
  
      // 获取 value
      val: function val() {
          var elem = this[0];
          return elem.value.trim();
      },
  
      // focus
      focus: function focus() {
          return this.forEach(function (elem) {
              elem.focus();
          });
      },
  
      // parent
      parent: function parent() {
          var elem = this[0];
          return $(elem.parentElement);
      },
  
      // parentUntil 找到符合 selector 的父节点
      parentUntil: function parentUntil(selector, _currentElem) {
          var results = document.querySelectorAll(selector);
          var length = results.length;
          if (!length) {
              // 传入的 selector 无效
              return null;
          }
  
          var elem = _currentElem || this[0];
          if (elem.nodeName === 'BODY') {
              return null;
          }
  
          var parent = elem.parentElement;
          var i = void 0;
          for (i = 0; i < length; i++) {
              if (parent === results[i]) {
                  // 找到，并返回
                  return $(parent);
              }
          }
  
          // 继续查找
          return this.parentUntil(selector, parent);
      },
  
      // 判断两个 elem 是否相等
      equal: function equal($elem) {
          if ($elem.nodeType === 1) {
              return this[0] === $elem;
          } else {
              return this[0] === $elem[0];
          }
      },
  
      // 将该元素插入到某个元素前面
      insertBefore: function insertBefore(selector) {
          var $referenceNode = $(selector);
          var referenceNode = $referenceNode[0];
          if (!referenceNode) {
              return this;
          }
          return this.forEach(function (elem) {
              var parent = referenceNode.parentNode;
              parent.insertBefore(elem, referenceNode);
          });
      },
  
      // 将该元素插入到某个元素后面
      insertAfter: function insertAfter(selector) {
          var $referenceNode = $(selector);
          var referenceNode = $referenceNode[0];
          if (!referenceNode) {
              return this;
          }
          return this.forEach(function (elem) {
              var parent = referenceNode.parentNode;
              if (parent.lastChild === referenceNode) {
                  // 最后一个元素
                  parent.appendChild(elem);
              } else {
                  // 不是最后一个元素
                  parent.insertBefore(elem, referenceNode.nextSibling);
              }
          });
      }
  };
  

  function $(selector) {
      return new DomElement(selector);
  }
  

  $.offAll = function () {
      eventList.forEach(function (item) {
          var elem = item.elem;
          var type = item.type;
          var fn = item.fn;
          // 解绑
          elem.removeEventListener(type, fn);
      });
  };
  
  var config = {
  
    //   // 默认菜单配置
    //   menus: ['head', 'bold', 'fontSize', 'fontName', 'italic', 'underline', 'strikeThrough', 'foreColor', 'backColor', 'link', 'list', 'justify', 'quote', 'emoticon', 'image', 'table', 'video', 'code', 'undo', 'redo'],

      menus: ['emoticon'],
  
      fontNames: ['宋体', '微软雅黑', 'Arial', 'Tahoma', 'Verdana'],
  
      colors: ['#000000', '#eeece0', '#1c487f', '#4d80bf', '#c24f4a', '#8baa4a', '#7b5ba1', '#46acc8', '#f9963b', '#ffffff'],
 
      // 表情
      emotions: [{
          // tab 的标题
          title: '默认',
          // type -> 'emoji' / 'image'
          type: 'image',
          // content -> 数组
          content: [{
              alt: '[坏笑]',
              src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
          }, {
              alt: '[舔屏]',
              src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
          }, {
              alt: '[污]',
              src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3c/pcmoren_wu_org.png'
          }]
      }, {
          // tab 的标题
          title: '新浪',
          // type -> 'emoji' / 'image'
          type: 'image',
          // content -> 数组
          content: [{
              src: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif',
              alt: '[草泥马]'
          }, {
              src: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif',
              alt: '[神马]'
          }, {
              src: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/fuyun_thumb.gif',
              alt: '[浮云]'
          }]
      }, {
          // tab 的标题
          title: 'emoji',
          // type -> 'emoji' / 'image'
          type: 'emoji',
          // content -> 数组
          content: '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😓 😪 😴 🙄 🤔 😬 🤐'.split(/\s/)
      }],
  
      // 编辑区域的 z-index
      zIndex: 10000,
  
      // 是否开启 debug 模式（debug 模式下错误会 throw error 形式抛出）
      debug: false,
  
      // 插入链接时候的格式校验
      linkCheck: function linkCheck(text, link) {
          // text 是插入的文字
          // link 是插入的链接
          return true; // 返回 true 即表示成功
          // return '校验失败' // 返回字符串即表示失败的提示信息
      },
  
      // 插入网络图片的校验
      linkImgCheck: function linkImgCheck(src) {
          // src 即图片的地址
          return true; // 返回 true 即表示成功
          // return '校验失败'  // 返回字符串即表示失败的提示信息
      },
  
      // 粘贴过滤样式，默认开启
      pasteFilterStyle: true,
  
      // 粘贴内容时，忽略图片。默认关闭
      pasteIgnoreImg: false,
  
      // 对粘贴的文字进行自定义处理，返回处理后的结果。编辑器会将处理后的结果粘贴到编辑区域中。
      // IE 暂时不支持
      pasteTextHandle: function pasteTextHandle(content) {
          // content 即粘贴过来的内容（html 或 纯文本），可进行自定义处理然后返回
          return content;
      },
  
      // onchange 事件
      // onchange: function (html) {
      //     // html 即变化之后的内容
      //     console.log(html)
      // },
  
      // 是否显示添加网络图片的 tab
      showLinkImg: true,
  
      // 插入网络图片的回调
      linkImgCallback: function linkImgCallback(url) {
          // console.log(url)  // url 即插入图片的地址
      },
  
      // 默认上传图片 max size: 5M
      uploadImgMaxSize: 5 * 1024 * 1024,
  
      // 配置一次最多上传几个图片
      // uploadImgMaxLength: 5,
  
      // 上传图片，是否显示 base64 格式
      uploadImgShowBase64: false,
  
      // 上传图片，server 地址（如果有值，则 base64 格式的配置则失效）
      // uploadImgServer: '/upload',
  
      // 自定义配置 filename
      uploadFileName: '',
  
      // 上传图片的自定义参数
      uploadImgParams: {
          // token: 'abcdef12345'
      },
  
      // 上传图片的自定义header
      uploadImgHeaders: {
          // 'Accept': 'text/x-json'
      },
  
      // 配置 XHR withCredentials
      withCredentials: false,
  
      // 自定义上传图片超时时间 ms
      uploadImgTimeout: 10000,
  
      // 上传图片 hook 
      uploadImgHooks: {
          // customInsert: function (insertLinkImg, result, editor) {
          //     console.log('customInsert')
          //     // 图片上传并返回结果，自定义插入图片的事件，而不是编辑器自动插入图片
          //     const data = result.data1 || []
          //     data.forEach(link => {
          //         insertLinkImg(link)
          //     })
          // },
          before: function before(xhr, editor, files) {
              // 图片上传之前触发
  
              // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
              // return {
              //     prevent: true,
              //     msg: '放弃上传'
              // }
          },
          success: function success(xhr, editor, result) {
              // 图片上传并返回结果，图片插入成功之后触发
          },
          fail: function fail(xhr, editor, result) {
              // 图片上传并返回结果，但图片插入错误时触发
          },
          error: function error(xhr, editor) {
              // 图片上传出错时触发
          },
          timeout: function timeout(xhr, editor) {
              // 图片上传超时时触发
          }
      },
  
      // 是否上传七牛云，默认为 false
      qiniu: false
  
  };
  
  var UA = {
      _ua: navigator.userAgent,
  
      // 是否 webkit
      isWebkit: function isWebkit() {
          var reg = /webkit/i;
          return reg.test(this._ua);
      },
  
      // 是否 IE
      isIE: function isIE() {
          return 'ActiveXObject' in window;
      }
  };
  

  function objForEach(obj, fn) {
      var key = void 0,
          result = void 0;
      for (key in obj) {
          if (obj.hasOwnProperty(key)) {
              result = fn.call(obj, key, obj[key]);
              if (result === false) {
                  break;
              }
          }
      }
  }
  

  function arrForEach(fakeArr, fn) {
      var i = void 0,
          item = void 0,
          result = void 0;
      var length = fakeArr.length || 0;
      for (i = 0; i < length; i++) {
          item = fakeArr[i];
          result = fn.call(fakeArr, item, i);
          if (result === false) {
              break;
          }
      }
  }
  

  function getRandom(prefix) {
      return prefix + Math.random().toString().slice(2);
  }

  function replaceHtmlSymbol(html) {
      if (html == null) {
          return '';
      }
      return html.replace(/</gm, '&lt;').replace(/>/gm, '&gt;').replace(/"/gm, '&quot;').replace(/(\r\n|\r|\n)/g, '<br/>');
  }

  function isFunction(fn) {
      return typeof fn === 'function';
  }
  

//   function Bold(editor) {
//       this.editor = editor;
//       this.$elem = $('<div class="w-e-menu">\n            <i class="w-e-icon-bold"></i>\n        </div>');
//       this.type = 'click';
//       this._active = false;
//   }
  

  
  var replaceLang = function (editor, str) {
      var langArgs = editor.config.langArgs || [];
      var result = str;
  
      langArgs.forEach(function (item) {
          var reg = item.reg;
          var val = item.val;
  
          if (reg.test(result)) {
              result = result.replace(reg, function () {
                  return val;
              });
          }
      });
  
      return result;
  };
  

  var _emptyFn = function _emptyFn() {};
  


  
  var emptyFn = function emptyFn() {};
  
  // 记录已经显示 panel 的菜单
  var _isCreatedPanelMenus = [];
  
  // 构造函数
  function Panel(menu, opt) {
      this.menu = menu;
      this.opt = opt;
  }
  
  // 原型
  Panel.prototype = {
      constructor: Panel,
  
      // 显示（插入DOM）
      show: function show() {
          var _this = this;
  
          var menu = this.menu;
          if (_isCreatedPanelMenus.indexOf(menu) >= 0) {
              // 该菜单已经创建了 panel 不能再创建
              return;
          }
  
          var editor = menu.editor;
          var $body = $('body');
          var $textContainerElem = editor.$textContainerElem;
          var opt = this.opt;
  
          // panel 的容器
          var $container = $('<div class="w-e-panel-container"></div>');
          var width = opt.width || 300; // 默认 300px
          $container.css('width', width + 'px').css('margin-left', (0 - width) / 2 + 'px');
  
          // 添加关闭按钮
          var $closeBtn = $('<i class="w-e-icon-close w-e-panel-close"></i>');
          $container.append($closeBtn);
          $closeBtn.on('click', function () {
              _this.hide();
          });
  
          // 准备 tabs 容器
          var $tabTitleContainer = $('<ul class="w-e-panel-tab-title"></ul>');
          var $tabContentContainer = $('<div class="w-e-panel-tab-content"></div>');
          $container.append($tabTitleContainer).append($tabContentContainer);
  
          // 设置高度
          var height = opt.height;
          if (height) {
              $tabContentContainer.css('height', height + 'px').css('overflow-y', 'auto');
          }
  
          // tabs
          var tabs = opt.tabs || [];
          var tabTitleArr = [];
          var tabContentArr = [];
          tabs.forEach(function (tab, tabIndex) {
              if (!tab) {
                  return;
              }
              var title = tab.title || '';
              var tpl = tab.tpl || '';
  
              // 替换多语言
              title = replaceLang(editor, title);
              tpl = replaceLang(editor, tpl);
  
              // 添加到 DOM
              var $title = $('<li class="w-e-item">' + title + '</li>');
              $tabTitleContainer.append($title);
              var $content = $(tpl);
              $tabContentContainer.append($content);
  
              // 记录到内存
              $title._index = tabIndex;
              tabTitleArr.push($title);
              tabContentArr.push($content);
  
              // 设置 active 项
              if (tabIndex === 0) {
                  $title._active = true;
                  $title.addClass('w-e-active');
              } else {
                  $content.hide();
              }
  
              // 绑定 tab 的事件
              $title.on('click', function (e) {
                  if ($title._active) {
                      return;
                  }
                  // 隐藏所有的 tab
                  tabTitleArr.forEach(function ($title) {
                      $title._active = false;
                      $title.removeClass('w-e-active');
                  });
                  tabContentArr.forEach(function ($content) {
                      $content.hide();
                  });
  
                  // 显示当前的 tab
                  $title._active = true;
                  $title.addClass('w-e-active');
                  $content.show();
              });
          });
  
          // 绑定关闭事件
          $container.on('click', function (e) {
              // 点击时阻止冒泡
              e.stopPropagation();
          });
          $body.on('click', function (e) {
              _this.hide();
          });
  
          // 添加到 DOM
          $textContainerElem.append($container);
  
          // 绑定 opt 的事件，只有添加到 DOM 之后才能绑定成功
          tabs.forEach(function (tab, index) {
              if (!tab) {
                  return;
              }
              var events = tab.events || [];
              events.forEach(function (event) {
                  var selector = event.selector;
                  var type = event.type;
                  var fn = event.fn || emptyFn;
                  var $content = tabContentArr[index];
                  $content.find(selector).on(type, function (e) {
                      e.stopPropagation();
                      var needToHide = fn(e);
                      // 执行完事件之后，是否要关闭 panel
                      if (needToHide) {
                          _this.hide();
                      }
                  });
              });
          });
  
          // focus 第一个 elem
          var $inputs = $container.find('input[type=text],textarea');
          if ($inputs.length) {
              $inputs.get(0).focus();
          }
  
          // 添加到属性
          this.$container = $container;
  
          // 隐藏其他 panel
          this._hideOtherPanels();
          // 记录该 menu 已经创建了 panel
          _isCreatedPanelMenus.push(menu);
      },
  
      // 隐藏（移除DOM）
      hide: function hide() {
          var menu = this.menu;
          var $container = this.$container;
          if ($container) {
              $container.remove();
          }
  
          // 将该 menu 记录中移除
          _isCreatedPanelMenus = _isCreatedPanelMenus.filter(function (item) {
              if (item === menu) {
                  return false;
              } else {
                  return true;
              }
          });
      },
  
      // 一个 panel 展示时，隐藏其他 panel
      _hideOtherPanels: function _hideOtherPanels() {
          if (!_isCreatedPanelMenus.length) {
              return;
          }
          _isCreatedPanelMenus.forEach(function (menu) {
              var panel = menu.panel || {};
              if (panel.hide) {
                  panel.hide();
              }
          });
      }
  };
  
  // 构造函数
  function Emoticon(editor) {
      this.editor = editor;
      this.$elem = $('<div class="w-e-menu">\n            <i class="w-e-icon-happy"></i>\n        </div>');
      this.type = 'panel';
  
      // 当前是否 active 状态
      this._active = false;
  }
  
  // 原型
  Emoticon.prototype = {
      constructor: Emoticon,
  
      onClick: function onClick() {
          this._createPanel();
      },
  
      _createPanel: function _createPanel() {
          var _this = this;
  
          var editor = this.editor;
          var config = editor.config;
          // 获取表情配置
          var emotions = config.emotions || [];
  
          // 创建表情 dropPanel 的配置
          var tabConfig = [];
          emotions.forEach(function (emotData) {
              var emotType = emotData.type;
              var content = emotData.content || [];
  
              // 这一组表情最终拼接出来的 html
              var faceHtml = '';
  
              // emoji 表情
              if (emotType === 'emoji') {
                  content.forEach(function (item) {
                      if (item) {
                          faceHtml += '<span class="w-e-item">' + item + '</span>';
                      }
                  });
              }
              // 图片表情
              if (emotType === 'image') {
                  content.forEach(function (item) {
                      var src = item.src;
                      var alt = item.alt;
                      if (src) {
                          // 加一个 data-w-e 属性，点击图片的时候不再提示编辑图片
                          faceHtml += '<span class="w-e-item"><img src="' + src + '" alt="' + alt + '" data-w-e="1"/></span>';
                      }
                  });
              }
  
              tabConfig.push({
                  title: emotData.title,
                  tpl: '<div class="w-e-emoticon-container">' + faceHtml + '</div>',
                  events: [{
                      selector: 'span.w-e-item',
                      type: 'click',
                      fn: function fn(e) {
                          var target = e.target;
                          var $target = $(target);
                          var nodeName = $target.getNodeName();
  
                          var insertHtml = void 0;
                          if (nodeName === 'IMG') {
                              // 插入图片
                              insertHtml = $target.parent().html();
                          } else {
                              // 插入 emoji
                              insertHtml = '<span>' + $target.html() + '</span>';
                          }
  
                          _this._insert(insertHtml);
                          // 返回 true，表示该事件执行完之后，panel 要关闭。否则 panel 不会关闭
                          return true;
                      }
                  }]
              });
          });
  
          var panel = new Panel(this, {
              width: 300,
              height: 200,
              // 一个 Panel 包含多个 tab
              tabs: tabConfig
          });
  
          // 显示 panel
          panel.show();
  
          // 记录属性
          this.panel = panel;
      },
  
      // 插入表情
      _insert: function _insert(emotHtml) {
          var editor = this.editor;
          editor.cmd.do('insertHTML', emotHtml);
      }
  };

  var MenuConstructors = {};
  
  
  MenuConstructors.emoticon = Emoticon;

  // 构造函数
  function Menus(editor) {
      this.editor = editor;
      this.menus = {};
  }
  
  // 修改原型
  Menus.prototype = {
      constructor: Menus,
  
      // 初始化菜单
      init: function init() {
          var _this = this;
  
          var editor = this.editor;
          var config = editor.config || {};
          var configMenus = config.menus || []; // 获取配置中的菜单
  
          // 根据配置信息，创建菜单
          configMenus.forEach(function (menuKey) {
              var MenuConstructor = MenuConstructors[menuKey];
              if (MenuConstructor && typeof MenuConstructor === 'function') {
                  // 创建单个菜单
                  _this.menus[menuKey] = new MenuConstructor(editor);
              }
          });
  
          // 添加到菜单栏
          this._addToToolbar();
  
          // 绑定事件
          this._bindEvent();
      },
  
      // 添加到菜单栏
      _addToToolbar: function _addToToolbar() {
          var editor = this.editor;
          var $toolbarElem = editor.$toolbarElem;
          var menus = this.menus;
          var config = editor.config;
          // config.zIndex 是配置的编辑区域的 z-index，菜单的 z-index 得在其基础上 +1
          var zIndex = config.zIndex + 1;
          objForEach(menus, function (key, menu) {
              var $elem = menu.$elem;
              if ($elem) {
                  // 设置 z-index
                  $elem.css('z-index', zIndex);
                  $toolbarElem.append($elem);
              }
          });
      },
  
      // 绑定菜单 click mouseenter 事件
      _bindEvent: function _bindEvent() {
          var menus = this.menus;
          var editor = this.editor;
          objForEach(menus, function (key, menu) {
              var type = menu.type;
              if (!type) {
                  return;
              }
              var $elem = menu.$elem;
              var droplist = menu.droplist;
              var panel = menu.panel;
  
              // 点击类型，例如 bold
              if (type === 'click' && menu.onClick) {
                  $elem.on('click', function (e) {
                      if (editor.selection.getRange() == null) {
                          return;
                      }
                      menu.onClick(e);
                  });
              }
  
              // 下拉框，例如 head
              if (type === 'droplist' && droplist) {
                  $elem.on('mouseenter', function (e) {
                      if (editor.selection.getRange() == null) {
                          return;
                      }
                      // 显示
                      droplist.showTimeoutId = setTimeout(function () {
                          droplist.show();
                      }, 200);
                  }).on('mouseleave', function (e) {
                      // 隐藏
                      droplist.hideTimeoutId = setTimeout(function () {
                          droplist.hide();
                      }, 0);
                  });
              }
  
              // 弹框类型，例如 link
              if (type === 'panel' && menu.onClick) {
                  $elem.on('click', function (e) {
                      e.stopPropagation();
                      if (editor.selection.getRange() == null) {
                          return;
                      }
                      // 在自定义事件中显示 panel
                      menu.onClick(e);
                  });
              }
          });
      },
  
      // 尝试修改菜单状态
      changeActive: function changeActive() {
          var menus = this.menus;
          objForEach(menus, function (key, menu) {
              if (menu.tryChangeActive) {
                  setTimeout(function () {
                      menu.tryChangeActive();
                  }, 100);
              }
          });
      }
  };
  
  /*
      粘贴信息的处理
  */
  
  // 获取粘贴的纯文本
  function getPasteText(e) {
      var clipboardData = e.clipboardData || e.originalEvent && e.originalEvent.clipboardData;
      var pasteText = void 0;
      if (clipboardData == null) {
          pasteText = window.clipboardData && window.clipboardData.getData('text');
      } else {
          pasteText = clipboardData.getData('text/plain');
      }
  
      return replaceHtmlSymbol(pasteText);
  }
  
  // 获取粘贴的html
  function getPasteHtml(e, filterStyle, ignoreImg) {
      var clipboardData = e.clipboardData || e.originalEvent && e.originalEvent.clipboardData;
      var pasteText = void 0,
          pasteHtml = void 0;
      if (clipboardData == null) {
          pasteText = window.clipboardData && window.clipboardData.getData('text');
      } else {
          pasteText = clipboardData.getData('text/plain');
          pasteHtml = clipboardData.getData('text/html');
      }
      if (!pasteHtml && pasteText) {
          pasteHtml = '<p>' + replaceHtmlSymbol(pasteText) + '</p>';
      }
      if (!pasteHtml) {
          return;
      }
  
      // 过滤word中状态过来的无用字符
      var docSplitHtml = pasteHtml.split('</html>');
      if (docSplitHtml.length === 2) {
          pasteHtml = docSplitHtml[0];
      }
  
      // 过滤无用标签
      pasteHtml = pasteHtml.replace(/<(meta|script|link).+?>/igm, '');
      // 去掉注释
      pasteHtml = pasteHtml.replace(/<!--.*?-->/mg, '');
      // 过滤 data-xxx 属性
      pasteHtml = pasteHtml.replace(/\s?data-.+?=('|").+?('|")/igm, '');
  
      if (ignoreImg) {
          // 忽略图片
          pasteHtml = pasteHtml.replace(/<img.+?>/igm, '');
      }
  
      if (filterStyle) {
          // 过滤样式
          pasteHtml = pasteHtml.replace(/\s?(class|style)=('|").*?('|")/igm, '');
      } else {
          // 保留样式
          pasteHtml = pasteHtml.replace(/\s?class=('|").*?('|")/igm, '');
      }
  
      return pasteHtml;
  }
  
  // 获取粘贴的图片文件
  function getPasteImgs(e) {
      var result = [];
      var txt = getPasteText(e);
      if (txt) {
          // 有文字，就忽略图片
          return result;
      }
  
      var clipboardData = e.clipboardData || e.originalEvent && e.originalEvent.clipboardData || {};
      var items = clipboardData.items;
      if (!items) {
          return result;
      }
  
      objForEach(items, function (key, value) {
          var type = value.type;
          if (/image/i.test(type)) {
              result.push(value.getAsFile());
          }
      });
  
      return result;
  }
  
  /*
      编辑区域
  */
  
  // 获取一个 elem.childNodes 的 JSON 数据
  function getChildrenJSON($elem) {
      var result = [];
      var $children = $elem.childNodes() || []; // 注意 childNodes() 可以获取文本节点
      $children.forEach(function (curElem) {
          var elemResult = void 0;
          var nodeType = curElem.nodeType;
  
          // 文本节点
          if (nodeType === 3) {
              elemResult = curElem.textContent;
              elemResult = replaceHtmlSymbol(elemResult);
          }
  
          // 普通 DOM 节点
          if (nodeType === 1) {
              elemResult = {};
  
              // tag
              elemResult.tag = curElem.nodeName.toLowerCase();
              // attr
              var attrData = [];
              var attrList = curElem.attributes || {};
              var attrListLength = attrList.length || 0;
              for (var i = 0; i < attrListLength; i++) {
                  var attr = attrList[i];
                  attrData.push({
                      name: attr.name,
                      value: attr.value
                  });
              }
              elemResult.attrs = attrData;
              // children（递归）
              elemResult.children = getChildrenJSON($(curElem));
          }
  
          result.push(elemResult);
      });
      return result;
  }
  
  // 构造函数
  function Text(editor) {
      this.editor = editor;
  }
  
  // 修改原型
  Text.prototype = {
      constructor: Text,
  
      // 初始化
      init: function init() {
          // 绑定事件
          this._bindEvent();
      },
  
      // 清空内容
      clear: function clear() {
          this.html('<p><br></p>');
      },
  
      // 获取 设置 html
      html: function html(val) {
          var editor = this.editor;
          var $textElem = editor.$textElem;
          var html = void 0;
          if (val == null) {
              html = $textElem.html();
              // 未选中任何内容的时候点击“加粗”或者“斜体”等按钮，就得需要一个空的占位符 &#8203 ，这里替换掉
              html = html.replace(/\u200b/gm, '');
              return html;
          } else {
              $textElem.html(val);
  
              // 初始化选取，将光标定位到内容尾部
              editor.initSelection();
          }
      },
  
      // 获取 JSON
      getJSON: function getJSON() {
          var editor = this.editor;
          var $textElem = editor.$textElem;
          return getChildrenJSON($textElem);
      },
  
      // 获取 设置 text
      text: function text(val) {
          var editor = this.editor;
          var $textElem = editor.$textElem;
          var text = void 0;
          if (val == null) {
              text = $textElem.text();
              // 未选中任何内容的时候点击“加粗”或者“斜体”等按钮，就得需要一个空的占位符 &#8203 ，这里替换掉
              text = text.replace(/\u200b/gm, '');
              return text;
          } else {
              $textElem.text('<p>' + val + '</p>');
  
              // 初始化选取，将光标定位到内容尾部
              editor.initSelection();
          }
      },
  
      // 追加内容
      append: function append(html) {
          var editor = this.editor;
          var $textElem = editor.$textElem;
          $textElem.append($(html));
  
          // 初始化选取，将光标定位到内容尾部
          editor.initSelection();
      },
  
      // 绑定事件
      _bindEvent: function _bindEvent() {
          // 实时保存选取
          this._saveRangeRealTime();
  
          // 按回车建时的特殊处理
          this._enterKeyHandle();
  
          // 清空时保留 <p><br></p>
          this._clearHandle();
  
          // 粘贴事件（粘贴文字，粘贴图片）
          this._pasteHandle();
  
          // tab 特殊处理
          this._tabHandle();
  
          // img 点击
          this._imgHandle();
  
          // 拖拽事件
          this._dragHandle();
      },
  
      // 实时保存选取
      _saveRangeRealTime: function _saveRangeRealTime() {
          var editor = this.editor;
          var $textElem = editor.$textElem;
  
          // 保存当前的选区
          function saveRange(e) {
              // 随时保存选区
              editor.selection.saveRange();
              // 更新按钮 ative 状态
              editor.menus.changeActive();
          }
          // 按键后保存
          $textElem.on('keyup', saveRange);
          $textElem.on('mousedown', function (e) {
              // mousedown 状态下，鼠标滑动到编辑区域外面，也需要保存选区
              $textElem.on('mouseleave', saveRange);
          });
          $textElem.on('mouseup', function (e) {
              saveRange();
              // 在编辑器区域之内完成点击，取消鼠标滑动到编辑区外面的事件
              $textElem.off('mouseleave', saveRange);
          });
      },
  
      // 按回车键时的特殊处理
      _enterKeyHandle: function _enterKeyHandle() {
          var editor = this.editor;
          var $textElem = editor.$textElem;
  
          function insertEmptyP($selectionElem) {
              var $p = $('<p><br></p>');
              $p.insertBefore($selectionElem);
              editor.selection.createRangeByElem($p, true);
              editor.selection.restoreSelection();
              $selectionElem.remove();
          }
  
          // 将回车之后生成的非 <p> 的顶级标签，改为 <p>
          function pHandle(e) {
              var $selectionElem = editor.selection.getSelectionContainerElem();
              var $parentElem = $selectionElem.parent();
  
              if ($parentElem.html() === '<code><br></code>') {
                  // 回车之前光标所在一个 <p><code>.....</code></p> ，忽然回车生成一个空的 <p><code><br></code></p>
                  // 而且继续回车跳不出去，因此只能特殊处理
                  insertEmptyP($selectionElem);
                  return;
              }
  
              if (!$parentElem.equal($textElem)) {
                  // 不是顶级标签
                  return;
              }
  
              var nodeName = $selectionElem.getNodeName();
              if (nodeName === 'P') {
                  // 当前的标签是 P ，不用做处理
                  return;
              }
  
              if ($selectionElem.text()) {
                  // 有内容，不做处理
                  return;
              }
  
              // 插入 <p> ，并将选取定位到 <p>，删除当前标签
              insertEmptyP($selectionElem);
          }
  
          $textElem.on('keyup', function (e) {
              if (e.keyCode !== 13) {
                  // 不是回车键
                  return;
              }
              // 将回车之后生成的非 <p> 的顶级标签，改为 <p>
              pHandle(e);
          });
  
          // <pre><code></code></pre> 回车时 特殊处理
          function codeHandle(e) {
              var $selectionElem = editor.selection.getSelectionContainerElem();
              if (!$selectionElem) {
                  return;
              }
              var $parentElem = $selectionElem.parent();
              var selectionNodeName = $selectionElem.getNodeName();
              var parentNodeName = $parentElem.getNodeName();
  
              if (selectionNodeName !== 'CODE' || parentNodeName !== 'PRE') {
                  // 不符合要求 忽略
                  return;
              }
  
              if (!editor.cmd.queryCommandSupported('insertHTML')) {
                  // 必须原生支持 insertHTML 命令
                  return;
              }
  
              // 处理：光标定位到代码末尾，联系点击两次回车，即跳出代码块
              if (editor._willBreakCode === true) {
                  // 此时可以跳出代码块
                  // 插入 <p> ，并将选取定位到 <p>
                  var $p = $('<p><br></p>');
                  $p.insertAfter($parentElem);
                  editor.selection.createRangeByElem($p, true);
                  editor.selection.restoreSelection();
  
                  // 修改状态
                  editor._willBreakCode = false;
  
                  e.preventDefault();
                  return;
              }
  
              var _startOffset = editor.selection.getRange().startOffset;
  
              // 处理：回车时，不能插入 <br> 而是插入 \n ，因为是在 pre 标签里面
              editor.cmd.do('insertHTML', '\n');
              editor.selection.saveRange();
              if (editor.selection.getRange().startOffset === _startOffset) {
                  // 没起作用，再来一遍
                  editor.cmd.do('insertHTML', '\n');
              }
  
              var codeLength = $selectionElem.html().length;
              if (editor.selection.getRange().startOffset + 1 === codeLength) {
                  // 说明光标在代码最后的位置，执行了回车操作
                  // 记录下来，以便下次回车时候跳出 code
                  editor._willBreakCode = true;
              }
  
              // 阻止默认行为
              e.preventDefault();
          }
  
          $textElem.on('keydown', function (e) {
              if (e.keyCode !== 13) {
                  // 不是回车键
                  // 取消即将跳转代码块的记录
                  editor._willBreakCode = false;
                  return;
              }
              // <pre><code></code></pre> 回车时 特殊处理
              codeHandle(e);
          });
      },
  
      // 清空时保留 <p><br></p>
      _clearHandle: function _clearHandle() {
          var editor = this.editor;
          var $textElem = editor.$textElem;
  
          $textElem.on('keydown', function (e) {
              if (e.keyCode !== 8) {
                  return;
              }
              var txtHtml = $textElem.html().toLowerCase().trim();
              if (txtHtml === '<p><br></p>') {
                  // 最后剩下一个空行，就不再删除了
                  e.preventDefault();
                  return;
              }
          });
  
          $textElem.on('keyup', function (e) {
              if (e.keyCode !== 8) {
                  return;
              }
              var $p = void 0;
              var txtHtml = $textElem.html().toLowerCase().trim();
  
              // firefox 时用 txtHtml === '<br>' 判断，其他用 !txtHtml 判断
              if (!txtHtml || txtHtml === '<br>') {
                  // 内容空了
                  $p = $('<p><br/></p>');
                  $textElem.html(''); // 一定要先清空，否则在 firefox 下有问题
                  $textElem.append($p);
                  editor.selection.createRangeByElem($p, false, true);
                  editor.selection.restoreSelection();
              }
          });
      },
  
      // 粘贴事件（粘贴文字 粘贴图片）
      _pasteHandle: function _pasteHandle() {
          var editor = this.editor;
          var config = editor.config;
          var pasteFilterStyle = config.pasteFilterStyle;
          var pasteTextHandle = config.pasteTextHandle;
          var ignoreImg = config.pasteIgnoreImg;
          var $textElem = editor.$textElem;
  
          // 粘贴图片、文本的事件，每次只能执行一个
          // 判断该次粘贴事件是否可以执行
          var pasteTime = 0;
          function canDo() {
              var now = Date.now();
              var flag = false;
              if (now - pasteTime >= 100) {
                  // 间隔大于 100 ms ，可以执行
                  flag = true;
              }
              pasteTime = now;
              return flag;
          }
          function resetTime() {
              pasteTime = 0;
          }
  
          // 粘贴文字
          $textElem.on('paste', function (e) {
              if (UA.isIE()) {
                  return;
              } else {
                  // 阻止默认行为，使用 execCommand 的粘贴命令
                  e.preventDefault();
              }
  
              // 粘贴图片和文本，只能同时使用一个
              if (!canDo()) {
                  return;
              }
  
              // 获取粘贴的文字
              var pasteHtml = getPasteHtml(e, pasteFilterStyle, ignoreImg);
              var pasteText = getPasteText(e);
              pasteText = pasteText.replace(/\n/gm, '<br>');
  
              var $selectionElem = editor.selection.getSelectionContainerElem();
              if (!$selectionElem) {
                  return;
              }
              var nodeName = $selectionElem.getNodeName();
  
              // code 中只能粘贴纯文本
              if (nodeName === 'CODE' || nodeName === 'PRE') {
                  if (pasteTextHandle && isFunction(pasteTextHandle)) {
                      // 用户自定义过滤处理粘贴内容
                      pasteText = '' + (pasteTextHandle(pasteText) || '');
                  }
                  editor.cmd.do('insertHTML', '<p>' + pasteText + '</p>');
                  return;
              }
  
              // 先放开注释，有问题再追查 ————
              // // 表格中忽略，可能会出现异常问题
              // if (nodeName === 'TD' || nodeName === 'TH') {
              //     return
              // }
  
              if (!pasteHtml) {
                  // 没有内容，可继续执行下面的图片粘贴
                  resetTime();
                  return;
              }
              try {
                  // firefox 中，获取的 pasteHtml 可能是没有 <ul> 包裹的 <li>
                  // 因此执行 insertHTML 会报错
                  if (pasteTextHandle && isFunction(pasteTextHandle)) {
                      // 用户自定义过滤处理粘贴内容
                      pasteHtml = '' + (pasteTextHandle(pasteHtml) || '');
                  }
                  editor.cmd.do('insertHTML', pasteHtml);
              } catch (ex) {
                  // 此时使用 pasteText 来兼容一下
                  if (pasteTextHandle && isFunction(pasteTextHandle)) {
                      // 用户自定义过滤处理粘贴内容
                      pasteText = '' + (pasteTextHandle(pasteText) || '');
                  }
                  editor.cmd.do('insertHTML', '<p>' + pasteText + '</p>');
              }
          });
  
          // 粘贴图片
          $textElem.on('paste', function (e) {
              if (UA.isIE()) {
                  return;
              } else {
                  e.preventDefault();
              }
  
              // 粘贴图片和文本，只能同时使用一个
              if (!canDo()) {
                  return;
              }
  
              // 获取粘贴的图片
              var pasteFiles = getPasteImgs(e);
              if (!pasteFiles || !pasteFiles.length) {
                  return;
              }
  
              // 获取当前的元素
              var $selectionElem = editor.selection.getSelectionContainerElem();
              if (!$selectionElem) {
                  return;
              }
              var nodeName = $selectionElem.getNodeName();
  
              // code 中粘贴忽略
              if (nodeName === 'CODE' || nodeName === 'PRE') {
                  return;
              }
  
              // 上传图片
              var uploadImg = editor.uploadImg;
              uploadImg.uploadImg(pasteFiles);
          });
      },
  
      // tab 特殊处理
      _tabHandle: function _tabHandle() {
          var editor = this.editor;
          var $textElem = editor.$textElem;
  
          $textElem.on('keydown', function (e) {
              if (e.keyCode !== 9) {
                  return;
              }
              if (!editor.cmd.queryCommandSupported('insertHTML')) {
                  // 必须原生支持 insertHTML 命令
                  return;
              }
              var $selectionElem = editor.selection.getSelectionContainerElem();
              if (!$selectionElem) {
                  return;
              }
              var $parentElem = $selectionElem.parent();
              var selectionNodeName = $selectionElem.getNodeName();
              var parentNodeName = $parentElem.getNodeName();
  
              if (selectionNodeName === 'CODE' && parentNodeName === 'PRE') {
                  // <pre><code> 里面
                  editor.cmd.do('insertHTML', '    ');
              } else {
                  // 普通文字
                  editor.cmd.do('insertHTML', '&nbsp;&nbsp;&nbsp;&nbsp;');
              }
  
              e.preventDefault();
          });
      },
  
      // img 点击
      _imgHandle: function _imgHandle() {
          var editor = this.editor;
          var $textElem = editor.$textElem;
  
          // 为图片增加 selected 样式
          $textElem.on('click', 'img', function (e) {
              var img = this;
              var $img = $(img);
  
              if ($img.attr('data-w-e') === '1') {
                  // 是表情图片，忽略
                  return;
              }
  
              // 记录当前点击过的图片
              editor._selectedImg = $img;
  
              // 修改选区并 restore ，防止用户此时点击退格键，会删除其他内容
              editor.selection.createRangeByElem($img);
              editor.selection.restoreSelection();
          });
  
          // 去掉图片的 selected 样式
          $textElem.on('click  keyup', function (e) {
              if (e.target.matches('img')) {
                  // 点击的是图片，忽略
                  return;
              }
              // 删除记录
              editor._selectedImg = null;
          });
      },
  
      // 拖拽事件
      _dragHandle: function _dragHandle() {
          var editor = this.editor;
  
          // 禁用 document 拖拽事件
          var $document = $(document);
          $document.on('dragleave drop dragenter dragover', function (e) {
              e.preventDefault();
          });
  
          // 添加编辑区域拖拽事件
          var $textElem = editor.$textElem;
          $textElem.on('drop', function (e) {
              e.preventDefault();
              var files = e.dataTransfer && e.dataTransfer.files;
              if (!files || !files.length) {
                  return;
              }
  
              // 上传图片
              var uploadImg = editor.uploadImg;
              uploadImg.uploadImg(files);
          });
      }
  };
  
  /*
      命令，封装 document.execCommand
  */
  
  // 构造函数
  function Command(editor) {
      this.editor = editor;
  }
  
  // 修改原型
  Command.prototype = {
      constructor: Command,
  
      // 执行命令
      do: function _do(name, value) {
          var editor = this.editor;
  
          // 使用 styleWithCSS
          if (!editor._useStyleWithCSS) {
              document.execCommand('styleWithCSS', null, true);
              editor._useStyleWithCSS = true;
          }
  
          // 如果无选区，忽略
          if (!editor.selection.getRange()) {
              return;
          }
  
          // 恢复选取
          editor.selection.restoreSelection();
  
          // 执行
          var _name = '_' + name;
          if (this[_name]) {
              // 有自定义事件
              this[_name](value);
          } else {
              // 默认 command
              this._execCommand(name, value);
          }
  
          // 修改菜单状态
          editor.menus.changeActive();
  
          // 最后，恢复选取保证光标在原来的位置闪烁
          editor.selection.saveRange();
          editor.selection.restoreSelection();
  
          // 触发 onchange
          editor.change && editor.change();
      },
  
      // 自定义 insertHTML 事件
      _insertHTML: function _insertHTML(html) {
          var editor = this.editor;
          var range = editor.selection.getRange();
  
          if (this.queryCommandSupported('insertHTML')) {
              // W3C
              this._execCommand('insertHTML', html);
          } else if (range.insertNode) {
              // IE
              range.deleteContents();
              range.insertNode($(html)[0]);
          } else if (range.pasteHTML) {
              // IE <= 10
              range.pasteHTML(html);
          }
      },
  
      // 插入 elem
      _insertElem: function _insertElem($elem) {
          var editor = this.editor;
          var range = editor.selection.getRange();
  
          if (range.insertNode) {
              range.deleteContents();
              range.insertNode($elem[0]);
          }
      },
  
      // 封装 execCommand
      _execCommand: function _execCommand(name, value) {
          document.execCommand(name, false, value);
      },
  
      // 封装 document.queryCommandValue
      queryCommandValue: function queryCommandValue(name) {
          return document.queryCommandValue(name);
      },
  
      // 封装 document.queryCommandState
      queryCommandState: function queryCommandState(name) {
          return document.queryCommandState(name);
      },
  
      // 封装 document.queryCommandSupported
      queryCommandSupported: function queryCommandSupported(name) {
          return document.queryCommandSupported(name);
      }
  };
  
  /*
      selection range API
  */
  
  // 构造函数
  function API(editor) {
      this.editor = editor;
      this._currentRange = null;
  }
  
  // 修改原型
  API.prototype = {
      constructor: API,
  
      // 获取 range 对象
      getRange: function getRange() {
          return this._currentRange;
      },
  
      // 保存选区
      saveRange: function saveRange(_range) {
          if (_range) {
              // 保存已有选区
              this._currentRange = _range;
              return;
          }
  
          // 获取当前的选区
          var selection = window.getSelection();
          if (selection.rangeCount === 0) {
              return;
          }
          var range = selection.getRangeAt(0);
  
          // 判断选区内容是否在编辑内容之内
          var $containerElem = this.getSelectionContainerElem(range);
          if (!$containerElem) {
              return;
          }
  
          // 判断选区内容是否在不可编辑区域之内
          if ($containerElem.attr('contenteditable') === 'false' || $containerElem.parentUntil('[contenteditable=false]')) {
              return;
          }
  
          var editor = this.editor;
          var $textElem = editor.$textElem;
          if ($textElem.isContain($containerElem)) {
              // 是编辑内容之内的
              this._currentRange = range;
          }
      },
  
      // 折叠选区
      collapseRange: function collapseRange(toStart) {
          if (toStart == null) {
              // 默认为 false
              toStart = false;
          }
          var range = this._currentRange;
          if (range) {
              range.collapse(toStart);
          }
      },
  
      // 选中区域的文字
      getSelectionText: function getSelectionText() {
          var range = this._currentRange;
          if (range) {
              return this._currentRange.toString();
          } else {
              return '';
          }
      },
  
      // 选区的 $Elem
      getSelectionContainerElem: function getSelectionContainerElem(range) {
          range = range || this._currentRange;
          var elem = void 0;
          if (range) {
              elem = range.commonAncestorContainer;
              return $(elem.nodeType === 1 ? elem : elem.parentNode);
          }
      },
      getSelectionStartElem: function getSelectionStartElem(range) {
          range = range || this._currentRange;
          var elem = void 0;
          if (range) {
              elem = range.startContainer;
              return $(elem.nodeType === 1 ? elem : elem.parentNode);
          }
      },
      getSelectionEndElem: function getSelectionEndElem(range) {
          range = range || this._currentRange;
          var elem = void 0;
          if (range) {
              elem = range.endContainer;
              return $(elem.nodeType === 1 ? elem : elem.parentNode);
          }
      },
  
      // 选区是否为空
      isSelectionEmpty: function isSelectionEmpty() {
          var range = this._currentRange;
          if (range && range.startContainer) {
              if (range.startContainer === range.endContainer) {
                  if (range.startOffset === range.endOffset) {
                      return true;
                  }
              }
          }
          return false;
      },
  
      // 恢复选区
      restoreSelection: function restoreSelection() {
          var selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(this._currentRange);
      },
  
      // 创建一个空白（即 &#8203 字符）选区
      createEmptyRange: function createEmptyRange() {
          var editor = this.editor;
          var range = this.getRange();
          var $elem = void 0;
  
          if (!range) {
              // 当前无 range
              return;
          }
          if (!this.isSelectionEmpty()) {
              // 当前选区必须没有内容才可以
              return;
          }
  
          try {
              // 目前只支持 webkit 内核
              if (UA.isWebkit()) {
                  // 插入 &#8203
                  editor.cmd.do('insertHTML', '&#8203;');
                  // 修改 offset 位置
                  range.setEnd(range.endContainer, range.endOffset + 1);
                  // 存储
                  this.saveRange(range);
              } else {
                  $elem = $('<strong>&#8203;</strong>');
                  editor.cmd.do('insertElem', $elem);
                  this.createRangeByElem($elem, true);
              }
          } catch (ex) {
              // 部分情况下会报错，兼容一下
          }
      },
  
      // 根据 $Elem 设置选区
      createRangeByElem: function createRangeByElem($elem, toStart, isContent) {
          // $elem - 经过封装的 elem
          // toStart - true 开始位置，false 结束位置
          // isContent - 是否选中Elem的内容
          if (!$elem.length) {
              return;
          }
  
          var elem = $elem[0];
          var range = document.createRange();
  
          if (isContent) {
              range.selectNodeContents(elem);
          } else {
              range.selectNode(elem);
          }
  
          if (typeof toStart === 'boolean') {
              range.collapse(toStart);
          }
  
          // 存储 range
          this.saveRange(range);
      }
  };
  
  /*
      上传进度条
  */
  
  function Progress(editor) {
      this.editor = editor;
      this._time = 0;
      this._isShow = false;
      this._isRender = false;
      this._timeoutId = 0;
      this.$textContainer = editor.$textContainerElem;
      this.$bar = $('<div class="w-e-progress"></div>');
  }
  
  Progress.prototype = {
      constructor: Progress,
  
      show: function show(progress) {
          var _this = this;
  
          // 状态处理
          if (this._isShow) {
              return;
          }
          this._isShow = true;
  
          // 渲染
          var $bar = this.$bar;
          if (!this._isRender) {
              var $textContainer = this.$textContainer;
              $textContainer.append($bar);
          } else {
              this._isRender = true;
          }
  
          // 改变进度（节流，100ms 渲染一次）
          if (Date.now() - this._time > 100) {
              if (progress <= 1) {
                  $bar.css('width', progress * 100 + '%');
                  this._time = Date.now();
              }
          }
  
          // 隐藏
          var timeoutId = this._timeoutId;
          if (timeoutId) {
              clearTimeout(timeoutId);
          }
          timeoutId = setTimeout(function () {
              _this._hide();
          }, 500);
      },
  
      _hide: function _hide() {
          var $bar = this.$bar;
          $bar.remove();
  
          // 修改状态
          this._time = 0;
          this._isShow = false;
          this._isRender = false;
      }
  };
  
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  

  // id，累加
  var editorId = 1;
  
  // 构造函数
  function Editor(toolbarSelector, textSelector) {
      if (toolbarSelector == null) {
          // 没有传入任何参数，报错
          throw new Error('错误：初始化编辑器时候未传入任何参数，请查阅文档');
      }
      // id，用以区分单个页面不同的编辑器对象
      this.id = 'wangEditor-' + editorId++;
  
      this.toolbarSelector = toolbarSelector;
      this.textSelector = textSelector;
  
      // 自定义配置
      this.customConfig = {};
  }
  
  // 修改原型
  Editor.prototype = {
      constructor: Editor,
  
      // 初始化配置
      _initConfig: function _initConfig() {
          // _config 是默认配置，this.customConfig 是用户自定义配置，将它们 merge 之后再赋值
          var target = {};
          this.config = Object.assign(target, config, this.customConfig);
  
          // 将语言配置，生成正则表达式
          var langConfig = this.config.lang || {};
          var langArgs = [];
          objForEach(langConfig, function (key, val) {
              // key 即需要生成正则表达式的规则，如“插入链接”
              // val 即需要被替换成的语言，如“insert link”
              langArgs.push({
                  reg: new RegExp(key, 'img'),
                  val: val
  
              });
          });
          this.config.langArgs = langArgs;
      },
  
      // 初始化 DOM
      _initDom: function _initDom() {
          var _this = this;
  
          var toolbarSelector = this.toolbarSelector;
          var $toolbarSelector = $(toolbarSelector);
          var textSelector = this.textSelector;
  
          var config$$1 = this.config;
          var zIndex = config$$1.zIndex;
  
          // 定义变量
          var $toolbarElem = void 0,
              $textContainerElem = void 0,
              $textElem = void 0,
              $children = void 0;
  
          if (textSelector == null) {
              // 只传入一个参数，即是容器的选择器或元素，toolbar 和 text 的元素自行创建
              $toolbarElem = $('<div></div>');
              $textContainerElem = $('<div></div>');
  
              // 将编辑器区域原有的内容，暂存起来
              $children = $toolbarSelector.children();
  
              // 添加到 DOM 结构中
              $toolbarSelector.append($toolbarElem).append($textContainerElem);
  
              // 自行创建的，需要配置默认的样式
              $toolbarElem.css('background-color', '#f1f1f1').css('border', '1px solid #ccc');
              $textContainerElem.css('border', '1px solid #ccc').css('border-top', 'none').css('height', '300px');
          } else {
              // toolbar 和 text 的选择器都有值，记录属性
              $toolbarElem = $toolbarSelector;
              $textContainerElem = $(textSelector);
              // 将编辑器区域原有的内容，暂存起来
              $children = $textContainerElem.children();
          }
  
          // 编辑区域
          $textElem = $('<div></div>');
          $textElem.attr('contenteditable', 'true').css('width', '100%').css('height', '100%');
  
          // 初始化编辑区域内容
          if ($children && $children.length) {
              $textElem.append($children);
          } else {
              $textElem.append($('<p><br></p>'));
          }
  
          // 编辑区域加入DOM
          $textContainerElem.append($textElem);
  
          // 设置通用的 class
          $toolbarElem.addClass('w-e-toolbar');
          $textContainerElem.addClass('w-e-text-container');
          $textContainerElem.css('z-index', zIndex);
          $textElem.addClass('w-e-text');
  
          // 添加 ID
          var toolbarElemId = getRandom('toolbar-elem');
          $toolbarElem.attr('id', toolbarElemId);
          var textElemId = getRandom('text-elem');
          $textElem.attr('id', textElemId);
  
          // 记录属性
          this.$toolbarElem = $toolbarElem;
          this.$textContainerElem = $textContainerElem;
          this.$textElem = $textElem;
          this.toolbarElemId = toolbarElemId;
          this.textElemId = textElemId;
  
          // 记录输入法的开始和结束
          var compositionEnd = true;
          $textContainerElem.on('compositionstart', function () {
              // 输入法开始输入
              compositionEnd = false;
          });
          $textContainerElem.on('compositionend', function () {
              // 输入法结束输入
              compositionEnd = true;
          });
  
          // 绑定 onchange
          $textContainerElem.on('click keyup', function () {
              // 输入法结束才出发 onchange
              compositionEnd && _this.change && _this.change();
          });
          $toolbarElem.on('click', function () {
              this.change && this.change();
          });
  
          //绑定 onfocus 与 onblur 事件
          if (config$$1.onfocus || config$$1.onblur) {
              // 当前编辑器是否是焦点状态
              this.isFocus = false;
  
              $(document).on('click', function (e) {
                  //判断当前点击元素是否在编辑器内
                  var isChild = $textElem.isContain($(e.target));
  
                  //判断当前点击元素是否为工具栏
                  var isToolbar = $toolbarElem.isContain($(e.target));
                  var isMenu = $toolbarElem[0] == e.target ? true : false;
  
                  if (!isChild) {
                      //若为选择工具栏中的功能，则不视为成blur操作
                      if (isToolbar && !isMenu) {
                          return;
                      }
  
                      if (_this.isFocus) {
                          _this.onblur && _this.onblur();
                      }
                      _this.isFocus = false;
                  } else {
                      if (!_this.isFocus) {
                          _this.onfocus && _this.onfocus();
                      }
                      _this.isFocus = true;
                  }
              });
          }
      },
  
      // 封装 command
      _initCommand: function _initCommand() {
          this.cmd = new Command(this);
      },
  
      // 封装 selection range API
      _initSelectionAPI: function _initSelectionAPI() {
          this.selection = new API(this);
      },
  

      // 初始化菜单
      _initMenus: function _initMenus() {
          this.menus = new Menus(this);
          this.menus.init();
      },
  
      // 添加 text 区域
      _initText: function _initText() {
          this.txt = new Text(this);
          this.txt.init();
      },
  
      // 初始化选区，将光标定位到内容尾部
      initSelection: function initSelection(newLine) {
          var $textElem = this.$textElem;
          var $children = $textElem.children();
          if (!$children.length) {
              // 如果编辑器区域无内容，添加一个空行，重新设置选区
              $textElem.append($('<p><br></p>'));
              this.initSelection();
              return;
          }
  
          var $last = $children.last();
  
          if (newLine) {
              // 新增一个空行
              var html = $last.html().toLowerCase();
              var nodeName = $last.getNodeName();
              if (html !== '<br>' && html !== '<br\/>' || nodeName !== 'P') {
                  // 最后一个元素不是 <p><br></p>，添加一个空行，重新设置选区
                  $textElem.append($('<p><br></p>'));
                  this.initSelection();
                  return;
              }
          }
  
          this.selection.createRangeByElem($last, false, true);
          this.selection.restoreSelection();
      },
  
      // 绑定事件
      _bindEvent: function _bindEvent() {
          // -------- 绑定 onchange 事件 --------
          var onChangeTimeoutId = 0;
          var beforeChangeHtml = this.txt.html();
          var config$$1 = this.config;
  
          // onchange 触发延迟时间
          var onchangeTimeout = config$$1.onchangeTimeout;
          onchangeTimeout = parseInt(onchangeTimeout, 10);
          if (!onchangeTimeout || onchangeTimeout <= 0) {
              onchangeTimeout = 200;
          }
  
          var onchange = config$$1.onchange;
          if (onchange && typeof onchange === 'function') {
              // 触发 change 的有三个场景：
              // 1. $textContainerElem.on('click keyup')
              // 2. $toolbarElem.on('click')
              // 3. editor.cmd.do()
              this.change = function () {
                  // 判断是否有变化
                  var currentHtml = this.txt.html();
  
                  if (currentHtml.length === beforeChangeHtml.length) {
                      // 需要比较每一个字符
                      if (currentHtml === beforeChangeHtml) {
                          return;
                      }
                  }
  
                  // 执行，使用节流
                  if (onChangeTimeoutId) {
                      clearTimeout(onChangeTimeoutId);
                  }
                  onChangeTimeoutId = setTimeout(function () {
                      // 触发配置的 onchange 函数
                      onchange(currentHtml);
                      beforeChangeHtml = currentHtml;
                  }, onchangeTimeout);
              };
          }
  
          // -------- 绑定 onblur 事件 --------
          var onblur = config$$1.onblur;
          if (onblur && typeof onblur === 'function') {
              this.onblur = function () {
                  var currentHtml = this.txt.html();
                  onblur(currentHtml);
              };
          }
  
          // -------- 绑定 onfocus 事件 --------
          var onfocus = config$$1.onfocus;
          if (onfocus && typeof onfocus === 'function') {
              this.onfocus = function () {
                  onfocus();
              };
          }
      },
  
      // 创建编辑器
      create: function create() {
          // 初始化配置信息
          this._initConfig();
  
          // 初始化 DOM
          this._initDom();
  
          // 封装 command API
          this._initCommand();
  
          // 封装 selection range API
          this._initSelectionAPI();
  
          // 添加 text
          this._initText();
  
          // 初始化菜单
          this._initMenus();
  
        
  
          // 初始化选区，将光标定位到内容尾部
          this.initSelection(true);
  
          // 绑定事件
          this._bindEvent();
      },
  
      // 解绑所有事件（暂时不对外开放）
      _offAllEvent: function _offAllEvent() {
          $.offAll();
      }
  };
  
  // polyfill
  polyfill();
  
  // 这里的 `inlinecss` 将被替换成 css 代码的内容，详情可去 ./gulpfile.js 中搜索 `inlinecss` 关键字
  var inlinecss = '.w-e-toolbar,.w-e-text-container,.w-e-menu-panel {  padding: 0;  margin: 0;  box-sizing: border-box;}.w-e-toolbar *,.w-e-text-container *,.w-e-menu-panel * {  padding: 0;  margin: 0;  box-sizing: border-box;}.w-e-clear-fix:after {  content: "";  display: table;  clear: both;}.w-e-toolbar .w-e-droplist {  position: absolute;  left: 0;  top: 0;  background-color: #fff;  border: 1px solid #f1f1f1;  border-right-color: #ccc;  border-bottom-color: #ccc;}.w-e-toolbar .w-e-droplist .w-e-dp-title {  text-align: center;  color: #999;  line-height: 2;  border-bottom: 1px solid #f1f1f1;  font-size: 13px;}.w-e-toolbar .w-e-droplist ul.w-e-list {  list-style: none;  line-height: 1;}.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {  color: #333;  padding: 5px 0;}.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {  background-color: #f1f1f1;}.w-e-toolbar .w-e-droplist ul.w-e-block {  list-style: none;  text-align: left;  padding: 5px;}.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {  display: inline-block;  *display: inline;  *zoom: 1;  padding: 3px 5px;}.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {  background-color: #f1f1f1;}format(\'truetype\');  font-weight: normal;  font-style: normal;}[class^="w-e-icon-"],[class*=" w-e-icon-"] {  /* use !important to prevent issues with browser extensions that change fonts */  font-family: \'w-e-icon\' !important;  speak: none;  font-style: normal;  font-weight: normal;  font-variant: normal;  text-transform: none;  line-height: 1;  /* Better Font Rendering =========== */  -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;}.w-e-icon-close:before {  content: "\\f00d";}.w-e-icon-upload2:before {  content: "\\e9c6";}.w-e-icon-trash-o:before {  content: "\\f014";}.w-e-icon-header:before {  content: "\\f1dc";}.w-e-icon-pencil2:before {  content: "\\e906";}.w-e-icon-paint-brush:before {  content: "\\f1fc";}.w-e-icon-image:before {  content: "\\e90d";}.w-e-icon-play:before {  content: "\\e912";}.w-e-icon-location:before {  content: "\\e947";}.w-e-icon-undo:before {  content: "\\e965";}.w-e-icon-redo:before {  content: "\\e966";}.w-e-icon-quotes-left:before {  content: "\\e977";}.w-e-icon-list-numbered:before {  content: "\\e9b9";}.w-e-icon-list2:before {  content: "\\e9bb";}.w-e-icon-link:before {  content: "\\e9cb";}.w-e-icon-happy:before {  content: "\\添加表情";}.w-e-icon-bold:before {  content: "\\ea62";}.w-e-icon-underline:before {  content: "\\ea63";}.w-e-icon-italic:before {  content: "\\ea64";}.w-e-icon-strikethrough:before {  content: "\\ea65";}.w-e-icon-table2:before {  content: "\\ea71";}.w-e-icon-paragraph-left:before {  content: "\\ea77";}.w-e-icon-paragraph-center:before {  content: "\\ea78";}.w-e-icon-paragraph-right:before {  content: "\\ea79";}.w-e-icon-terminal:before {  content: "\\f120";}.w-e-icon-page-break:before {  content: "\\ea68";}.w-e-icon-cancel-circle:before {  content: "\\ea0d";}.w-e-icon-font:before {  content: "\\ea5c";}.w-e-icon-text-heigh:before {  content: "\\ea5f";}.w-e-toolbar {  display: -webkit-box;  display: -ms-flexbox;  display: flex;  padding: 0 5px;  /* flex-wrap: wrap; */  /* 单个菜单 */}.w-e-toolbar .w-e-menu {  position: relative;  text-align: center;  padding: 5px 10px;  cursor: pointer;}.w-e-toolbar .w-e-menu i {  color: #999;}.w-e-toolbar .w-e-menu:hover i {  color: #333;}.w-e-toolbar .w-e-active i {  color: #1e88e5;}.w-e-toolbar .w-e-active:hover i {  color: #1e88e5;}.w-e-text-container .w-e-panel-container {  position: absolute;  top: 0;  left: 50%;  border: 1px solid #ccc;  border-top: 0;  box-shadow: 1px 1px 2px #ccc;  color: #333;  background-color: #fff;  /* 为 emotion panel 定制的样式 */  /* 上传图片的 panel 定制样式 */}.w-e-text-container .w-e-panel-container .w-e-panel-close {  position: absolute;  right: 0;  top: 0;  padding: 5px;  margin: 2px 5px 0 0;  cursor: pointer;  color: #999;}.w-e-text-container .w-e-panel-container .w-e-panel-close:hover {  color: #333;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-title {  list-style: none;  display: -webkit-box;  display: -ms-flexbox;  display: flex;  font-size: 14px;  margin: 2px 10px 0 10px;  border-bottom: 1px solid #f1f1f1;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-title .w-e-item {  padding: 3px 5px;  color: #999;  cursor: pointer;  margin: 0 3px;  position: relative;  top: 1px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-title .w-e-active {  color: #333;  border-bottom: 1px solid #333;  cursor: default;  font-weight: 700;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content {  padding: 10px 15px 10px 15px;  font-size: 16px;  /* 输入框的样式 */  /* 按钮的样式 */}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input:focus,.w-e-text-container .w-e-panel-container .w-e-panel-tab-content textarea:focus,.w-e-text-container .w-e-panel-container .w-e-panel-tab-content button:focus {  outline: none;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content textarea {  width: 100%;  border: 1px solid #ccc;  padding: 5px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content textarea:focus {  border-color: #1e88e5;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text] {  border: none;  border-bottom: 1px solid #ccc;  font-size: 14px;  height: 20px;  color: #333;  text-align: left;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text].small {  width: 30px;  text-align: center;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text].block {  display: block;  width: 100%;  margin: 10px 0;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {  border-bottom: 2px solid #1e88e5;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {  font-size: 14px;  color: #1e88e5;  border: none;  padding: 5px 10px;  background-color: #fff;  cursor: pointer;  border-radius: 3px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {  float: left;  margin-right: 10px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {  float: right;  margin-left: 10px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {  color: #999;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {  color: #c24f4a;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {  background-color: #f1f1f1;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {  content: "";  display: table;  clear: both;}.w-e-text-container .w-e-panel-container .w-e-emoticon-container .w-e-item {  cursor: pointer;  font-size: 18px;  padding: 0 3px;  display: inline-block;  *display: inline;  *zoom: 1;}.w-e-text-container .w-e-panel-container .w-e-up-img-container {  text-align: center;}.w-e-text-container .w-e-panel-container .w-e-up-img-container .w-e-up-btn {  display: inline-block;  *display: inline;  *zoom: 1;  color: #999;  cursor: pointer;  font-size: 60px;  line-height: 1;}.w-e-text-container .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover {  color: #333;}.w-e-text-container {  position: relative;}.w-e-text-container .w-e-progress {  position: absolute;  background-color: #1e88e5;  bottom: 0;  left: 0;  height: 1px;}.w-e-text {  padding: 0 10px;  overflow-y: scroll;}.w-e-text p,.w-e-text h1,.w-e-text h2,.w-e-text h3,.w-e-text h4,.w-e-text h5,.w-e-text table,.w-e-text pre {  margin: 10px 0;  line-height: 1.5;}.w-e-text ul,.w-e-text ol {  margin: 10px 0 10px 20px;}.w-e-text blockquote {  display: block;  border-left: 8px solid #d0e5f2;  padding: 5px 10px;  margin: 10px 0;  line-height: 1.4;  font-size: 100%;  background-color: #f1f1f1;}.w-e-text code {  display: inline-block;  *display: inline;  *zoom: 1;  background-color: #f1f1f1;  border-radius: 3px;  padding: 3px 5px;  margin: 0 3px;}.w-e-text pre code {  display: block;}.w-e-text table {  border-top: 1px solid #ccc;  border-left: 1px solid #ccc;}.w-e-text table td,.w-e-text table th {  border-bottom: 1px solid #ccc;  border-right: 1px solid #ccc;  padding: 3px 5px;}.w-e-text table th {  border-bottom: 2px solid #ccc;  text-align: center;}.w-e-text:focus {  outline: none;}.w-e-text img {  cursor: pointer;}.w-e-text img:hover {  box-shadow: 0 0 5px #333;}';
  
  // 将 css 代码添加到 <style> 中
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = inlinecss;
  document.getElementsByTagName('HEAD').item(0).appendChild(style);
  
  // 返回
  CAI_RUIBIN_EMAIL=  Editor;
  })));
  export default CAI_RUIBIN_EMAIL