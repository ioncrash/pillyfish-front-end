'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');

const indexMeds = function() {
  api.index()
  .then(ui.indexMedsSuccess)
    .catch(ui.failure);
};

const changeMed = function(e) {
  e.preventDefault();
  let data = getFormFields(event.target);
  data.med.id = $(event.target).data().medId;
  api.update(data)
    .then(ui.changeMedSuccess)
    .then(indexMeds)
    .catch(ui.failure);
  $('.change-med-modal').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
};

const createMed = function(e) {
  e.preventDefault();
  let data = getFormFields(this);
  api.create(data)
  .then(ui.createMedSuccess).then( () => {
    indexMeds(e);})
  .catch(ui.failure);
  $('#create-med-modal').modal('hide');
};

const deleteMed = function(e) {
  e.preventDefault();
  let id = $(this).data().medId;
  api.deleteMed(id)
    .then(ui.deleteMedSuccess)
    .then(indexMeds)
    .catch(ui.failure);
  $('.change-med-modal').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
};

const addMedHandlers = () => {
  $('.create-med-form').on('submit', createMed);
  $('.med-grid').on('submit', 'form', changeMed);
  $('.med-grid').on('click', '.delete-btn', deleteMed);
};

module.exports = {
  addMedHandlers,
  indexMeds,
};
