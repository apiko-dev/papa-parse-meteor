Package.describe({
  name: 'papa-parse',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('papa-parse.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('papa-parse');
  api.addFiles('papa-parse-tests.js');
});
