'use strict';

// const showBooksTemplate = require('../templates/book-listing.handlebars');

const indexMedsSuccess = (meds) => {
  // $('#content').html(showBooksTemplate(books));
  console.log('in indexMedsSuccess');
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
