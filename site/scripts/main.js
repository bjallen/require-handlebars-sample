require(
	{
		paths: {
			'jquery': 'vendor/wrappers/jquery',
			'underscore': 'vendor/wrappers/underscore',
			'backbone': 'vendor/wrappers/backbone',
			'app': 'application',
			'use': 'vendor/use',
			'handlebars': 'vendor/handlebars',
			'layoutmanager': 'vendor/backbone.layoutmanager',
			'text': 'vendor/text'
		},
		
		use: {
			'layoutmanager': {
				deps: ['backbone']
			}
		}
	}
);

require(
	['jquery',
	'bootstrap',
	'underscore',
	'config'],

	function($, Bootstrap, _) {
		$(function() {
			Bootstrap.initialize();
		});
	}
);