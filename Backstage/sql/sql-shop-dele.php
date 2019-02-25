<?php
	ob_start();      	//打开缓冲区
	session_start();	//初始化会话数据
	require("../config/config.php");
			$yid = $_REQUEST["id"];
			$sql = "delete from shop where shopId='{$yid}'";
			$result = mysql_query($sql);
			if($result)
			{
                header("location:../shop/all.php");
			
			}
			else
			{
			echo "删除失败！";
			echo mysql_error();
			}

?>