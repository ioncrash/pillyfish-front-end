'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');

const onMedClick = function(e) {
  e.preventDefault();
  console.log('poop');
};

const indexMeds = function(e) {
  e.preventDefault();
  api.index()
  .then(ui.indexMedsSuccess)
    .catch(ui.failure);
  // $('.med-row').on('click', onMedClick);
};

const createMed = function(e) {
  e.preventDefault();
  let data = getFormFields(this);
  api.create(data)
  .then(ui.createMedSuccess)
  .catch(ui.failure);
  $('#create-med-modal').modal('hide');
  indexMeds(e);
};

const addMedHandlers = () => {
  $('#show-meds-btn').on('click', indexMeds);
  $('.create-med-form').on('submit', createMed);
};

module.exports = {
  addMedHandlers,
  onMedClick,
  // indexMeds,
};
