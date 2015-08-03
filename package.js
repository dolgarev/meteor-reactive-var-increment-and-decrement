Package.describe({
  name: 'liberation:reactive-var-inc-and-dec',
  summary: 'Adds methods "inc" and "dec" to ReactiveVar',
  version: '1.0.2',
  git: 'https://github.com/dolgarev/meteor-reactive-var-increment-and-decrement.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('reactive-var');
  api.addFiles('inc_and_dec.js', 'client');
});

Package.on_test(function(api) {
  api.use(['liberation:reactive-var-inc-and-dec', 'tinytest', 'reactive-var'], 'client');
  api.add_files('test.js', 'client');
});