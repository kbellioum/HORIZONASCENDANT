
(function(){

    var navbar = document.getElementById('navbarNav');
    console.log(navbar)

})();

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
