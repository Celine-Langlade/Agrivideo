// Code goes here

var app = angular.module('myApp', ['youtube']);

app.factory('youtubeSearch', function ($q, $http) {

    return {

        getYoutubeData: function (search) {
            var deferred = $q.defer();
            var url = "http://gdata.youtube.com/feeds/api/videos?q=" + search + "&alt=json&max-results=4&start-index=1&callback=JSON_CALLBACK";

            $http.jsonp(url).success(function (json) {
                var videos = json.feed.entry;
                deferred.resolve(videos);
            }).error(function (error) {
                console.log(JSON.stringify(error));
            });
            return deferred.promise;
        }
    };
});



app.controller('YoutubeSearchController', ['$scope', 'youtubeSearch', 'Player', '$timeout', '$rootScope', function ($scope, youtubeSearch, Player, $timeout, $rootScope) {

    $scope.player = Player;
    $scope.search = "penny and the quarters - you and me";
    $scope.videos = [];
		$scope.editPlaylistView = false;
		$scope.searchView = true;
		$scope.playlistVideos = [
      {title: "You and Me - Penny & The Quarters", thumbnail: "http://i.ytimg.com/vi/zjYxNnzNhRs/0.jpg", url: "http://www.youtube.com/watch?v=zjYxNnzNhRs&feature=youtube_gdata", duration: 186, videoId: "zjYxNnzNhRs" },
			{title: "Passenger - Let Her Go (Kygo Remix)", thumbnail: "http://i.ytimg.com/vi/LgL6dRQH0tg/0.jpg", url: "http://www.youtube.com/watch?v=LgL6dRQH0tg&feature=youtube_gdata", duration: 402, videoId: "LgL6dRQH0tg" },
			{title: "Smokey Robinson - Tracks of my tears", thumbnail: "http://i.ytimg.com/vi/2HnVsvBO8aI/0.jpg", url: "http://www.youtube.com/watch?v=2HnVsvBO8aI&feature=youtube_gdata", duration: 182, videoId: "2HnVsvBO8aI" },
			{title: "Fontella Bass - Rescue Me", thumbnail: "http://i.ytimg.com/vi/ALQ6lzS-Npc/0.jpg", url: "http://www.youtube.com/watch?v=ALQ6lzS-Npc&feature=youtube_gdata", duration: 170, videoId: "ALQ6lzS-Npc" }
		];
		$scope.currentVideo = $scope.playlistVideos[0];
		$scope.currentVideoIndex = 0;

		$scope.removeVideo = function(index) {
			$scope.playlistVideos.splice(index, 1);
		};


    $scope.$watch(function combinedWatch() {
        return {
            search: $scope.search
        };
    }, function (value) {
        if (value.search) {
            $scope.videos = [];
            var promise = youtubeSearch.getYoutubeData($scope.search);

            promise.then(function (videosData) {
                // $scope.videos = data;
                angular.forEach(videosData, function (video) {
										var searchVideo = {};
                    searchVideo.title = video.title.$t;
                    searchVideo.thumbnail = video.media$group.media$thumbnail[0].url;
                    searchVideo.url = video.link[0].href;
                    searchVideo.duration = video.media$group.media$content[0].duration;
                    searchVideo.videoId = video.link[0].href.match(/^http:\/\/www\.youtube\.com\/.*[?&]v=([^&]+)/i)[1];
										$scope.videos.push(searchVideo);
                });
            });

        }
    }, true);

    $scope.addVideo = function (video) {
      console.log(video);
      this.playlistVideos.push(video);
			this.videos.splice(this.videos.indexOf(video), 1);
    };

		$scope.togglePlaylistView = function() {
			$scope.editPlaylistView = !$scope.editPlaylistView;
		};

		$scope.toggleSearchView = function() {
      $scope.searchView = !$scope.searchView;
		};

		$scope.nextVideo = function() {
			// technically, if you took out all the songs, and then clicked next, it would throw an error, but this is just for the fiddle.
			var nextIndex = $scope.currentVideoIndex >= $scope.playlistVideos.length - 1 ? 0 : $scope.currentVideoIndex + 1;
			$scope.playVideo($scope.playlistVideos[nextIndex]);
		};

		$scope.previousVideo = function() {
			var previousIndex = $scope.currentVideoIndex === 0 ? $scope.playlistVideos.length - 1 : $scope.currentVideoIndex - 1;
			$scope.playVideo($scope.playlistVideos[previousIndex]);
		};

		$scope.togglePlayerState = function() {
			var playerState = this.player.player.getPlayerState();
			playerState == 1 ? this.player.player.pauseVideo() : this.player.player.playVideo();
		};

    $scope.playVideo = function(video) {
				this.currentVideo = video;
				this.currentVideoIndex = this.playlistVideos.indexOf(video);
				this.player.player.loadVideoById(video.videoId);
    };

}]);
