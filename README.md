# JSWorkspace

JS Exercises built with project 'expack' boilerplate.
Extended from https://github.com/richa-verma1001/expack.git.

This is placeholder to write new standalone JS problems and solutions. The project
is extended from another boilerplate application that is setup with Node, Express,
Webpack, Lint, Jest. Travis integration was added.


## Installation & Usage

    git clone https://github.com/richa-verma1001/JSWorkspace.gitt
    cd JSBootCamp
    npm install

    npm run buildDev        // for development
        // OR
    npm run buildProd

    npm start               // navigate to localhost:8080 for local dev

### For testing

    npm test                // runs test
    npm run coverage        // generates a coverage report
    npm test 'testname'     // seems to be running all tests that match keyword in filepath or filename, not test name
    npx eslint src/**       // lint files
    node src/js/problems/practice.js   // run single JS files

### Boilerplate Extensions
- Travis integration
- Unit test coverage
- Added support for ES6 globals (e.g. Set) in eslintrc.js file. Without this, use of global objects like Set will throw a lint error. [Docs reference here](https://eslint.org/docs/user-guide/configuring#specifying-parser-options)


### Run application

    npm run buildDev
    npm start

    npm run buildProd
    npm start

  Application hosted at http://localhost:8080/index.html

### Primary Content

View JS workspace exercises at src/js/
