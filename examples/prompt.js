'use strict';

var states = require('./states');
var Prompt = require('..');
var prompt = new Prompt({
  name: 'from',
  message: 'Select a state to travel from',
  source: searchStates
});

prompt.run()
  .then(function(answer) {
    console.log(answer);
  });

function searchStates(answers, input) {
  return new Promise(function(resolve) {
    resolve(states.filter(filter(input)));
  });
}

function filter(input) {
  return function(state) {
    return new RegExp(input, 'i').exec(state) !== null;
  };
}
