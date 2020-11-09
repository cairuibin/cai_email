import React, { Component } from 'react';
import  Editor from '../cai_email'

class AAAA extends Component {
  componentDidMount() {
    var editor = new Editor('#div1')
    editor.customConfig.emotions = [
      {
        title: '默认',
        type: 'image',
        content: [
          {
            "alt": "[微笑]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e3/2018new_weixioa02_org.png",

          },
          {
            "alt": "[可爱]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/09/2018new_keai_org.png"
          },
          {
            "alt": "[太开心]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1e/2018new_taikaixin_org.png",

          },
          {
            "alt": "[鼓掌]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/2018new_guzhang_org.png",

          },
          {
            "alt": "[嘻嘻]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/33/2018new_xixi_org.png",
          },
          {
            "alt": "[哈哈]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8f/2018new_haha_org.png",
          },
          {
            "alt": "[笑cry]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/4a/2018new_xiaoku_thumb.png",

          },
          {
            "alt": "[挤眼]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/43/2018new_jiyan_org.png"
          },
          {
            "alt": "[馋嘴]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/fa/2018new_chanzui_org.png",

          },
          {
            "alt": "[黑线]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a3/2018new_heixian_org.png",

          },
          {
            "alt": "[汗]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/28/2018new_han_org.png"
          },
          {
            "alt": "[挖鼻]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9a/2018new_wabi_thumb.png",
          },
          {
            "alt": "[哼]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7c/2018new_heng_org.png"
          },
          {
            "alt": "[怒]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f6/2018new_nu_org.png"
          },
          {
            "alt": "[委屈]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a5/2018new_weiqu_org.png",

          },
          {
            "alt": "[可怜]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/96/2018new_kelian_org.png",
          },
          {
            "alt": "[失望]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/aa/2018new_shiwang_org.png",

          },
          {
            "alt": "[悲伤]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ee/2018new_beishang_org.png",

          },
          {
            "alt": "[泪]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/2018new_leimu_org.png"
          },
          {
            "alt": "[允悲]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/83/2018new_kuxiao_org.png",
          },
          {
            "alt": "[害羞]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c1/2018new_haixiu_org.png",
          },
          {
            "alt": "[污]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/10/2018new_wu_org.png"
          },
          {
            "alt": "[爱你]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f6/2018new_aini_org.png"
          },
          {
            "alt": "[亲亲]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/2c/2018new_qinqin_org.png",

          },
          {
            "alt": "[色]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9d/2018new_huaxin_org.png"
          },
          {
            "alt": "[憧憬]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c9/2018new_chongjing_org.png",

          },
          {
            "alt": "[舔屏]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3e/2018new_tianping_org.png",

          },
          {
            "alt": "[坏笑]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/4d/2018new_huaixiao_org.png",

          },
          {
            "alt": "[阴险]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9e/2018new_yinxian_org.png",

          },
          {
            "alt": "[笑而不语]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/2d/2018new_xiaoerbuyu_org.png",

          },
          {
            "alt": "[偷笑]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/71/2018new_touxiao_org.png",

          },
          {
            "alt": "[酷]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c4/2018new_ku_org.png"
          },
          {
            "alt": "[并不简单]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/aa/2018new_bingbujiandan_org.png",

          },
          {
            "alt": "[思考]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/30/2018new_sikao_org.png"
          },
          {
            "alt": "[疑问]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b8/2018new_ningwen_org.png",

          },
          {
            "alt": "[费解]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/2a/2018new_wenhao_org.png",

          },
          {
            "alt": "[晕]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/07/2018new_yun_org.png"
          },
          {
            "alt": "[衰]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a2/2018new_shuai_org.png",
          },
          {
            "alt": "[骷髅]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a1/2018new_kulou_org.png",

          },
          {
            "alt": "[嘘]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b0/2018new_xu_org.png"
          },
          {
            "alt": "[闭嘴]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/62/2018new_bizui_org.png"
          },
          {
            "alt": "[傻眼]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/dd/2018new_shayan_org.png",
          },
          {
            "alt": "[吃惊]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/49/2018new_chijing_org.png",

          },
          {
            "alt": "[吐]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/08/2018new_tu_org.png"
          },
          {
            "alt": "[感冒]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/2018new_kouzhao_org.png",

          },
          {
            "alt": "[生病]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3b/2018new_shengbing_org.png",

          },
          {
            "alt": "[拜拜]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/fd/2018new_baibai_org.png",

          },
          {
            "alt": "[鄙视]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/da/2018new_bishi_org.png"
          },
          {
            "alt": "[白眼]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ef/2018new_landelini_org.png",

          },
          {
            "alt": "[左哼哼]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/43/2018new_zuohengheng_org.png",

          },
          {
            "alt": "[右哼哼]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c1/2018new_youhengheng_org.png",

          },
          {
            "alt": "[抓狂]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/17/2018new_zhuakuang_org.png",

          },
          {
            "alt": "[怒骂]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/87/2018new_zhouma_org.png",

          },
          {
            "alt": "[打脸]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/cb/2018new_dalian_org.png",
          },
          {
            "alt": "[顶]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ae/2018new_ding_org.png"
          },
          {
            "alt": "[互粉]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/86/2018new_hufen02_org.png",

          },
          {
            "alt": "[钱]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a2/2018new_qian_org.png"
          },
          {
            "alt": "[哈欠]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/55/2018new_dahaqian_org.png",

          },
          {
            "alt": "[困]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3c/2018new_kun_org.png"
          },
          {
            "alt": "[睡]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e2/2018new_shuijiao_thumb.png",

          },
          {
            "alt": "[求饶]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/aa/moren_qiurao02_org.png",

          },
          {
            "alt": "[吃瓜]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/01/2018new_chigua_org.png",

          },
          {
            "alt": "[打call]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/39/moren_dacall02_org.png",

          },
          {
            "alt": "[awsl]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/14/moren_awsl02_org.png",

          },
          {
            "alt": "[doge]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a1/2018new_doge02_org.png",

          },
          {
            "alt": "[二哈]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/22/2018new_erha_org.png"
          },
          {
            "alt": "[酸]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b3/hot_wosuanle_org.png"
          },
          {
            "alt": "[喵喵]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7b/2018new_miaomiao_org.png",

          },
          {
            "alt": "[抱抱]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/42/2018new_baobao_org.png",

          },
          {
            "alt": "[摊手]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/62/2018new_tanshou_org.png",

          },
          {
            "alt": "[跪了]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/75/2018new_gui_org.png"
          },
          {
            "alt": "[鲜花]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d4/2018new_xianhua_org.png",

          },
          {
            "alt": "[欢度国庆]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3b/guoqing20_huandugq_org.png",

          },
          {
            "alt": "[我爱中国]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a9/guoqing20_ilovechina_org.png",

          },
          {
            "alt": "[五仁月饼]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b1/zhongqiu2020_yuebing_org.png",

          },
          {
            "alt": "[全家福]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/4c/zhongqiu2020_quanjiafu_org.png",

          },
          {
            "alt": "[圆月]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/73/zhongqiu2020_yueliang_org.png",

          },
          {
            "alt": "[中国赞]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/2018new_zhongguozan_org.png",

          },
          {
            "alt": "[给你小心心]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ca/qixi2018_xiaoxinxin_org.png",

          },
          {
            "alt": "[哆啦A梦害怕]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c7/dorahaipa_org.gif",

          },
          {
            "alt": "[哆啦A梦花心]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/08/dorahaose_org.gif",

          },
          {
            "alt": "[在一起]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c5/yunying2020_zaiyiqi01_org.png",

          },
          {
            "alt": "[手牵手]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/28/yunying2020_shoulashou01_org.png",

          },
          {
            "alt": "[花木兰]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/23/dianying_huamulan_org.png",

          },
          {
            "alt": "[心]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8a/2018new_xin_org.png",

          },
          {
            "alt": "[伤心]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6c/2018new_xinsui_org.png",

          },
          {
            "alt": "[男孩儿]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0a/2018new_nanhai_org.png",

          },
          {
            "alt": "[女孩儿]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/39/2018new_nvhai_org.png",

          },
          {
            "alt": "[握手]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e9/2018new_woshou_org.png",

          },
          {
            "alt": "[赞]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e6/2018new_zan_org.png"
          },
          {
            "alt": "[good]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8a/2018new_good_org.png",

          },
          {
            "alt": "[弱]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3d/2018new_ruo_org.png"
          },
          {
            "alt": "[NO]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1e/2018new_no_org.png"
          },
          {
            "alt": "[耶]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/29/2018new_ye_org.png",
          },
          {
            "alt": "[拳头]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/86/2018new_quantou_org.png",

          },
          {
            "alt": "[ok]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/45/2018new_ok_org.png"
          },
          {
            "alt": "[加油]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9f/2018new_jiayou_org.png",

          },
          {
            "alt": "[来]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/42/2018new_guolai_org.png",

          },
          {
            "alt": "[作揖]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e7/2018new_zuoyi_org.png",

          },
          {
            "alt": "[haha]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1d/2018new_hahashoushi_org.png",

          },
          {
            "alt": "[熊猫]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/aa/2018new_xiongmao_org.png",

          },
          {
            "alt": "[兔子]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c6/2018new_tuzi_org.png",

          },
          {
            "alt": "[猪头]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1c/2018new_zhutou_thumb.png",

          },
          {
            "alt": "[草泥马]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3b/2018new_caonima_org.png",

          },
          {
            "alt": "[奥特曼]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c6/2018new_aoteman_org.png",

          },
          {
            "alt": "[太阳]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/cd/2018new_taiyang_org.png",

          },
          {
            "alt": "[月亮]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d5/2018new_yueliang_org.png",

          },
          {
            "alt": "[浮云]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/61/2018new_yunduo_org.png",

          },
          {
            "alt": "[下雨]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7e/2018new_yu_org.png",

          },
          {
            "alt": "[沙尘暴]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b7/2018new_shachenbao_org.png",

          },
          {
            "alt": "[微风]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c7/2018new_weifeng_thumb.png",

          },
          {
            "alt": "[围观]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6c/2018new_weiguan_org.png",

          },
          {
            "alt": "[飞机]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/4a/2018new_feiji_org.png",

          },
          {
            "alt": "[照相机]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/78/2018new_xiangji_org.png",

          },
          {
            "alt": "[话筒]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/48/2018new_huatong_org.png",

          },
          {
            "alt": "[蜡烛]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/16/2018new_lazhu_org.png",

          },
          {
            "alt": "[音乐]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1f/2018new_yinyue_org.png",

          },
          {
            "alt": "[喜]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e0/2018new_xizi_org.png",

          },
          {
            "alt": "[给力]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/36/2018new_geili_org.png",

          },
          {
            "alt": "[威武]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/14/2018new_weiwu_org.png",

          },
          {
            "alt": "[可乐]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/5f/moren_kele_org.png",

          },
          {
            "alt": "[干杯]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/2018new_ganbei_org.png",

          },
          {
            "alt": "[蛋糕]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f9/2018new_dangao_org.png",

          },
          {
            "alt": "[礼物]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0e/2018new_liwu_org.png",

          },
          {
            "alt": "[钟]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8e/2018new_zhong_org.png",

          },
          {
            "alt": "[肥皂]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d6/2018new_feizao_thumb.png",

          },
          {
            "alt": "[绿丝带]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/cb/2018new_lvsidai_org.png",

          },
          {
            "alt": "[围脖]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/64/2018new_weibo_org.png",

          },
          {
            "alt": "[浪]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/46/2018new_xinlang_org.png",

          },
          {
            "alt": "[羞嗒嗒]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/df/lxhxiudada_org.gif",

          },
          {
            "alt": "[好爱哦]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/74/lxhainio_org.gif",
          },
          {
            "alt": "[偷乐]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/fa/lxhtouxiao_thumb.gif",

          },
          {
            "alt": "[赞啊]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/00/lxhzan_thumb.gif"
          },
          {
            "alt": "[笑哈哈]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/32/lxhwahaha_org.gif",

          },
          {
            "alt": "[好喜欢]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d6/lxhlike_thumb.gif"
          },
          {
            "alt": "[求关注]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ac/lxhqiuguanzhu_org.gif",

          },
          {
            "alt": "[胖丁微笑]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/68/film_pangdingsmile_org.png",

          },
          {
            "alt": "[佩奇]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c6/hot_pigpeiqi_org.png",

          },
          {
            "alt": "[大侦探皮卡丘微笑]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b3/pikaqiu_weixiao_org.png",

          },
          {
            "alt": "[圣诞老人]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/93/xmax_oldman01_org.png",

          },
          {
            "alt": "[紫金草]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e5/gongjiri_zijinhua_org.png",

          },
          {
            "alt": "[文明遛狗]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/93/gongyi_wenminglgnew_org.png",

          },
          {
            "alt": "[神马]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/60/horse2_org.gif"
          },
          {
            "alt": "[马到成功]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b0/mdcg_org.gif"
          },
          {
            "alt": "[炸鸡啤酒]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e2/zhajibeer_org.gif",

          },
          {
            "alt": "[最右]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/be/remen_zuiyou180605_org.png",

          },

          {
            "alt": "[五仁月饼_旧]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/10/2018zhongqiu_yuebing_org.png",

          },
          {
            "alt": "[给你小心心]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ca/qixi2018_xiaoxinxin_org.png",

          },
          {
            "alt": "[吃狗粮]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0b/qixi2018_chigouliang_org.png",

          },
          {
            "alt": "[弗莱见钱眼开]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/83/2018newyear_richdog_org.gif",

          },
          {
            "alt": "[七夕布谷鸟]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/43/2020qixi_bugubird_org.png",

          },
          {
            "alt": "[撒狗粮]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ec/qixi2020_sagouliang_org.png",

          },
          {
            "alt": "[求脱单]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/84/qixi2020_qiutuodan_org.png",

          },
          {
            "alt": "[酷炫街舞给手]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9a/yunying_jiewu03_org.png",

          },
          {
            "alt": "[这就是街舞3]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3d/yunying_jiewu02_org.png",

          },
          {
            "alt": "[毛巾助力]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c0/yunying_jiewu01_org.png",

          },
          {
            "alt": "[超新星运动会]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d0/yunying_starquanyunhui_org.png",

          },
          {
            "alt": "[超人爸爸]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6c/2020fuqinjie_chaorenbaba_org.png",

          },
          {
            "alt": "[我爱爸爸]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a0/2020fuqinjie_woaibaba_org.png",

          },
          {
            "alt": "[父与子]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1e/2020fuqinjie_fuyuzi_org.png",

          },
          {
            "alt": "[棒棒糖]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f4/2020liuyi_bangbangtang_org.png",

          },
          {
            "alt": "[纸飞机]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9d/2020liuyi_zhifeiji_org.png",

          },
          {
            "alt": "[炸鸡腿]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8c/yunying_zhaji_org.png",

          },
          {
            "alt": "[点亮平安灯]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/feiyan_dianliangpingan_org.png",

          },
          {
            "alt": "[武汉加油]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/02/hot_wuhanjiayou_org.png",

          },
          {
            "alt": "[点亮橙色]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/87/gongyi_dlchengse03_org.png",

          },
          {
            "alt": "[锦鲤]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/94/hbf2019_jinli_org.png",

          },
          {
            "alt": "[看涨]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/fe/kanzhangv2_org.gif",

          },
          {
            "alt": "[看跌]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c5/kandiev2_org.gif"
          },
          {
            "alt": "[带着微博去旅行]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ec/eventtravel_org.gif",

          },
          {
            "alt": "[星星]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/76/hot_star171109_org.png",

          },
          {
            "alt": "[半星]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f9/hot_halfstar_org.png",

          },
          {
            "alt": "[空星]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ff/hot_blankstar_org.png",

          },
          {
            "alt": "[蕾伊]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/66/starwar_leiyi_org.png",

          },
          {
            "alt": "[凯洛伦]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/cd/starwar_kailuolun_org.png",

          },
          {
            "alt": "[BB8]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e9/starwar_bb8_org.png",

          },
          {
            "alt": "[冲锋队员]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/39/starwar_chongfengduiyuan_org.png",

          },
          {
            "alt": "[达斯维达]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/86/starwar_dasiweida_org.png",

          },
          {
            "alt": "[C3PO]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c1/starwar_c3po_org.png",

          },
          {
            "alt": "[丘巴卡]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/5d/starwar_qiubaka_org.png",

          },
          {
            "alt": "[R2D2]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/04/starwar_r2d2_org.png",

          },
          {
            "alt": "[哆啦A梦花心]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/08/dorahaose_org.gif",

          },
          {
            "alt": "[哆啦A梦害怕]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c7/dorahaipa_org.gif",

          },
          {
            "alt": "[哆啦A梦吃惊]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f0/dorachijing_org.gif",

          },
          {
            "alt": "[哆啦A梦汗]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/61/dorahan_org.gif",

          },
          {
            "alt": "[哆啦A梦微笑]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9e/jqmweixiao_org.gif",

          },
          {
            "alt": "[伴我同行]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ef/jqmbwtxing_org.gif",

          },
          {
            "alt": "[静香微笑]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/29/jiqimaojingxiang_org.gif",

          },
          {
            "alt": "[大雄微笑]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8e/jiqimaodaxiong_org.gif",

          },
          {
            "alt": "[胖虎微笑]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/2f/jiqimaopanghu_org.gif",

          },
          {
            "alt": "[小夫微笑]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/21/jiqimaoxiaofu_org.gif",

          },
          {
            "alt": "[哆啦A梦笑]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/54/dora_xiao_org.png",

          },
          {
            "alt": "[哆啦A梦无奈]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/96/dora_wunai_org.png",

          },
          {
            "alt": "[哆啦A梦美味]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/21/dora_meiwei_org.png",

          },
          {
            "alt": "[哆啦A梦开心]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/df/dora_kaixin_org.png",

          },
          {
            "alt": "[哆啦A梦亲亲]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e0/dora_qinqin_org.png",

          },
          {
            "alt": "[钢铁侠]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/27/avengers_ironman01_org.png",

          },
          {
            "alt": "[美国队长]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d8/avengers_captain01_org.png",

          },
          {
            "alt": "[雷神]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3c/avengers_thor01_org.png",

          },
          {
            "alt": "[浩克]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/44/avengers_hulk01_org.png",

          },
          {
            "alt": "[黑寡妇]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0e/avengers_blackwidow01_org.png",

          },
          {
            "alt": "[鹰眼]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/93/avengers_clint01_org.png",

          },
          {
            "alt": "[惊奇队长]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/44/avengers_captainmarvel01_org.png",

          },
          {
            "alt": "[奥克耶]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/62/avengers_aokeye01_org.png",

          },
          {
            "alt": "[蚁人]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/cc/avengers_antman01_org.png",

          },
          {
            "alt": "[灭霸]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ce/avengers_thanos01_org.png",

          },
          {
            "alt": "[蜘蛛侠]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e2/avengers_spiderman01_org.png",

          },
          {
            "alt": "[洛基]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1f/avengers_locki01_org.png",

          },
          {
            "alt": "[奇异博士]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9c/avengers_drstranger01_org.png",

          },
          {
            "alt": "[冬兵]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/91/avengers_wintersolider01_org.png",

          },
          {
            "alt": "[黑豹]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/86/avengers_panther01_org.png",

          },
          {
            "alt": "[猩红女巫]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a9/avengers_witch01_org.png",

          },
          {
            "alt": "[幻视]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/07/avengers_vision01_org.png",

          },
          {
            "alt": "[星爵]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/35/avengers_starlord01_org.png",

          },
          {
            "alt": "[格鲁特]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7a/avengers_gelute01_org.png",

          },
          {
            "alt": "[螳螂妹]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7c/avengers_mantis01_org.png",

          },
          {
            "alt": "[无限手套]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/38/avengers_gauntlet01_org.png",

          },
          {
            "alt": "[胖红拽]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/de/angerbird_panghongzhuai_org.png",

          },
          {
            "alt": "[胖红生气]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/angerbird_shengqi_org.png",

          },
          {
            "alt": "[胖红微笑]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f9/angerbird_panghongweixiao_org.png",


          },
          {
            "alt": "[飞镖黄跳舞]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d2/angerbird_feibiaohuang_org.png",

          },

          {
            "alt": "[三三蹦跳]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/33/angerbird_sansna_org.png",

          },
          {
            "alt": "[小V开心]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/80/angerbird_xiaovkaixin_org.png",

          },
          {
            "alt": "[小V生气]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/01/angerbird_xiaov_org.png",

          },
          {
            "alt": "[佐伊卖萌]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/angerbird_zuoyimaimeng_org.png",

          },
          {
            "alt": "[小猪惊讶]",
            "type": "face",
            "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/56/angerbird_xiaozhujingya_org.png",

          },
         
        ]
      },
      {
    
        title: '小黄人',
  
        type: 'image',
       
        content: [{
          "alt": "[小黄人微笑]",
          "type": "face",
          "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f0/xhrnew_weixiao_org.png",

        },
        {
          "alt": "[小黄人剪刀手]",
          "type": "face",
          "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/63/xhrnew_jiandaoshou_org.png",

        },
        {
          "alt": "[小黄人不屑]",
          "type": "face",
          "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b2/xhrnew_buxie_org.png",

        },
        {
          "alt": "[小黄人高兴]",
          "type": "face",
          "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/41/xhrnew_gaoxing_org.png",

        },
        {
          "alt": "[小黄人惊讶]",
          "type": "face",
          "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/fd/xhrnew_jingya_thumb.png",

        },
        {
          "alt": "[小黄人委屈]",
          "type": "face",
          "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/79/xhrnew_weiqu_org.png",

        },
        {
          "alt": "[小黄人坏笑]",
          "type": "face",
          "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/be/xhrnew_huaixiao_thumb.png",

        },
        {
          "alt": "[小黄人白眼]",
          "type": "face",
          "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e2/xhrnew_baiyan_org.png",

        },
        {
          "alt": "[小黄人无奈]",
          "type": "face",
          "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/15/xhrnew_wunai_org.png",

        },
        {
          "alt": "[小黄人得意]",
          "type": "face",
          "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c8/xhrnew_deyi_org.png",

        }]
      }, {
    
        title: '哪吒',
  
        type: 'image',
       
        content: [ {
          "alt": "[哪吒委屈]",
          "type": "face",
          "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d4/nezha_weiqu02_org.png",

        },
        {
          "alt": "[哪吒得意]",
          "type": "face",
          "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1d/nezha_deyi02_org.png",

        },
        {
          "alt": "[哪吒开心]",
          "type": "face",
          "src": "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/35/nezha_kaixin02_org.png",

        }]
      }
    ]

    editor.create()
  }
  render() {
    return (
      <div>
        <div id="div1">
          <p>欢迎使用 wangEditor 富文本编辑器</p>
        </div>
      </div>
    )
  }
}

export default AAAA