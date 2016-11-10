const fs = require('fs');
var get = {};
get.sortedReturnedArray = [];

//this function will find file(s) in the elements folder
get.findFiles = (nameArray, cb) => {
  var elementsArr = [];
  nameArray.forEach((elementName) => {
    var path = './data/elements/' + elementName + '.json';
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) throw err;
      elementsArr.push(JSON.parse(data));
      if (elementsArr.length === nameArray.length) {
        var sortedElements = elementsArr.sort((a,b) => {
          return a.number - b.number;
        });
        console.log(sortedElements);
        cb(sortedElements);
      }
    });

  });
};

//this function finds all the files in the elements folder
get.findAllFiles = (name, cb) => {
  var path = './data/' + name;
  fs.readdir(path, 'utf-8', (err, filenames) => {
    if (err) {
      console.log(err);
    }
    console.log(filenames);
    cb(filenames);
  });
};

//this function will find the data in the elements folder by filename, un-jsonify the data, and group it into an object
get.mergeAllFiles = (directoryName, cb) => {
  var arr = [];
  var path = './data/' + directoryName;
  fs.readdir(path, 'utf-8', function(err, filenames) {
    if (err) {
      console.log(err);
    }

    filenames.forEach((fileName) => {
      var filePath = './data/'+ directoryName +'/'+ fileName;
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw err;
        arr.push(JSON.parse(data));
        if (arr.length === filenames.length) {
          var sortedArr = arr.sort ((a,b) => {
            return a.number - b.number;
          });
          console.log(sortedArr);
          cb(sortedArr);
        }
      });
    });
  });
};

module.exports = get;