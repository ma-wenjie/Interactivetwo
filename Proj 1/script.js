$(document).ready(function(){

	n = 0;
	i = 1;
	s = 1;

	var colors = ['blue', 'red', 'blue', 'orange']

	$("#container").click(function(){
			$("#container").css({
			"transform": "scale("+s+")"
		});
		s -= .01;
		n++;
		for(var i = 1; i < n; i++){
			$("#container").append('<div id="main"><div id="outer-circle"><div id="inner-circle"><div id="center-circle"><div id="content"><div class="background></div></div></div></div></div></div>');
			$('body').removeClass();
			
		}
		$('body').addClass(colors[n]);
		if (n>=4){n=0};
	});




});