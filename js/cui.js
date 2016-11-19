/*
         ╭──╮╭──╮╭─╮  ╭─╮  TM
         │╭─╯│╭╮│╰╮│  ╰╮│ 
         │╰─╮│╰╯│  ││    ││  
         ╰─╮││╭╮│  ││    ││  
         ╭─╯││╰╯│╭╯╰╮╭╯╰╮
         ╰──╯╰──╯╰──╯╰──╯
                         
      Web: www.5811.com.cn  Tel: 4006-120-950
  
*/

$(function(){
  //动画效果弹出菜单
	$(".MENUS li").hover(function(){           
		$(this).addClass("ok").find("dl").stop(true,true).slideUp(0).slideDown(300);
	},function(){
    $(".ok").find("dl").stop(true,true).slideUp(200);
		$(this).removeClass("ok");
	});
  
  //无动画弹出菜单
	$(".MENU li,.MENU_MY").hover(function(){           
		$(this).addClass("ok");
	},function(){
		$(this).removeClass("ok");
	});
  
  //当前显示导航
      $('.HOTTOP li').mouseover(function(){
          $(this).parent('ul').find('.ok').removeClass('ok');
          $(this).addClass('ok');
          if(!$(this).next('li').text()){
              $(this).addClass('end');
          }
      });
      
  // 折叠菜单   
  $('.SLIDE h3').click(function(){
      var $nn=$(this).hasClass('ok');
      if($nn){
           $(this).removeClass();
           $(this).next('ul').removeClass();
      }
      else
      {
           $(this).addClass('ok');
           $(this).next('ul').addClass('dn');
      }
  });
  
  // 选项卡 鼠标经过切换
  $(".TAB li").mousemove(function(){
    var $vv=$(this).parent(".TAB").attr("id");
	  $($vv).hide();
	  $(this).parent(".TAB").find("li").removeClass("hover");
	  var xx=$(this).parent(".TAB").find("li").index(this);
	  $($vv).eq(xx).show();
	  $(this).addClass("hover");
  });

  // 选项卡 鼠标点击
  $(".TAB_CLIKE li").click(function(){
    var $vv=$(this).parent(".TAB").attr("id");
	  $($vv).hide();
	  $(this).parent(".TAB").find("li").removeClass("hover");
	  var xx=$(this).parent(".TAB").find("li").index(this);
	  $($vv).eq(xx).show();
	  $(this).addClass("hover");
  });

});