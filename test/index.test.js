var test = require('tape');
var lib = require('../');

test('version', function (t) {
  t.plan(1);
  lib(function (error, v) {
    console.log(v);
    t.pass(v.indexOf('head') !== -1);
    t.done();
  });
});