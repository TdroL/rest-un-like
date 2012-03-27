define(function () {
	var root = '/sites/rest-un-like/',
	    rest = '/sites/tdrol.just-play.pl/rest/';

	return {
		root: function (path) {
			path = (path || '').replace(/^\/+/, '');
			return root + path;
		},
		rest: function (path) {
			path = (path || '').replace(/^\/+/, '');
			return rest + path;
		}
	};
});
