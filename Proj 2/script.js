$(document).ready(function(){



$(function() {
        
        for (var i = 0; i < 1; i++){
          $("<div>", {
            class : "",
            css : {
              opacity : randomOpacity()
            }
          }).appendTo("body"); 
        }
       
//     $( "button" ).click(function() {
//   $( "A" ).each(function( index, element ) {
    
//     $( element ).css("Opacity", ".5");
//      });
// });

$('div').each(function(){
	$(this).css('opacity', randomOpacity);
});

        
        function randomOpacity(){
          var opac = 0;
             opac =  Math.random();
          return opac;
        }
      });





});