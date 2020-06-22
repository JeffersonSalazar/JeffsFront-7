// Efecto Scroll
AOS.init();

// Codigo que muestra y oculta el menu de navegacion
$('#content-icon').on('click', function() {
  $('#nav-content').toggleClass('menu-show');
});

// Codigo que cierra el menu de navegacion cuando se hace click en un enlace
$('.nav-link').on('click', function(e) {
  e.preventDefault();
  $('#nav-content').removeClass('menu-show');
});


// Codigo de la paginacion
$('.nav-link[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 72)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

  
// Codigo para marcar con color la seccion donde nos encontramos
$('body').scrollspy({
  target: '#menu-nav',
  offset: 75
});


// Codigo para ir arriba go-top
$('.btn-top').on('click',function() {
  $('html, body').animate({
    scrollTop: 0,
  }, 1000);
  return false;
});
  