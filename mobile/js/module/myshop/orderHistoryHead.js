//기간 설정하기
$('.xans-myshop-orderhistoryhead .eDataSet').on('click', function() {
    $('#dataSearch').toggle();
    $(this).siblings().removeClass('selected');
    OrderHistory.set_period_mode('search');
});