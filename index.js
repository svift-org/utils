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

  module.array2csv = function (array, header) {
    let csv = ''
    if(header){
      header.forEach((d,i)=>{
        if(i>0){
          csv += ','
        }
        csv += d
      })
      csv += '\n'
    }
    array.forEach((d,i) => {
      if(i>0){
        csv += '\n'
      }
      d.forEach((dd,ii)=>{
        if(ii>0){
          csv += ','
        }
        csv += dd
      })
    })
    return csv
  }

  return module;
 
})();

module.exports = utils;