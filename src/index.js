import logMessage from './js/logger'
import './css/style.css'
import './js/problems/arrays.js';
import './js/problems/async.js';
import './js/problems/calc.js';
//import './js/practice.js';   // Include this file to debug file in browser.
                               // practice.js file will throw a lot of lint errors
                               // Any JS that is not compiled via index.js is currently
                               // not linted
//import './js/warmup/sockMerchant/main.js';
import './js/arrays/newYearChaos/main.js';


// Log message to console
logMessage('Its finished!!')

if (module.hot)       // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef
