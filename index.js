$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: false,          // DESATIVA o modo infinito 
    nav: false,          
    dots: false,         
    rewind: false,
    margin: 20,           // Espaçamento entre os atores
    mouseDrag: true,      // Permite deslizar com o mouse
    touchDrag: true,      // Permite deslizar no celular/touch
    freeDrag: false,      
    responsive:{
        0:{
            items: 1      // Mobile: mostra 1 por vez
        },
        600:{
            items: 3      // Tablet: mostra 3 por vez
        },
        1000:{
            items: 6      // Desktop: mostra 6 por vez 
        }
    }
  });
});