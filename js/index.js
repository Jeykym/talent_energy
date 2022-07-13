const BURGER = $('.navbar__burger');
const BURGER_LINE = $('.navbar__burger__line');
const COLLAPSE = $('.navbar__collapse');
const NAV_ITEM = $('.navbar__item');

const CLASS_BURGER_ACTIVE = 'navbar__burger--active';
const CLASS_LINE_ACTIVE = 'navbar__burger__line--active';
const CLASS_COLLAPSE_ACTIVE = 'navbar__collapse--active';
const CLASS_NAV_ITEM_ACTIVE = 'navbar__item--active';


BURGER.on('click', function() {
    BURGER.toggleClass(CLASS_BURGER_ACTIVE);
    BURGER_LINE.toggleClass(CLASS_LINE_ACTIVE);
    COLLAPSE.toggleClass(CLASS_COLLAPSE_ACTIVE);
})


NAV_ITEM.on('click', function() {
    NAV_ITEM.removeClass(CLASS_NAV_ITEM_ACTIVE);
    $(this).addClass(CLASS_NAV_ITEM_ACTIVE);
})
