'use strict';

const indexMedsTemplate = require('../templates/index-meds.handlebars');

const changeMedSuccess = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};


const indexMedsSuccess = (meds) => {
  $('.med-grid').html(indexMedsTemplate(meds));
};

const deleteMedSuccess = () => {
  console.log('whee!');
};


module.exports = {
  indexMedsSuccess,
  changeMedSuccess,
  deleteMedSuccess,
  failure,
};
