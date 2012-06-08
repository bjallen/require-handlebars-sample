define(
	['jquery',
	'underscore',
	'backbone',
	'handlebars',
	'use!layoutmanager'],
	
	function($, _, Backbone, Handlebars) {
		Backbone.LayoutManager.configure({
			paths: {
				layout: "/scripts/templates/layouts/",
				template: "/scripts/templates/"
			},

			fetch: function(path) {
				path = path + ".tmpl";
				var done = this.async();
				require(['text!'+path], function(contents) {
					done(contents);
				});
			},

			render: function(template, context) {
				return Handlebars.compile(template)(context);
			}
		});
	}
);