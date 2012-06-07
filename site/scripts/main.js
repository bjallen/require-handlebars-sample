require({
	paths: {
		'zepto': 'vendor/wrappers/zepto',
		'underscore': 'vendor/wrappers/underscore',
		'backbone': 'vendor/wrappers/backbone',
		'app': 'application'
	}
});

require(['zepto', 'bootstrap', 'underscore'], function($, Bootstrap, _) {
	$(function() {
		Bootstrap.initialize();
	});
});