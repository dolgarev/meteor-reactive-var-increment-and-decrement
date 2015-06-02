Tinytest.add('reactive-var-inc-and-dec - increment', function(test) {
  var v = new ReactiveVar(0);
  v.inc(4)
  v.inc()
  test.equal(v.get(), 5, 'Expected values to be equal');
});

Tinytest.add('reactive-var-inc-and-dec - decrement', function(test) {
  var v = new ReactiveVar(10);
  v.dec(9)
  v.dec()
  test.equal(v.get(), 0, 'Expected values to be equal');
});
