define(function(require, exports, module) {

	var $ = require('jquery');

	exports.creatElement = function (method, css, opt) {
		var str = '';
		for(var key in opt) {
			var len = opt[key].length;
			var obj = opt[key];
			for(var i = 0; i < len; i++) {
				str += '<' + key + ' ';
				for(var k in obj[i]) {
					if(k == 'nodeValue') {continue;}
					str += k + '="' + obj[i][k] + '" ';
				}
				str += 'nodeValue' in obj[i] ? '>' + obj[i].nodeValue : '>';
				str += '</' + key + '>';
			}
		}
		$(css)[method](str);
	};

	exports.createInsertElement = function(method, css, opt) {
		var str = '';
		var strEnd = '';
		for(var key in opt){
			var len = opt[key].length;
			var obj = opt[key];
			for(var i = 0; i < len; i++) {
				str += '<' + key + ' ';
				for(var k in obj[i]) {
					if(k == 'nodeValue') {continue;}
					str += k + '="' + obj[i][k] + '" ';
				}
				str += 'nodeValue' in obj[i] ? '>' + obj[i].nodeValue : '>';
				if(i < len - 1) {
					str += '</' + key + '>';		
				}
			}
			strEnd = '</' + key + '>' + strEnd;
		}
		$(css)[method](str + strEnd);
	};
});