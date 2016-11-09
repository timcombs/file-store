const store = require('../lib/store');
const get = require('../lib/get');
const scrap = require('../lib/scrap');
const fs = require('fs');
const assert = require('assert');

const elements = [
  {
    name: 'hydrogen',
    number: 1,
    mass: 1,
    symbol: 'H'
  },
  {
    name: 'helium',
    number: 2,
    mass: 4,
    symbol: 'He'
  },
  {
    name: 'lithium',
    number: 3,
    mass: 7,
    symbol: 'Li'
  },
  {
    name: 'beryllium',
    number: 4,
    mass: 9,
    symbol: 'Be'
  },
  {
    name: 'boron',
    number: 5,
    mass: 11,
  }
];

describe('in the file method', function() {
  before(function(done) {
    scrap.scrapFiles('elements', done);
  });

  it('the directory was added', (done) => {
    store.saveFile(elements, 'elements', (err) => {
      if (err) return done(err);
      assert.ok(fs.existsSync('./data/elements'));
      //assert.ok(false);
      done();
    });
  });

  it('merged array same as original array', (done) => {
    get.mergeAllFiles('elements', (arr) => {
      assert.deepEqual(elements, arr);
      done();
    });
  });

  it('finds JSON files for only the specified elements', (done) => {
    get.findFiles(['beryllium', 'helium'], (arr) => {
      assert.deepEqual([{name: 'helium', number: 2, mass: 4, symbol: 'He'}, {name: 'beryllium', number: 4, mass: 9,symbol: 'Be'}], arr);
      done();
    });
  });

  it('creates a JSON file for a single specified element', (done) => {
    get.findFiles(['beryllium'], (arr) => {
      assert.deepEqual([{name: 'beryllium', number: 4, mass: 9,symbol: 'Be'}], arr);
      done();
    }); 
  });

  it('finds all files in the elements directory', (done) => {
    get.findAllFiles('elements', (filenames) => {
      assert.deepEqual([ 'beryllium.json','boron.json','helium.json','hydrogen.json','lithium.json' ], filenames);
      done(); 
    });
  });

});