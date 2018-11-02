AOS.init();

// window.onscroll= function(){
//   if(document.body.scrollTop>30 || document.documentElement.scrollTop > 30){
//     document.getElementById("mainNav").style.display = "block"
//   }else{
//     document.getElementById("mainNav").style.display="none";
//   }
// }
var i = 0;

var counter = setInterval(function(){
  i++;
document.getElementById("counter").innerHTML=i;
document.getElementById("meter").style.width = i+"%";
if (i==100) {
  clearInterval(counter);
  document.getElementById("loader").style.display="none";
    document.getElementById("showWeb").style.display="block";
}
}, 50);



$(document).ready(function() {
  // $("#mainNav").hide();
  // $('a#contactinfo').click(function() {
  //   $('html, body').animate({
  //     scrollTop: $($(this).attr('href')).offset().top
  //   }, 1500);
  //   return false;
  // });


$(".menu").click(function(){
  $(this).toggleClass("open");
  if ($(".menu").hasClass("open")) {
    TweenMax.staggerFrom(".menu-item", 1, {x:250, opacity:0}, .25);
  }
  $(".menucontent").fadeToggle("fast", "swing");

});


    // hide .navbar first
    //
    // // fade in .navbar
    // $(function () {
    //     $(window).scroll(function () {
    //
    //              // set distance user needs to scroll before we start fadeIn
    //         if ($(this).scrollTop() > 100) {
    //             $('#mainNav').slideDown();
    //         } else {
    //             $('#mainNav').slideUp();
    //         }
    //     });
    // });
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

})
