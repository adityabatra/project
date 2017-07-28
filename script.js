$(document).ready(function(){
	$('#drumz-pic').animate({"top":"0%"},1000);
	$('button').click(function(){
		$('html,body').animate({
			scrollTop:$('.video-div').offset().top
		},1000);
	});
});