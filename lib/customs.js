var stylus = require('stylus'),
    nodes = stylus.nodes,
    utils = stylus.utils,
    fs = require('fs');

exports = module.exports = plugin;

function plugin(){
    // Remove single or double quotes from start and ending of string
    function unquote (str) {
        return str.replace(/^[\'\"]|[\'\"]$/g, '');
    }

    return function(stylus){
        stylus
        .define('str-replace', function (string, match, value) {
            // Replace matching chars in string and replace with needed value
            return unquote(string.toString()).replace(new RegExp(unquote(match.toString()), 'gm'), unquote(value.toString()));
        })
        .define('str-split', function (string, match) {
            return unquote(string.toString()).split(unquote(match.toString()));
        })
        .define('str-indexOf', function (match, string) {
            return unquote(string.toString()).indexOf(unquote(match.toString()));
        })
        .define('str-to-base64', function (string) {
            // Encode string to base64 format
            return new Buffer(unquote(string.toString())).toString('base64');
        });
    };
}
