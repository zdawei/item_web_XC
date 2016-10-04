/**
* @fileoverview 用于创建html元素，并插入相应的DOM文档
* @author dawei
* @history 2016/10/3
*/

define(function(require, exports, module) {

	var $ = require('jquery');

	/**
	* 创建同层元素
	* @param {String} method jquery方法,用来选择jquery的dom操作方法
	* @param {String} css jquery选择器,用来获取插入的元素
	* @param {Object} opt 选择创建元素，和元素的属性(其中属性用数组来表示)
	*/
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

	/**
	* 创建嵌套元素
	* @param {String} method jquery方法,用来选择jquery的dom操作方法
	* @param {String} css jquery选择器,用来获取插入的元素
	* @param {Object} opt 选择创建元素，和元素的属性(其中属性用数组来表示)
	*/
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