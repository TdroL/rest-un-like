({
	baseUrl: '.',
	name: 'libs/require/almond.js',
	include: 'main',
	out: 'main.package.js',
	wrap: true,
	paths: {
		jquery: 'libs/jquery/jquery-min',
		underscore: 'libs/underscore/underscore-min',
		backbone: 'libs/backbone/backbone-min',
		mustache: 'libs/mustache/mustache',
		url: 'libs/url',

		// Require.js plugins
		text: 'libs/require/text',
		order: 'libs/require/order',

		// templates
		templates: '../templates'
	}
})