'use strict';

const indexMedsTemplate = require('../templates/index-meds.handlebars');
const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');

const changeMedSuccess = (data) => {
  console.log(data)
};

const onMedClick = function(e) {
  e.preventDefault();
  let data = getFormFields(this);
  data.med.id = $(this).data().medId;
  api.update(data).then(changeMedSuccess).catch(failure);
  $('.change-med-modal').modal('hide');
};

const indexMedsSuccess = (meds) => {
  $('.med-grid').html(indexMedsTemplate(meds));
  $('.change-med-form').on('submit', onMedClick);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  indexMedsSuccess,
  // clearBooks,
  failure,
};
