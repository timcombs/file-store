// //functions for store functionality
// //expose the public methods on an object
// const mkdirp = require('mkdirp');

// var store = {};

// //takes in an object of objects
// store.saveFile = function(obj, name) {
//   //take in array(or object) of objects
//   var obj = obj;
//   var dir = '../data/' + name;
//   //create directory - use mkdirp
//   mkdirp(dir, function (err) {
//     if (err) console.error(err);
//     else console.log('pow!');
//   });

//   obj.forEach
//   //iterate over array(object)
//     //serialize each object with json?
//     //save each object to disk as a separate file
    
// }

// store.getFile = function() {

// }

// module.exports = store;

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
var store = {};

//this function will create a directory, take in an object or array, and save each object as json within as a file.
store.saveFile = function(obj, name) {
  var dir = (__dirname).slice(0, -4) + '/data/' + name;
  
  //make element directory
  mkdirp(dir, function (err) {
    if (err) console.error(err);
    else console.log('pow!');
  });

  //iterate over array(object)
  obj.forEach(function(x) {
    var fileName = x.name + '.json';

    //translate data to json
    var fileData = JSON.stringify(x);

    // use path to concat dir & filename
    const createFilePath = path.join(dir, fileName);
    // const dataToWrite = files
    //         .filter(f => f !== indexFile)
    //         .join('\n');

    //save each object to disk as a separate file    
    fs.writeFile(createFilePath, fileData, (err) => {
      if (err) throw err; //cb(err);
      console.log('gassy day!!!!!!');
      //cb();
    });
  });
};

module.exports=store;