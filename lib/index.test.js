'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('simplify test', function () {
  expect(_2.default.simplify('..,\n\t')).toBe('');
  expect(_2.default.simplify('a b c 1,2,3')).toBe('a b c 123');
  expect(_2.default.simplify('abc a,b,c')).toBe('abc abc');
  expect(_2.default.simplify('Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23')).toBe('helllo my this is a great day to say helllo helllo 2 3 4 23');
});

test('metrics test', function () {
  expect(_2.default.createMetrics('a b c').averageWordLength).toBe(1);
  expect(_2.default.createMetrics('a b c').totalWords).toBe(3);
});