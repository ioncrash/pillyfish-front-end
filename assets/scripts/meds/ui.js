'use strict';

const indexMedsTemplate = require('../templates/index-meds.handlebars');

const indexMedsSuccess = (meds) => {
  $('.med-grid').html(indexMedsTemplate(meds));
};

// const clearBooks = () => {
//
// };

const failure = (error) => {
  console.error(error);
};

module.exports = {
  indexMedsSuccess,
  // clearBooks,
  failure,
};
