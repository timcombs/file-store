const store = require('../lib/store');
const get = require('../lib/get');
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
  }
];

describe('saveFile method', function() {
  it('directory was added', function(done) {
    store.saveFile(elements, 'elements', directoryTest);
    function directoryTest(err) {
      assert.ok(fs.existsSync('/data/elements'));
    }
    done();
  });
});

//describe('readFile method', function() {
  //it('', function() {

  //});
//});


//the following are the basis of the tests for two filesystem methods
// store.get('something', (err, 'thing') => {
//   assert.deepEqual(something, {
//     name: 'thingName',
//     breed: 'thingbreed'
//   }),
// }

// store.save('something', (err, 'thing') => {
//   assert.deepEqual(something, {
//     name: 'thingName',
//     breed: 'thingbreed'
//   }),
// }