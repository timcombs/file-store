const store = require('../lib/store');
const assert = require('assert'); 

// const elements = {
//   hydrogen : {
//     name: 'hydrogen',
//     number: 1,
//     mass: 1,
//     symbol: 'H'
//   },
//   helium : {
//     name: 'helium',
//     number: 2,
//     mass: 4,
//     symbol: 'He'
//   },
//   lithium : {
//     name: 'lithium',
//     number: 3,
//     mass: 7,
//     symbol: 'Li'
//   }
// };

const elements = [
  {
    name: "hydrogen",
    number: 1,
    mass: 1,
    symbol: "H"
  },
  {
    name: "helium",
    number: 2,
    mass: 4,
    symbol: "He"
  },
  {
    name: "lithium",
    number: 3,
    mass: 7,
    symbol: "Li"
  }
];

store.saveFile(elements, 'elements');


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