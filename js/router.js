
define(['jquery', 'underscore', 'backbone', 'url'], function($, _, Backbone, url) {
  var AppRouter, router;
  router = null;
  AppRouter = Backbone.Router.extend({
    routes: {
      '': 'linksIndex',
      'links': 'linksIndex',
      'links/create': 'linksCreate'
    },
    linksIndex: function() {
      return require(['views/links/index'], function(LinksIndex) {
        return new LinksIndex(router);
      });
    },
    linksCreate: function() {
      return require(['views/links/create'], function(LinksCreate) {
        return new LinksCreate(router);
      });
    },
    defaultAction: function(actions) {
      return this.linksIndex();
    }
  });
  return {
    initialize: function() {
      router = new AppRouter;
      return Backbone.history.start({
        pushState: true,
        root: url.root()
      });
    }
  };
});
