require(['/js/amd-configer.js'], function(config){
  require.config(config)
  
  require(['jqSuperSlider', 'lazyload', 'videojs'], function(){
    $(".allFocus").slide({ mainCell:".m2list", effect:"topLoop", vis:3, opp:true, autoPlay:true, delayTime:500 });
		$(function(){
			$("img.lazy").lazyload({ threshold : 200 });//lazy
			$('#select_span span').on('click',function(){//导航企业、课程切换
				$(this).addClass('active').siblings().removeClass('active');
			})
		});
//    console.info('supplierjs')
  })
})