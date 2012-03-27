define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone){

	var oldViewInitialize = Backbone.View.prototype.initialize;
	Backbone.View.prototype.initialize = function (router) {
		this.router = router;
	};

	var oldModelFetch = Backbone.Model.prototype.fetch;
	Backbone.Model.prototype.fetch = function (options) {
		var defer = $.Deferred();
		options = options ? _.clone(options) : {};
		var model = this;
		var modelName = this.modelName;
		var success = options.success;
		options.success = function (resp, status, xhr) {
			if (response.status == 'success') {
				defer.resolve(response.data[modelName], status, xhr);
			} else {
				defer.reject(response, status, xhr);
			}
		};

		options.error = Backbone.wrapError(options.error, model, options);

		defer.done(function (response, status, xhr) {
			if (!model.set(model.parse(resp, xhr), options)) return false;
			if (success) success(model, resp);
		});

		defer.fail(function (response, status, xhr) {
			if (response.status == 'fail') {
				options.error(model, response.data);
			} else if (response.status == 'error') {
				model.trigger('server-error', response.message, response.data || {});
			}
		});

		(this.sync || Backbone.sync).call(this, 'read', this, options);

		return defer;
	};

	var oldCollectionFetch = Backbone.Collection.prototype.fetch;
	Backbone.Collection.prototype.fetch = function (options) {
		var defer = $.Deferred();
		options = options ? _.clone(options) : {};
		if (options.parse === undefined) options.parse = true;
		var collection = this;
		var success = options.success;

		options.success = function (response, status, xhr) {
			if (response.status == 'success') {
				defer.resolve(response.data[collection.collectionName], status, xhr);
			} else {
				defer.reject(response.data, status, xhr);
			}
		};

		options.error = Backbone.wrapError(options.error, collection, options);

		defer.done(function (response, status, xhr) {
			collection[options.add ? 'add' : 'reset'](collection.parse(response, xhr), options);
			if (success) success(collection, response);
		});

		defer.fail(function (response, status, xhr) {
			options.error(collection, response);
		});

		(this.sync || Backbone.sync).call(this, 'read', this, options);

		return defer;
	};

	return Backbone;
});
