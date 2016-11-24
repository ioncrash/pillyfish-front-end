'use strict';

const store = require('../store.js');

const success = (data) => {
  console.log(data);
};

const signInSuccess = (data) => {
    // save user token
    store.user = {
      user: data
    };
    // change dropdown buttons
    $('.sign-in-btn').hide();
    $('.sign-up-btn').hide();
    $('.change-pw-btn').removeClass('hidden');
    $('#sign-out-btn').removeClass('hidden');
    $('.change-pw-btn').show();
    $('#sign-out-btn').show();

    success(data);
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess
};
