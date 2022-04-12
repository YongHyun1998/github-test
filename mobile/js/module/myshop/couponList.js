$('.couponList td.layer').on('click', function(){
	$(this).toggleClass('selected');
	$(this).parent('tr').next('tr').children('td').toggleClass('selected');
});