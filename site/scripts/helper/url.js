define(["require"], function(require) {
	var cssUrl = require.toUrl("./somefile.js");
	return {
		getUrl: function() {
			return cssUrl;
		}
	};
});