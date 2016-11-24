'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');

const onSignUp = function(e){
 e.preventDefault();
 let data = getFormFields(this);
 api.signUp(data).then(ui.success).catch(ui.failure);
 $('#sign-up-modal').modal('hide');
};

const onSignIn = function(e){
  e.preventDefault();
  let data = getFormFields(this);
  api.signIn(data).then(ui.signInSuccess).catch(ui.failure);
  $('#sign-in-modal').modal('hide');
};

// const onChangePassword = function(e){
// e.preventDefault();
//   let data = getFormFields(this);
//   // api.changePassword(data)
//   //   .then(ui.success)
//   //   .catch(ui.failure);
//   $('#change-password-modal').modal('hide');
// };
//
// const onSignOut = function(e){
//   e.preventDefault();
//   // api.signOutX()
//   //   .then(ui.signOutXSuccess)
//   //   .catch(ui.failure);
//   $('.change-pw-btn').hide();
//   $('#sign-out-button').hide();
// };

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  // $('.change-password-form').on('submit', onChangePassword);
  // $('#sign-out-button').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
