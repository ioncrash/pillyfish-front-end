'use strict';

const api = require('./api.js');

const indexMeds = () => {
  api.index();
  $('.meds-table').removeClass('hidden');
};

module.exports = {
  indexMeds,
};
