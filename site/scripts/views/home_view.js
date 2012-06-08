define(
	['jquery',
	'underscore',
	'backbone',
	'use!layoutmanager'],

	function($, _, Backbone) {
		var HomeView = Backbone.View.extend({
			template: "home",
			className: 'home',

			initialize: function() {
			},
			
			serialize: function() {
				return this.model.toJSON();
			}
		});

		return HomeView;
	}
);