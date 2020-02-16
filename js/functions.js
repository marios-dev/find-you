jQuery(document).ready(function($){
    // Toggle side menu for mobile
    $('.burger-menu').click(function(){
        if($('.bm-bottom').hasClass('active')){
          $(".bm-circle").attr("class", "bm-circle");
        } else{
          $(".bm-circle").attr("class", "bm-circle active");
        }
        $('.bm-top, .bm-bottom').toggleClass("active");
        $('.header-nav nav').toggleClass('nav-active');
        $(this).toggleClass('fixed');
        $('body').toggleClass('dimmed');
    });

    // Exclude header container from closing
    $('.header').click(function(event){
        event.stopPropagation();
    });

    // Close side menu when clicked outside of it
    $(window).click(function() {
        $('.burger-menu').removeClass('fixed');
        $('.header-nav nav').removeClass('nav-active');
        $('body').removeClass('dimmed');
        $('.bm-top, .bm-bottom, .bm-circle').removeClass("active");
    });
});