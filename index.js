const store = require('./lib/store');

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
    name: 'Beryllium',
    number: 4,
    mass: 9,
    symbol: 'Be'
  },
  {
    name: 'Boron',
    number: 5,
    mass: 11,
  }
];

store.saveFile(elements, name, console.log('elements stashed'));