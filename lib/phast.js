
var stylus = require('stylus'),
    path = require('path'),
    nodes = stylus.nodes,
    utils = stylus.utils,
    nib = require('nib');

exports = module.exports = plugin;
exports.version = require(path.join(__dirname, '../package.json')).version;
exports.path = __dirname;

function plugin() {
  return function(style){
      style.include(__dirname);
      style.use(nib());
  };
}
