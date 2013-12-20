jQuery(function ($) {

    // Toggle navigation
    $('.nav-toggle').click(function (e) {
        e.preventDefault();
        $('.main-nav').toggleClass('active-nav');
    });

});