$(document).ready(function(){
	$('#drumz-pic').animate({"top":"0%"},1000);
	$('button').click(function(){
		$('html,body').animate({
			scrollTop:$('.video-div').offset().top
		},1000);
	});
	
	  var toggle = 0;
  $("#nav-img").click(function() {
    if (!toggle) {
      $("#full-nav").css({"display":"block"});
      toggle = 1;
    } else {
      $("#full-nav").css({"display":"none"});
      toggle = 0;
    }
  });
});