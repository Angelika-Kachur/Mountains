$(document).ready(function() {


	$(".burger-menu").click(function () {
		$(this).parents('.navigation').toggleClass("menu-on");
	});


	$('.grid').masonry({
	  // options
		columnWidth: '.grid-sizer',
		itemSelector: '.grid-item',
		percentPosition: true
	});
   
});