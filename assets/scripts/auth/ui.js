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
    $('.change-pw-btn').removeClass('hidden');
    $('#sign-out-btn').removeClass('hidden');
    $('.change-pw-btn').show();
    $('#sign-out-btn').show();
    $('#sign-in-modal').modal('hide');
    success(data);
};

const failure = (error) => {
  $('#messages').text(error);
  console.error(error);
};

const signInFailure = (error) => {
  $('.modal-title').text('Sign-in -- email or password incorrect');
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signInFailure
};
