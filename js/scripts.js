AOS.init();

/* Open */

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

initMap=()=>{
  var office = {lat:-1.299752, lng:36.792060};
  var map = new google.maps.Map(document.getElementById('map'),{zoom: 20, center: office});
  var marker = new google.maps.Marker({position: office, map:map});
}

$(document).ready(function() {
  $('a').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });

  $('button#more').click(function(){
    $('img.more').slideToggle('slow', function(){
        if ($('img.more').css('display')=='none') {
          $('button#more').html('SHOW MORE');
        } else {
          $('button#more').html('LESS');
        }

    });
  })






})
