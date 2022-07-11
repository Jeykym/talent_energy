$('.navbar__burger').on('click', function() {
    $(this).toggleClass('navbar__burger--active');
    $('.navbar__burger__line').toggleClass(
        'navbar__burger__line--active'
    );
    $('.navbar__collapse').toggleClass(
        'navbar__collapse--active'
    );
})


$('.navbar__item').on('click', function() {
    $('.navbar__item').removeClass('navbar__item--active');
    $(this).addClass('navbar__item--active');
})