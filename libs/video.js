//导航企业、课程切换&&个人中心左侧样式切换
$('#select_span span,.personal_l_list li,.provider_left h2,.provider_left_list li').on('click',function(){
	$(this).addClass('active').siblings().removeClass('active');
});

//个人中心表格隔行变色
$('.personal_r_table tr:odd(),.gys2 li:odd(),.gys1 li:odd(),.text_item_ul li:odd()').addClass('active');
//个人中心左右两个同高
var person_r=$('.personal_r').height();
$('.personal_l').height(person_r);
//=========tab切换
var tab=(function(){
	var $div_li=$('.tab_header li');
	$div_li.on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index=$div_li.index(this);
		$('.tab_box > div').eq(index).slideDown().siblings().slideUp();
	});
})();
//添加取消关注
var care=(function(){
	$('.course_classify .guanzhu').on('click',function(){
    var self=$(this);
    self.toggleClass('care')
  });
})();
//==========登录 点击注册栏隐藏/显示
var register_toggle=(function(){
	$('.reg_delete').on('click',function(){
	var self=$(this);
	var parents=self.parents('div.register');
	parents.hide();
	});
	$('.register_info').on('click',function(){
		$('div.register').show();
	});
	$('.login_show').on('click',function(){
		$('#login').show();
	});
	$('.login_txt_delete').on('click',function(){
		$('#login').hide();
	});
	$('.find_pwd1_delete').on('click',function(){//找回密码分几步
		var self=$(this);
		var parents=self.parents('.find_pwd1');
		parents.hide();
	});
})();
//===========注册成功之后显示这个
var register_ok=(function(){
	$('.register_show').on('click',function(){
	$('#registed_list').show();
	});
	$('#registed_list,.vedio_top').on('mouseleave',function(){
		$('#registed_list').hide();
	});
})();
//==========shopcar里面是购买确认信息加减 sure_order_box是购买确认页面里的，receive_item是限时特惠里面的
var shopcar=(function(){
	$('.sure_order_box .add,.receive_item .add').on('click',function(){
	var self=$(this);
	var oInput=self.siblings('input');
	var count=parseInt(oInput.val())+1;
	oInput.val(count);
	tatal();
});
$('.sure_order_box .less,.receive_item .less').on('click',function(){
	var self=$(this);
	var oInput=self.siblings('input');
	var count=parseInt(oInput.val())-1;
	oInput.val(count);
	if(count<=1){
		oInput.val(1);
	}
	tatal();
});
function tatal(){
	$('.sure_order table tr').each(function(){
	var s=0;	
	var tatal=$(this).find('td.total_price');
	var tr=tatal.parent('tr');
	var count=tr.find('input').val();
	var price=tr.children('td.one_price').text();
	s=tatal.text(parseInt(count*price).toFixed(2));
	});
}
})();
//购买信息页提示
var tips=(function(){
$('.sure_order_ok').on('click',function(){
	$('.purcharse_order').show();
});
$('.purcharse_order_box .close').on('click',function(){
	$('.purcharse_order').hide();
});	
})();
//付费才能看的提示
var buy_tips=(function(){
	$('#buy_tips_txt .close').on('click',function(){
		$('#buy_tips').hide();
	});
	$('#pay_tips_show').on('click',function(){
		$('#buy_tips').show();
		return false;
	});
})();
//我的课程提示
var my_course=(function(){
	$('#my_course .close').on('click',function(){
	$('#my_course').hide();
	});
	$('#show_my_course').on('click',function(){
		$('#my_course').show();
		return false;
	});
})();
//考试页面选择
var radio=(function(){
	$('.text_item_ul div input').on('click',function(){
		var self=$(this);
		var label=self.parent();
		label.toggleClass('active');
	});
})();
//播放视频 评论textarea 聚焦失焦 评论狂显示
var textarea=(function(){
	$('.video_tab_div2 .comment textarea').on('focus',function(){
	var self=$(this);
	var tips=self.siblings('p.tips');
	if(self.val()==''){
		tips.hide();
	}
   });
   	$('.video_tab_div2 .comment textarea').on('blur',function(){
	var self=$(this);
	var tips=self.siblings('p.tips');
	if(self.val()==''){
		tips.show();
	}
   });
   $('.video_tab_header .zan_cmt p').one('click',function(){//点赞
   	 var self=$(this);
   	 var con=self.find('span');
   	 con.text(parseInt(con.text())+1)
   });
   $('.video_tab_div2 .replay').on('click',function(){//评论显示
   	  var self=$(this);
   	  var comment=self.siblings('div.comment');
   	  comment.slideDown();
   });
   $('.comment_a').on('click',function(){//评论隐藏
   	 var self=$(this);
   	 var comment=self.parent('.comment');
   	 comment.slideUp();
   });
})();
//个人中心信息管理
var remove=(function(){
	$('.person_manager .manage_dele').on('click',function(){
	var self=$(this);
	var oli=self.parents('li');
	oli.remove();
   });
})();















