'use strict';

const app = require('../app.js');

let index = function(){
  return $.ajax({
    url: app.host + "meds", // "http://localhost:4741/meds"
    method: 'GET',
    // dataType: 'json'
  });
};

module.exports = {
  index,
};
