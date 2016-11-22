'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

module.exports = {
  failure,
  success,
};
