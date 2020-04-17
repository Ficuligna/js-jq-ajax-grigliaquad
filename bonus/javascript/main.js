// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX
// che prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato





$(document).ready(function(){

  var source = $("#giacomino-template").html()
  var template = Handlebars.compile(source)
  var creazioneGriglia = "";
  for (var i = 0; i < 36; i++) {
    creazioneGriglia = creazioneGriglia + template();
  }
  $(".griglia").html(creazioneGriglia);

  $(".griglia").on("click",".square", function(){
    var squareActive = $(this);

    $.ajax({
      url : "https://flynn.boolean.careers/exercises/api/random/int",
      method : "GET",
      success : function (data,stato){
        if (squareActive.data("active") == true) {

        }else{
          squareActive.find("span").html(data.response);
          if (data.response < 5) {
            squareActive.addClass("red");
          }else if (data.response == 5) {
            squareActive.addClass("woowwy")
          }else{
            squareActive.addClass("green");
          }
        }
        squareActive.data("active", true);

      },
      error : function ( richiesta, stato, errori){
        alert("errore " + errori, stato)
      }
    })
    console.log(squareActive.data("active"));
  })
})
