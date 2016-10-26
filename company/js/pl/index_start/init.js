define(function(require, exports, module) {
	
	var loginTemplate = require('./loginTemplate');

	exports.run = function() {
		loginTemplate.addHTML('prepend', 'body');
	};
});
