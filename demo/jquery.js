// JavaScript Document

$(function() {

	// sidebarMenu開合
	$('.menu-options').click(function(){
		var _text = $(this).find('span:first-child')
		if($(this).is('.active')) {
			$('#sidebarMenu').addClass('menu_slide');
			$('#Wrap').addClass('wide');
			$(this).removeClass('active');
			_text.text('開啟選單');
		}
		else {
			$('#sidebarMenu').removeClass('menu_slide');
			$('#Wrap').removeClass('wide');
			$(this).addClass('active');
			_text.text('關閉選單');
		}
	});


});