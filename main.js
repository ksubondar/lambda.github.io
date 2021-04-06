$(document).ready(function () {
    $(".menuToggle").click(function() {
        $(this).toggleClass("active"),
        $(".header-nav").toggleClass("active");
        $(".menu").slideToggle(300, function(){
          if($(this).css("display") === "none"){
            $(this).removeAttr("style"); 
          }
        });
        $('.menu li').on('click', function () {
          $('.menu').hide(100, function(){
            if ($(this).css('display') === 'none') {
              $(this).removeAttr('style');
              $(".menuToggle").removeClass("active");
            }
          });
        });
      });
      $(window).on('resize', function() {
        if ($(window).width() < 1220) {
          $('.first-menu-img').detach().prependTo('.form-adaptive-img-one'),
          $('.second-menu-img').detach().prependTo('.form-adaptive-img-two');
        }
        });
        $(window).on('resize', function() {
          if ($(window).width() < 768) {
            $('.header-social').detach().prependTo('.menu');
          }
          });
});