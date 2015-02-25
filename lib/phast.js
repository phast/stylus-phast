var stylus = require('stylus'),
    path = require('path'),
    nodes = stylus.nodes,
    utils = stylus.utils,
    fs = require('fs'),
    nib = require('nib');

exports = module.exports = plugin;
exports.version = require(path.join(__dirname, '../package.json')).version;
exports.path = __dirname;

function plugin(){
    return function(stylus){
        var spritePath;

        stylus
            .include(__dirname)
            .use(nib())
            .import('nib')
            .import('phast');

        if(fs.existsSync(spritePath = __dirname + '/../../../source/etc/sprite.styl')){
            stylus.import(spritePath);
        };

    };
}
