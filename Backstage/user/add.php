<?php
	ob_start();      	//打开缓冲区
	session_start();	//初始化会话数据
	require("../config/config.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>后台管理</title>

	<link rel="stylesheet" type="text/css" href="../css/user.css">
</head>
<body>
	<section>
		 		 <div class="top">
            		<p>当前位置 :
            		<span class='topS'>用户管理 &gt;</span> <span class='topA'>添加用户</span>
            		</p>
       			</div>      
       
			<div class="content" >
			<form name="register" action="../sql/sql-user-add.php">
				<p>
					<span>昵称 : </span><input type='text' name='name'>
				</p>
				<p>
					<span>密码 : </span><input type='password' name='psd'>
				</p>
				<p>
					<span>性别 : </span><input type='text' name='sex'>
				</p>
				<p>
					<span>手机号 : </span><input type='tel' name='phone'>
				</p>
				<p>
					<span>邮箱 : </span><input type='mail' name='mail'>
				</p>
				<p>
					<input type='submit' value='添加' id="sub" name='sub'>
				</p>
			</form>
			</div>



	</section>
</body>
</html>