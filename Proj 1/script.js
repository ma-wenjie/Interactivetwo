$(document).ready(function(){

	n = 1;
	i = 1;
	$("#container").click(function(){
			$("#container").css({
			"transform": "scale(1)"
		});
		
		n++;
		for(var i = 1; i < n; i++){
			$("#container").append('<div id="main"><div id="outer-circle"><div id="inner-circle"><div id="center-circle"><div id="content"><div clas="background></div></div></div></div></div></div>');
			
		

		}

	});




});