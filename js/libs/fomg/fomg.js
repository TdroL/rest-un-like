// Fomg.js

(function () {
	var root = this;

	var previousFomg = root.Fomg;

	var Fomg = {};

	if (typeof define === 'function' && define.amd) {
		define('fomg', function() {
			return Fomg;
		});
	}

	Fomg.noConflict = function() {
		root.Fomg = previousFomg;
		return this;
	};

	root.Fomg = Fomg;
}).call(this);
