'use strict';

const indexMedsTemplate = require('../templates/index-meds.handlebars');

const indexMedsSuccess = (meds) => {
  $('.meds-table').html(indexMedsTemplate(meds));
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
