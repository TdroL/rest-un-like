
require.config({
  baseUrl: '/sites/rest-un-like/js',
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    mustache: 'libs/mustache/mustache',
    url: 'libs/url',
    text: 'libs/require/text',
    order: 'libs/require/order',
    templates: '../templates'
  }
});

define(['backbone-shim', 'router'], function(Backbone, Router) {
  return Router.initialize();
});
