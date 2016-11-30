'use strict';

const indexMedsTemplate = require('../templates/index-meds.handlebars');

const onMedClick = function(e) {
  e.preventDefault();
  console.log('poop');
};

const indexMedsSuccess = (meds) => {
  $('.med-grid').html(indexMedsTemplate(meds));
  $('.med-row').on('click', onMedClick);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  indexMedsSuccess,
  // clearBooks,
  failure,
};
