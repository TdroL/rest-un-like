define([
	'underscore', 'backbone', 'url'
], function (_, Backbone, url) {
	var LinkModel = Backbone.Model.extend({
		defaults: {
			id: 0,
			name: null,
			title: null,
			order: 0,
			desc: null,
			tools: null,
			parent: null,
			links: null,
		},
		url: function() {
			return url.rest('links/'+this.id);
		},
		modelName: 'link',
		initialize: function () {
		}
	});

	return LinkModel;
});
