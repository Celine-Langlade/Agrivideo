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
  var app = angular.module("app", ['jtt_youtube']);
  app.controller('controller', ['$scope', 'youtubeFactory', function($scope, youtubeFactory) {

      var _apiKey = "AIzaSyDnLrYqj8CEcAubXdMlYmJ0ljV0hJsJ_8Q";


      youtubeFactory.getVideosFromSearchByParams({
        /* deb modif steph*/
          q: txtCat,
        /* fin modif steph*/
          maxResults: "20",
          key: _apiKey,
      }).then(function(_data) {
          $scope.videos = _data.data.items;
          console.log(txtCat);
          console.info("videos from search by q", _data);
          console.log(_data.data.items[0].snippet.channelTitle);
          $('#video1').attr('src', 'https://www.youtube.com/embed/' + _data.data.items[0].id.videoId);
          $('#video2').attr('src', 'https://www.youtube.com/embed/' + _data.data.items[1].id.videoId);
          $('#video3').attr('src', 'https://www.youtube.com/embed/' + _data.data.items[2].id.videoId);
          $('#video4').attr('src', 'https://www.youtube.com/embed/' + _data.data.items[3].id.videoId);
          $('#video5').attr('src', 'https://www.youtube.com/embed/' + _data.data.items[4].id.videoId);
          $('#video6').attr('src', 'https://www.youtube.com/embed/' + _data.data.items[5].id.videoId);
          $('#video7').attr('src', 'https://www.youtube.com/embed/' + _data.data.items[6].id.videoId);
          $('#video8').attr('src', 'https://www.youtube.com/embed/' + _data.data.items[7].id.videoId);
          $('#video9').attr('src', 'https://www.youtube.com/embed/' + _data.data.items[8].id.videoId);
          $('#video10').attr('src', 'https://www.youtube.com/embed/' + _data.data.items[9].id.videoId);
          $('#video11').attr('src', 'https://www.youtube.com/embed/' + _data.data.items[10].id.videoId);
          $('#video12').attr('src', 'https://www.youtube.com/embed/' + _data.data.items[11].id.videoId);
      });

  }]);
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
