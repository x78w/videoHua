require(['/js/amd-configer.js'], function(config){
  //require config
  require.config(config)
  
  require(['jqSuperSlider', 'lazyload', 'videojs'], function(){
    //page script
    $(function(){
      /*鼠标移过，左右按钮显示*/
      $(".focusBox").hover(function(){ jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",0.2) },function(){ jQuery(this).find(".prev,.next").fadeOut() });
      /*SuperSlide图片切换*/
      $(".focusBox").slide({ mainCell:".pic",effect:"fold", autoPlay:true, delayTime:600, trigger:"hover"});
      $("img.lazy").lazyload({ threshold : 200 });//lazy
      $('#select_span span').on('click',function(){//导航企业、课程切换
        $(this).addClass('active').siblings().removeClass('active');
      });
    });
//    console.info('indexjs')
  })
})