'use strict';

const app = require('../app.js');
const store = require('../store.js');

const signUp = function(data) {
return $.ajax({
  url: app.host + 'sign-up',
  method: 'POST',
  data,

});
};

const signIn = function(data) {
  return $.ajax({
    url: app.host + 'sign-in',
    method: 'POST',
    data,
  });
};

const changePassword = function(data) {
    return $.ajax({
      url: app.host + 'change-password/' + store.user.id,
      method: 'PATCH',
      data,
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
    });
  };

const signOut = function() {
  return $.ajax({
  url: app.host + 'sign-out/' + store.user.id,
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' + store.user.token,
  },
});
};

module.exports = {
signUp,
signIn,
changePassword,
signOut
};
