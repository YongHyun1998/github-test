/**
 * 할인기간 레이어
 */
$(function(){

    $(document).on('click', '.discountPeriod > a', function() {
        $(this).parent().find('.layerDiscountPeriod').show();
    });

    $(document).on('click', '.btnClose, button.submit', function() {
        $(this).parents('.layerDiscountPeriod').hide();
    });
});