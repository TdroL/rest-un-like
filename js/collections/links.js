define([
	'jquery', 'underscore', 'backbone', 'url',
	'models/link'
], function ($, _, Backbone, url, linkModel){
	var LinksCollection = Backbone.Collection.extend({
		model: linkModel,
		url: url.rest('links'),
		collectionName: 'links'
	});

	return LinksCollection;
});
