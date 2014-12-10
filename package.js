Package.describe({
  name: 'papa-parse',
  summary: 'PapaParse package for meteor',
  version: '0.0.1',
  git: 'https://github.com/JSSolutions/papa-parse-meteor.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('papa-parse.js');
  api.export('Papa', ['server','client']);
});
