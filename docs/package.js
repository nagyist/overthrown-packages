Package.describe({
  name: 'danimal:overthrown-docs',
  version: '0.0.2',
  summary: 'Docs for OverThrown. http://overthrown.io',
  git: 'https://github.com/dan335/overthrown-packages',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.3.1');
  api.use([
    'ecmascript',
    'less',
    'templating',
    'markdown'
  ]);
  //api.addFiles('docs.html');
  api.mainModule('docs.js', 'client');
});
