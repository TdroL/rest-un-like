define ['jquery', 'underscore', 'backbone', 'url'], ($, _, Backbone, url) ->
	router = null
	AppRouter = Backbone.Router.extend
		routes:
			'': 'linksIndex'
			'links': 'linksIndex'
			'links/create': 'linksCreate'
		linksIndex: () ->
			require ['views/links/index'], (LinksIndex) ->
				new LinksIndex(router)

		linksCreate: () ->
			require ['views/links/create'], (LinksCreate) ->
				new LinksCreate(router)

		defaultAction: (actions) ->
			this.linksIndex()

	initialize: () ->
		router = new AppRouter

		Backbone.history.start
			pushState: true
			root: url.root()