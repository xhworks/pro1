$(document).ready(function(){
	$('.newly-carousel').carousel();
	$('.swiper-c1').carousel();
	$('.new-users-carousel').carousel();
//	$('.newl-classes').carousel();
	Caroursel.init($('.newl-classes'))
	
	/* var mySwiper = new Swiper ('.swiper-c1', {
    autoplay: 5000,
    grabCursor:true,
    lazyLoading:true,
    pagination:".swiper-pagination",
  });
 
new Swiper ('.swiper-c2', {
    autoplay: 5000,
    grabCursor:true,
    lazyLoading:true,
    pagination:".swiper-pagination2",
  }); */

$('.navbar-nav li').click(function(e){
       //e.preventDefault();
       $(this).siblings().removeClass('active');
       $(this).addClass('active');
   });

$('.class-course').carousel({});
});