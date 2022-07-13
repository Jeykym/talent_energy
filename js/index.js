const BURGER = $('.navbar__burger');
const BURGER_LINE = $('.navbar__burger__line');
const COLLAPSE = $('.navbar__collapse');

const CLASS_BURGER_ACTIVE = 'navbar__burger--active';
const CLASS_LINE_ACTIVE = 'navbar__burger__line--active';
const CLASS_COLLAPSE_ACTIVE = 'navbar__collapse--active';

BURGER.on('click', function() {
    BURGER.toggleClass(CLASS_BURGER_ACTIVE);
    BURGER_LINE.toggleClass(CLASS_LINE_ACTIVE);
    COLLAPSE.toggleClass(CLASS_COLLAPSE_ACTIVE);
})


const NAV_BRAND = $('.navbar__brand');
const NAV_ITEM = $('.navbar__item');

const CLASS_NAV_ITEM_ACTIVE = 'navbar__item--active';

NAV_ITEM.on('click', function() {
    NAV_ITEM.removeClass(CLASS_NAV_ITEM_ACTIVE);
    $(this).addClass(CLASS_NAV_ITEM_ACTIVE);

    BURGER.removeClass(CLASS_BURGER_ACTIVE);
    BURGER_LINE.removeClass(CLASS_LINE_ACTIVE);
    COLLAPSE.removeClass(CLASS_COLLAPSE_ACTIVE);
})


NAV_BRAND.on('click', function() {
    NAV_ITEM.removeClass(CLASS_NAV_ITEM_ACTIVE);
})


const CARD_BTN = $('.card .btn');
const MODAL = $('.modal');
const MODAL_BTN = $('.modal__btn');

const CLASS_MODAL_ACTIVE = 'modal--active';

CARD_BTN.on('click', function() {
    const BTN_INDEX = CARD_BTN.toArray().indexOf(this);
    const ACTIVE_MODAL = $(MODAL.toArray()[BTN_INDEX]);
    ACTIVE_MODAL.addClass(CLASS_MODAL_ACTIVE);
})

MODAL_BTN.on('click', function() {
    MODAL.removeClass(CLASS_MODAL_ACTIVE);
})


MODAL.on('click', function() {
    MODAL.removeClass(CLASS_MODAL_ACTIVE);
}).children().on('click', function() {
    return false;
})