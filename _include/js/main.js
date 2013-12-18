jQuery(function ($) {

    /* =============    Header          ============= */

    // Toggle navigation
    $('.nav-toggle').click(function (e) {
        e.preventDefault();
        $('.main-nav').toggleClass('active-nav');
    });
    
    // Toggle .active class, so we can add a white background instead of transparent when scroll
    $(document).scroll(function () {
        var $header_section = $('#header-section');
        ($(window).scrollTop() > 100 ? $header_section.addClass('active') : $header_section.removeClass('active'));

    });

});