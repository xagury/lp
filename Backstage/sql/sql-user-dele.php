<?php
	ob_start();      	//打开缓冲区
	session_start();	//初始化会话数据
	require("../config/config.php");
			$yid = $_REQUEST["id"];
			$sql = "delete from user where userId='{$yid}'";
			$result = mysql_query($sql);
			if($result)
			{
				echo"<script>alert('删除成功')</script>";
			
			}
			else
			{
			echo "删除失败！";
			echo mysql_error();
			}
header("location:../user/all.php");
			?>