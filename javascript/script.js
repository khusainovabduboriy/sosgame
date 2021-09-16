$(function(){
    $('.burger').click(function(){
        $('.burger').toggleClass('burger_active');
    });
    $('.burger').click(function(){
        $('.menu_ul').toggleClass('active');
    });
    $('.menu_ul').click(function(){
        $('.menu_ul').removeClass('active');
        $('.burger').removeClass('burger_active');
    });
    $('.previ').hover(function(){
        $('.icon1').toggleClass('color');
    });
    $('.next').hover(function(){
        $('.icon2').toggleClass('color');
    });

});
const swiper = new Swiper('.mySwiper', {
    effect: "cards",
    grabCursor: true,
  });