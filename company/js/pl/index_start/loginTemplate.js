define(function(require, exports, module) {
	var $ = require('jq');
	require('bs');

//	var registerTip = 
//	'<!-- 模态框（Modal） -->'+
//	'<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
//	'	<div class="modal-dialog">'+
//	'		<div class="modal-content">'+
//	'			<div class="modal-header">'+
//	'				<button type="button" class="close" data-dismiss="modal" '+
//	'						aria-hidden="true">×'+
//	'				</button>'+
//	'				<h4 class="modal-title" id="myModalLabel">'+
//	'					注册信息'+
//	'				</h4>'+
//	'			</div>'+
//	'			<div class="modal-body">'+
//	'				恭喜注册成功，按下 ESC 按钮退出，请登录！'+
//	'			</div>'+
//	'			<div class="modal-footer">'+
//	'				<button type="button" class="btn btn-default" '+
//	'						data-dismiss="modal">关闭'+
//	'				</button>'+
//	'			</div>'+
//	'		</div><!-- /.modal-content -->'+
//	'	</div><!-- /.modal-dialog -->'+
//	'</div><!-- /.modal -->';
 var strTemplate=
'<img class="com_login" src="img/index_start.jpg" width="100%" height="100%" />';
 
	
	
//	var addNavEvt = function() {
//		$('#navLogin').on('click', function(evt) {
//			if($(evt.target).parent().hasClass('active')) {return ;}
//			switch($(this).children().toggleClass('active').filter('.active').text()) {
//				case '个人登录' : $('#loginPerson').css({'display' : ''}).siblings('.form-horizontal').css({'display' : 'none'});break;
//				case '个人注册' : $('#registerPerson').css({'display' : ''}).siblings('.form-horizontal').css({'display' : 'none'});break;
//			}
//		});
//	};

//	var addSubmitEvt = function() {
//		$('#submit').on('click', function(evt){
//			evt.preventDefault();
//			window.open('index.html', '_self');
//		});
//		$('#register').on('click', function(evt) {
//			evt.preventDefault();
//			$('#myModal').modal();
//			$('#persLogin').click();
//		});
//	};
	var companyLogin = function(){
		$('.com_login').on('click', function(evt){
			window.open('index.html');
		});
	};

	exports.addHTML = function(method, css) {
		$(css)[method](strTemplate);
		companyLogin();
	};
});