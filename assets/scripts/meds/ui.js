'use strict';

const indexMedsTemplate = require('../templates/index-meds.handlebars');

const onMedClick = function(e) {
  e.preventDefault();
  console.log('click!');
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
