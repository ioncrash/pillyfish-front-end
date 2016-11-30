'use strict';

const indexMedsTemplate = require('../templates/index-meds.handlebars');
const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const medEvents = require('./events.js');

const changeMedSuccess = (data) => {
  console.log(data);
};

// const onMedClick = function(e) {
//   e.preventDefault();
//   let data = getFormFields(this);
//   data.med.id = $(this).data().medId;
//   api.update(data).then(changeMedSuccess).catch(failure);
//   $('#create-med-modal').modal('hide');
//   medEvents.indexMeds(e);
// };

const indexMedsSuccess = (meds) => {
  $('.med-grid').html(indexMedsTemplate(meds));
  debugger;
  $('.change-med-form').on('submit', medEvents.onMedClick);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  indexMedsSuccess,
  // clearBooks,
  failure,
};
