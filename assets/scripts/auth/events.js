'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');
const meds = require('../meds/events.js');

const onSignUp = function(e){
 e.preventDefault();
 let data = getFormFields(this);
 api.signUp(data).then(ui.success).catch(ui.failure);
 $('#sign-up-modal').modal('hide');
};

const onSignIn = function(e){
  e.preventDefault();
  let data = getFormFields(this);
  api.signIn(data).then(ui.signInSuccess).catch(ui.signInFailure);
  // meds.indexMeds();
};

const onChangePassword = function(e){
e.preventDefault();
  let data = getFormFields(this);
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure);
};

const onSignOut = function(e){
  e.preventDefault();
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure);
};

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', onChangePassword);
  $('#sign-out-btn').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
