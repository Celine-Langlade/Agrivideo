var app = angular.module('myApp');

// filter to shorten youtube titles
app.filter('truncate', function () {
    return function (text, length, end) {
        if (isNaN(length)) {
            length = 10;
        }
        if (end === undefined) {
            end = "...";
        }
        if (text.length <= length || text.length - end.length <= length) {
            return text;
        } else {
            return String(text).substring(0, length - end.length) + end;
        }
    };
});

// filter to convert youtube duration (seconds) into noramlly displayed timestamps
app.filter('durationconverter', function () {
    return function (duration) {

        minutes = Math.floor(duration / 60);
        seconds = duration % 60;
        if (minutes !== 0) {
            return String(minutes) + " minutes, " + seconds + " seconds"
        } else {
            return String(seconds) + " seconds"
        }
    };
});
