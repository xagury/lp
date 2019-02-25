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
    <script src="../js/jquery-1.11.0.js"></script>
    <script src="../js/jquery-1.8.2.min.js"></script>
    <script src="../js/ajax.js"></script>
    <script src="../js/ajaxOOP.js"></script>
    <script type="text/javascript" src='../js/myApi.js'></script>
    <script type="text/javascript" src='../js/backjs.js'></script>
</head>
<body>
	<section>
		<div class="top">
            		<p>当前位置 :
            		<span class='topS'>用户管理 &gt;</span> <span class='topA'>删除用户</span>
            		</p>
       			</div>   
			<div class="content">
				<form name="register" action="../sql/sql-user-dele.php">
					<p>
						<span>用户ID : </span>
                        <input type='text' name='id' id="id" >
                        <input type="button" id="btn" value="查找">
					</p>
                    <div id="delContent">

                    </div>
					<p>
						<input type='submit' onclick="del()" value='删除' id='sub'>
					</p>
				</form>
			</div>



	</section>
</body>

<script type="text/javascript">

    delUser();



</script>
</html>