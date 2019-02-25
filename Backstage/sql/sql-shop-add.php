<?php
	ob_start();      	//打开缓冲区
	session_start();	//初始化会话数据
	require("../config/config.php");

			$yname = $_REQUEST["name"];
			$ydesc = $_REQUEST["desc"];
			$yurl = $_REQUEST["url"];
			$yprice  = $_REQUEST["price"];


			
			$sql = "INSERT into shop (shopName,shopDesc,shopUrl,shopPrice) values('{$yname}','{$ydesc}','{$yurl}','{$yprice}')";
			$result = mysql_query($sql);
			if($result)
			{
				echo"alert('添加成功')";

			}else
			{
				echo "error";
				echo mysql_error();
			}
		header("location:../shop/all.php");
?>
