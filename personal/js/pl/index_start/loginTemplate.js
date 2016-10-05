define(function(require, exports, module) {
	var $ = require('jq');
	require('bs');

	var registerTip = 
	'<!-- 模态框（Modal） -->'+
	'<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
	'	<div class="modal-dialog">'+
	'		<div class="modal-content">'+
	'			<div class="modal-header">'+
	'				<button type="button" class="close" data-dismiss="modal" '+
	'						aria-hidden="true">×'+
	'				</button>'+
	'				<h4 class="modal-title" id="myModalLabel">'+
	'					注册信息'+
	'				</h4>'+
	'			</div>'+
	'			<div class="modal-body">'+
	'				恭喜注册成功，按下 ESC 按钮退出，请登录！'+
	'			</div>'+
	'			<div class="modal-footer">'+
	'				<button type="button" class="btn btn-default" '+
	'						data-dismiss="modal">关闭'+
	'				</button>'+
	'			</div>'+
	'		</div><!-- /.modal-content -->'+
	'	</div><!-- /.modal-dialog -->'+
	'</div><!-- /.modal -->';

	var strTemplate = 	
	'<div class="container login">'+
		'<div class="row login">'+
			'<div class="login-main col-md-10 col-sm-10 col-xs-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-1">'+
				'<img src="./img/logo_index.png" class="logo_index">'+
				'<span class="index-motto">量力而行，则不竭；量才而用，则不误！</span>'+
				'<div class="login-center">'+
					'<ul class="nav nav-tabs" id="navLogin">'+
					'  <li class="active"><a id="persLogin" href="javascript:void(0);">个人登录</a></li>'+
					'  <li><a href="javascript:void(0);">个人注册</a></li>'+
					'</ul>'+
					'<form class="form-horizontal" role="form" id="loginPerson">'+
						'<div class="form-group">'+
							'<input type="text" class="form-control input-lg" id="account" placeholder="请输入您的手机号/邮箱">'+
						'</div>'+
						'<div class="form-group">'+
							'<input type="text" class="form-control input-lg" id="password" placeholder="请输入您的密码">'+
						'</div>'+
						'<div class="form-group">'+
						  '<button id="submit" type="submit" class="btn btn-success input-lg">登录</button>'+
						'</div>'+
						'<div class="form-group">'+
							'<div class="checkbox login-auto">'+
						    	'<label>'+
									'<input type="checkbox">下次自动登录'+
						    	'</label>'+
							'</div>'+
					  		'<a href="javascript:void(0);">忘记密码</a>'+
						'</div>'+
					'</form>'+
					'<form class="form-horizontal" role="form" id="registerPerson" style="display:none;">'+
						'<div class="form-group">'+
							'<input type="text" class="form-control input-lg" id="account" placeholder="请输入您的手机号/邮箱">'+
						'</div>'+
						'<div class="form-group">'+
							'<input type="text" class="form-control input-lg" id="password" placeholder="请输入您的密码">'+
						'</div>'+
						'<div class="form-group">'+
						  '<button id="register" type="submit" class="btn btn-success input-lg">注册账户</button>'+
						'</div>'+
					'</form>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>' + registerTip;

	var addNavEvt = function() {
		$('#navLogin').on('click', function(evt) {
			if($(evt.target).parent().hasClass('active')) {return ;}
			switch($(this).children().toggleClass('active').filter('.active').text()) {
				case '个人登录' : $('#loginPerson').css({'display' : ''}).siblings('.form-horizontal').css({'display' : 'none'});break;
				case '个人注册' : $('#registerPerson').css({'display' : ''}).siblings('.form-horizontal').css({'display' : 'none'});break;
			}
		});
	};

	var addSubmitEvt = function() {
		$('#submit').on('click', function(evt){
			evt.preventDefault();
			window.open('index.html', '_self');
		});
		$('#register').on('click', function(evt) {
			evt.preventDefault();
			$('#myModal').modal();
			$('#persLogin').click();
		});
	};

	exports.addHTML = function(method, css) {
		$(css)[method](strTemplate);
		addNavEvt();
		addSubmitEvt();
	};
});