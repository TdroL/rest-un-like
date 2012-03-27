define([
	'jquery', 'underscore', 'backbone', 'mustache', 'url',
	'models/link',
	'collections/links',
	'text!templates/links/create.mustache',
	'text!templates/links/_form.mustache'
], function ($, _, Backbone, Mustache, url, LinkModel, LinksCollection, linksCreateTemplate, linksFormPartial) {

	var LinksCreate = Backbone.View.extend({
		el: '.container',
		link: new LinkModel,
		links: new LinksCollection,
		template: linksCreateTemplate,
		router: null,
		events: {
			'click a.btn-back': 'pageLinksIndex'
		},

		initialize: function (router) {
			this.router = router;
			var render = this.render

			$.when(this.link.fetch(), this.links.fetch()).done(function() {
				render();
			});
		},

		pageLinksIndex: function (e) {
			var router = this.router;

			require(['views/links/index'], function (LinksIndex) {
				new LinksIndex(router);

				//router.navigate('links');
			});

			e.preventDefault();
		},

		render: function () {
			var link = this.link.toJSON();
			var links_tree = this.links.toJSON();

			this.$el.html(Mustache.render(this.template, {
				link: link,
				links_tree: links_tree,
				url: {
					create: url.root('links/create'),
					cancel: url.root('links')
				}
			}, {
				form: linksFormPartial
			}));

			return this;
		}
	});

	return LinksCreate;
});
