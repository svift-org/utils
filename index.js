/*
 *
 * Add header info here
 *
 */

'use strict';

var fs = require('fs')

var utils = (function () {
 
  var module = {}

  module.deleteFolderRecursive = function (path) {
    if( fs.existsSync(path) ) {
      fs.readdirSync(path).forEach(function(file,index){
        var curPath = path + "/" + file;
        if(fs.lstatSync(curPath).isDirectory()) { // recurse
          module.deleteFolderRecursive(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  }

  return module;
 
})();

module.exports = utils;