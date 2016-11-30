'use strict';

const indexMedsTemplate = require('../templates/index-meds.handlebars');
const getFormFields = require('../../../lib/get-form-fields');

const onMedClick = function(e) {
  e.preventDefault();
  let data = getFormFields(this);
  debugger;
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
