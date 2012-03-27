define([
	'jquery', 'underscore', 'backbone', 'mustache', 'url',
	'collections/links',
	'text!templates/links/index.mustache'
], function ($, _, Backbone, Mustache, url, LinksCollection, linksIndexTemplate) {

	var LinksIndex = Backbone.View.extend({
		el: '.container',
		links: new LinksCollection,
		template: linksIndexTemplate,
		router: null,
		events: {
			'click a.btn-create': 'pageLinksCreate'
		},

		initialize: function (router) {
			this.router = router;

			this.links.on('reset', this.render, this);
			this.links.fetch();
		},

		pageLinksCreate: function (e) {
			var router = this.router;

			require(['views/links/create'], function (LinksCreate) {
				new LinksCreate(router);

				//router.navigate('links/create');
			});

			e.preventDefault();
		},

		render: function () {
			var links = this.links.toJSON();

			_.each(links, function (link) {
				link.url = {
					update: url.root('links/'+link.id+'/update'),
					destroy: url.root('links/'+link.id+'/delete')
				};
			});

			this.$el.html(Mustache.render(this.template, {
				url: {
					create: url.root('links/create')
				},
				links: links
			}));

			return this;
		}
	});

	return LinksIndex;
});
