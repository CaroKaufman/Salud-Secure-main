$(document).ready(function() {

   // $(function() {
        $( "#button" ).click(function() {
           // alert ("hola");
          $( "#button" ).addClass( "onclic", 250, validate());
        });
      
        function validate() {
          setTimeout(function() {
            $( "#button" ).removeClass( "onclic" );
            $( "#button" ).addClass( "validate", 450, callback());
          }, 2250 );
        }
          function callback() {
            setTimeout(function() {
              $( "#button" ).removeClass( "validate" );
            }, 1250 );
          }
    //    });
});
