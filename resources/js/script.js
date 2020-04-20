$(document).ready(function() {
  

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
    // scroll on button

   $(".js--scroll-to-plan").click(function(){
   	$("html, body").animate({scrollTop: $(".js--section-plans").offset().top},1000);

   });

   $(".js--scroll-to-start").click(function(){
   	$("html, body").animate({scrollTop: $(".js--section-features").offset().top},1000);

   });
   
   $(".features").click(function(){
     $("html, body").animate({
     	scrollTop: $("#features").offset().top
     },1000);

   });

   $(".works").click(function(){
     $("html, body").animate({
     	scrollTop: $("#works").offset().top
     },1000);

   });

   $(".cities").click(function(){
     $("html, body").animate({
     	scrollTop: $("#cities").offset().top
     },1000);

   });
   
   $(".plans").click(function(){
     $("html, body").animate({
     	scrollTop: $("#plans").offset().top
     },1000);

   });

   $(".js--nav-icon").click(function(){
   var nav = $(".js--main-nav");
   var icon = $(".js--nav-icon i")
   nav.slideToggle(200);

if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }    


   
   });

   // maps
   new GMaps({
   	div:'.map',
   	lat: -12.043333,
   	lng: -77.028333

   });
 


    
    });
