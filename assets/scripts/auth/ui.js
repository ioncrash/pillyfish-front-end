'use strict';

const store = require('../store.js');

const success = (data) => {
  console.log(data);
};

const signInSuccess = (data) => {
    // save user token
    store.user = data.user;
    // change dropdown buttons
    $('.sign-in-btn').hide();
    $('.sign-up-btn').hide();
    $('.auth-dropdown-toggle').text(store.user.email);
    $('.change-pw-btn').removeClass('hidden');
    $('#sign-out-btn').removeClass('hidden');
    $('.create-med-btn').removeClass('hidden');
    $('#header').removeClass('hidden');
    $('.change-pw-btn').show();
    $('#sign-out-btn').show();
    $('#sign-in-modal').modal('hide');
    $('#sign-in-modal input').val('');
    success(data);
};

const failure = (error) => {
  $('#messages').text(error);
  console.error(error);
};

const signInFailure = (error) => {
  $('.sign-in-modal-title').text('Sign-in -- email or password incorrect');
  console.error(error);
};

const changePasswordSuccess = () => {
  $('#change-password-modal').modal('hide');
  $('#change-password-modal input').val('');
};

const changePasswordFailure = (error) => {
  $('.change-password-modal-title').text('Change password -- Old password incorrect');
  console.error(error);
};

const signOutSuccess = (data) => {
  $('.change-pw-btn').hide();
  $('#sign-out-btn').hide();
  $('.create-med-btn').addClass('hidden');
  $('.sign-in-btn').show();
  $('.sign-up-btn').show();
  $('.auth-dropdown-toggle').text("Sign up/Sign in");
  $('#header').addClass('hidden');
  success(data);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
};
