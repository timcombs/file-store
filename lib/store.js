// //functions for store functionality
// //expose the public methods on an object
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
var store = {};

//this function will create a directory, take in an object or array, and save each object as json within as a file.
store.saveFile = function(obj, name, cb) {
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
    fs.writeFile(createFilePath, fileData, function(err) {
      if (err) return cb(err);
      console.log('the future is chemistry');
      cb();
    });
  });
};

module.exports=store;