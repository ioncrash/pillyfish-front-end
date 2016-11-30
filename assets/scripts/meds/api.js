'use strict';

const app = require('../app.js');
const store = require('../store.js');

let index = function(){
  return $.ajax({
    url: app.host + "meds", // "http://localhost:4741/meds"
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const create = function(data) {
  return $.ajax({
    url: app.host + 'meds',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const update = function(data) {
  return $.ajax({
    url: app.host + 'meds/' + currentGame.current.game.id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  });
};

module.exports = {
  index,
  create
};
