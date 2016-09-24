var app = angular.module("app", ['jtt_youtube']);
app.controller('controller', ['$scope', 'youtubeFactory', function($scope, youtubeFactory) {

    var _apiKey = "AIzaSyDnLrYqj8CEcAubXdMlYmJ0ljV0hJsJ_8Q";

    youtubeFactory.getVideosFromChannelById({
        channelId: "UCVkXCOYluJvD6OPjX9HXj-A",
        maxResults: "50",
        key: _apiKey,
    }).then(function(_data) {
        console.info("videos from channel by id", _data);
    });

    youtubeFactory.getVideosFromSearchByParams({
        q: "agriculteur d'aujourd'hui",
        maxResults: "9",
        key: _apiKey,
    }).then(function(_data) {
        $scope.videos = _data.data.items;
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
    });

    youtubeFactory.getVideosFromSearchByParams({
        location: "37.42307,-122.08427",
        locationRadius: "1000m",
        maxResults: "50",
        key: _apiKey,
    }).then(function(_data) {
        console.info("videos from search by location", _data);
    });

    youtubeFactory.getVideosFromPlaylistById({
        playlistId: "PLNLa2lbKPczGCueOYxjrwYDuNTBtQveK0",
        maxResults: "50",
        key: _apiKey,
    }).then(function(_data) {
        console.info("videos from playlist by id", _data);
    });

    youtubeFactory.getVideoById({
        videoId: "rG-haoIhH9o",
        key: _apiKey,
    }).then(function(_data) {
        console.info("video by id", _data);
    });

    youtubeFactory.getChannelById({
        channelId: "UCVkXCOYluJvD6OPjX9HXj-A",
        key: _apiKey,
    }).then(function(_data) {
        console.info("channel by id", _data);
    });


}]);
