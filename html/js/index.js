$(document).ready(function(){
	$('.newly-carousel').carousel();
	$('.swiper-c1').carousel();
	$('.new-users-carousel').carousel();
	Caroursel.init($('.newl-classes'));
	$('.navbar-nav li').click(function(e){
	       //e.preventDefault();
	       $(this).siblings().removeClass('active');
	       $(this).addClass('active');
	   });
	
	$('.class-course').carousel({});
	
	$(".topv .fa-weixin").popover({
		trigger : 'hover',
		html:true,
		placement:'bottom',
		content:'<div><img src="images/course_select1.png"/></div>'
	});
	$(".topv .fa-weibo").popover({
		trigger : 'hover',
		html:true,
		placement:'bottom',
		content:'<div><img src="images/course_select1.png"/></div>'
	});
});

function showHighSearch(){
	var display = $('.high-p-s').css("display");
	if("none" == display){
		$('.high-p-s').css("display","block");
	}else{
		$('.high-p-s').css("display","none");
	}
};
function showQcod(type){
	alert("eee");
	$("#example").popover();
};