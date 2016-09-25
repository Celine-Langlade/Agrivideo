(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

txtCat= "agriculteur";

$('#liste li').click (function(){
  txtCat=null;
  console.log(txtCat);
  if ($(this).text() == "All") {
    txtCat = "agriculteur";
  }
  else {
    txtCat = $(this).text();
    console.log($(this).text());
  }
});

$(function() {
    var availableTags = [
    "Céréales",
    "Oléagineux",
    "Protéagineux",
    "Pommes de Terre",
    "Betteraves",
    "Legumes",
    "Fruits",
    "Cultures Fouragères",
    "Semis direct vigne",
    "TCS",
    "Marraichage",
    "Agriculture Bio",
    "Lait",
    "Bovins",
    "Porcins",
    "production Avicole",
    "Diversification",
    "Circuit Courts",
    "Reglementations",
    "Technologies",
    "Agroforesterie",
    ];
    $("#tags").autocomplete({
      source: availableTags
  });
});
