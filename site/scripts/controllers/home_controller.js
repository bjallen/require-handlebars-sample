define(['zepto', 'underscore', 'backbone'], function($, _, Backbone) {
	var HomeController = Backbone.View.extend({
		tagName: "div",
		className: "home-view",
		render: function() {
			('#content').html('<p>asdf</p>');
		}
	});
	
	return HomeController;
});