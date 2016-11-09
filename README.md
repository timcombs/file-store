# File Storage API lab for CodeFellows 401

### Collaborators
 - Mugsy Carter
 - Tim Combs
 - Nathan Hugon

### Project Functionality
- app can store, retrieve & delete information about chemical elements
- developed using node, eslint, mocha & chai

### Use Cases
- app is to be used in the terminal

- currently:
  - holds a json object with information about chemical elements
  - this can be switched out with a data object with information of your choosing
  - index.js takes a data array (const elements) and creates a directory of files

- Storing
  - store.saveFile(elements, 'elements', () => {});
    - takes an array of objects and saves each object into the directory as a specific json file

- Retrieving
  - get.findFiles([array of element names], () => {});
    - takes an array of names, finds those files and logs their contents
  - get.findAllFiles(elements, () => {});
    - takes a directory name, finds all files in the directory and logs their contents

- Merging
  - get.mergeAllFiles(elements, () => {});
    - takes a directory name, finds all files in the directory and merges those files into a single json object
  
- Deleting
  - scrap.scrapFiles(elements, () => {});
    - takes a directory name and deletes the entire directory

### Testing
  - Set Up
    - To run the test suite, from the command line at the root of the project directory type:
      ```
      $ npm test
      ```
    - this will first run eslint - for more info look at .eslintrc
    - then mocha will use the exmorel-test-db database to run unit tests and e2e tests
    
  - simple testing can be done using a browser for GET requests or an app like Postman [https://www.getpostman.com/] for the other request methods

### Code Shape
  - This code has been vetted using Eslint and was reviewed by Code Fellows using Travis-CI

### Collborations/Questions/issues
  - Not currently looking for collaborators at this time
  - Any questions and concerns can be handled by opening an issue on the codebase

### License
  - Licensed under the MIT license - see LICENSE.md for more info

