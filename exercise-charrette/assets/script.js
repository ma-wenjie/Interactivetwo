$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '0.6in',
			fontSize: '24px',
			borderWidth: '10px'
		}, 1000 );
	});

	$("#button-26").click(function() {
		window.confirm("ERROR");
	});

	$("#button-27").click(function() {
		document.getElementById("button-27").innerHTML = ((Math.random() * .9));
	});

});