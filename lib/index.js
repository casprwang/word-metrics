'use strict';

var firstTouch = function firstTouch() {
  return 2;
};

var simplify = function simplify(text) {
  return text.toLowerCase().replace(/[^a-z\s\dA-Z]/g, '').replace(/\s+|\\t|\\n/g, ' ').trim();
};

var createMetrics = function createMetrics(text) {
  return {
    totalLetters: text.length,
    totalWords: text.split(' ').length,
    uniqueWords: Object.keys(text.split(' ').reduce(function (acc, e) {
      acc[e] = ~~acc[e]++;
      return acc;
    }, {})).length,
    longWords: text.split(' ').filter(function (e) {
      return e.length > 5;
    }).length,
    averageWordLength: text.split(' ').reduce(function (acc, e, _, arr) {
      acc += e.length / arr.length;
      return acc;
    }, 0),
    wordOccurrences: text.split(' ').reduce(function (acc, e) {
      acc[e] = ~~acc[e] + 1;
      return acc;
    }, {})
  };
};

module.exports = {
  simplify: simplify,
  createMetrics: createMetrics
};