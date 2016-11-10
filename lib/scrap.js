const rimraf = require('rimraf');

const scrap = {};

//deletes a directory and contents
scrap.scrapFiles = function(directoryName, cb) {
  var arr = (__dirname).split('/');
  arr.pop();
  var directoryPath = arr.join('/');
  directoryPath += '/data/' + directoryName;

  rimraf(directoryPath, () => {
    cb();
  });
};

module.exports = scrap;