AOS.init();

// window.onscroll= function(){
//   if(document.body.scrollTop>30 || document.documentElement.scrollTop > 30){
//     document.getElementById("mainNav").style.display = "block"
//   }else{
//     document.getElementById("mainNav").style.display="none";
//   }
// }
$(document).ready(function() {
  $("#mainNav").hide();
  $('a#contactinfo').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1500);
    return false;
  });


$(".menu").click(function(){
  $(this).toggleClass("open");
},
);
    // hide .navbar first


    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) {
                $('#mainNav').slideDown();
            } else {
                $('#mainNav').slideUp();
            }
        });
    });





  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });



})
