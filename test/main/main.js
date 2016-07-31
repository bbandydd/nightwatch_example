var google_index = require('../google/index.js');
var google_search = require('../google/search.js');

var extend = function(target) {
    var sources = [].slice.call(arguments, 1);
    sources.forEach(function(source) {
        for (var prop in source) {
            target[prop] = source[prop];
        }
    });
    return target;
};

module.exports = extend(
    google_index,
    google_search
)
