$(document).ready(function() {
  $("#Izq").click(()=>{
    $( "#receta" ).removeClass( "recetaVisual" );
    $( "#receta" ).removeClass( "recetaDer" );
    $("#receta").addClass("recetaIzq")
  })
  $("#Der").click(()=>{
    $( "#receta" ).removeClass( "recetaVisual" );
    $( "#receta" ).removeClass( "recetaIzq");
    $("#receta").addClass("recetaDer")
  })
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



          $( "#receta" ).click(function() {
          
            // alert ("hola");
            $( "#receta" ).addClass( "recetaIzq");
         });
    //    });
});
