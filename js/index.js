const NAV_LINK = $('.navbar__link');

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



const FORM = $('.contact__form');
const INPUTS = FORM.find('input, textarea');
const DIALOG = $('.dialog');
const DIALOG_TEXT = $('.dialog__text');
const DIALOG_CLOSE = $('.dialog__close');

const CLASS_DIALOG_ACITVE = 'dialog--active';
const CLASS_DIALOG_SUCCESS = 'dialog--success';
const CLASS_DIALOG_ERROR = 'dialog--error';


let request;

FORM.on('submit', function(event) {
    event.preventDefault();

    if (request) {
        request.abort();
    }


    let serializedData = FORM.serialize();

    INPUTS.prop('disabled');

    request = $.ajax({
        url: "/php/form.php",
        type: "POST",
        data: serializedData,

        success: function() {
            DIALOG.addClass(CLASS_DIALOG_SUCCESS);
            DIALOG_TEXT.text('Dotaz odeslán');
        },

        error: function() {
            DIALOG.addClass(CLASS_DIALOG_ERROR);
            DIALOG_TEXT.text('Něco se nepovedlo');
        },
    })

    request.always(function() {
        DIALOG.addClass(CLASS_DIALOG_ACITVE);
        INPUTS.prop('disabled', false);
        FORM[0].reset();
    })
})


DIALOG_CLOSE.on('click', function() {
    DIALOG.removeClass(CLASS_DIALOG_ACITVE);
})