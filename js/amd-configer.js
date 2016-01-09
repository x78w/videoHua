var config= {
  paths: {
    jQuery: '/libs/jquery-1.9.1.min'
    ,jqSuperSlider: '/libs/jquery.SuperSlide.2.1'
    ,lazyload: '/libs/lazyload'
    ,videojs: '/libs/video'
    ,wxSDK: 'http://res.wx.qq.com/open/js/jweixin-1.0.0'
    ,BDanalysis: '//hm.baidu.com/hm.js?xxxxxxxxx'
    ,fastclick: '/libs/fastclick'
    ,h5media: '/libs/html5midia'
  }
  ,shim: {
    jQuery: {
      exports: 'jQuery'
    }
    ,jqSuperSlider: {
      deps: ['jQuery']
      ,exports: 'jqSuperSlider'
    }
    ,lazyload: {
      deps: ['jQuery']
      ,exports: 'lazyload'
    }
    ,videojs: {
      deps: ['jQuery']
      ,exports: 'videojs'
    }
    ,WechatShare: {
      deps: ['wxSDK']
      ,exports: 'WechatShare'
    }
  }
}
//umd fix
if(typeof exports== 'object'){
  module.exports= config;
}
else if(typeof require== 'function'&& define.amd){
  define(config);
}