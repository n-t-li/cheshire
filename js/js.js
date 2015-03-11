$(document).ready(function(){

	$('.menu .menu_show').click(function(){
		$('.menu ul').slideToggle(600);
	});

	$(document).click(function(e){
		if($('.menu_show').css('display') == 'block'){
			if ($(e.target).parents().filter('.menu:visible').length != 1){
				$('.menu ul').slideUp(600);
			}
		}
	});

	$('.block_faq_title').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$(this).parent().find('.block_faq_content').slideUp(600);
		}else{
			$('.block_faq_content').slideUp(600);
			$(this).parent().parent().find('.open').removeClass('open');
			$(this).addClass('open');
			$(this).parent().find('.block_faq_content').slideDown(600);
		}
	});

	if(device.desktop()){
		$('.video').css('display', 'block');
	}
	if(device.mobile() || device.tablet()){
		$('body').addClass('mobile');
	}

});

$(window).resize(function(){
	if($(window).width() < 760){
		$('.menu ul').css('display', 'none');
	}
	if($(window).width() > 760){
		$('.menu ul').css('display', 'block');
	}
});