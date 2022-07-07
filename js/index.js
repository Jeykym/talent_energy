$('.navbar__burger').on('click', function() {
    $(this).toggleClass('navbar__burger--active');
    $('.navbar__burger__line').toggleClass(
        'navbar__burger__line--active'
    );
    $('.navbar__collapse').toggleClass(
        'navbar__collapse--active'
    );
})