'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const indexMeds = () => {
  api.index()
  .then(ui.indexMedsSuccess)
    .catch(ui.failure);
  $('.meds-table').removeClass('hidden');
};

module.exports = {
  indexMeds,
};
