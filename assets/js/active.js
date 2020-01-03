 $(document).ready(function(){
     /* counter up */
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    /*counter */

    /*  ====== menu ========= */
    $('.menu-toggle').click(function(){

        $('nav').toggleClass('active');
    });
    /*  ====== menu ========= */

     /* ====== start slider area */
     var heroSlider = $('.owl-carousel');
     heroSlider.owlCarousel({
         loop: true,
         items: 1,
         nav: true,
         dots: false,
         autoplay: true,
         autoplayTimeOut: 5000, //5sec
         navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'], //we will be using font awesome icon here
     });

     heroSlider.on("changed.owl.carousel", function(event){
         // selecting the current active item
         var item = event.item.index-2;
         // first removing animation for all captions
         $('.caption').removeClass('animated zoomInUp');
         $('.owl-item').not('.cloned').eq(item).find('.caption').addClass('animated zoomInUp');
     });
	 
	 // scrollTop -------------------------
	 var scroll = $("#scrollTop")
	 scroll.on('click',function(){
		$('html, body').animate({
			scrollTop:0
		},1500);
	 });
	 $(window).on('scroll',function(){
		if($(this).scrollTop() > 300){
			scroll.fadeIn();
		}else{
		scroll.fadeOut(1000);
		}
		
	 });

     // parallaxie-----------------------.
$('.parallaxie').parallaxie({
	speed: 0.7,
	offset: 50,
});
        
});
     // preloader-------------------------.
 $(window).on('load',function(){

 $("#preloader").fadeOut();
		
 });
    