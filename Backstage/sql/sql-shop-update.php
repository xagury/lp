<?php
	ob_start();      	//打开缓冲区
	session_start();	//初始化会话数据
	require("../config/config.php");
			$yid = $_REQUEST["id"];
			$yname = $_REQUEST["name"];
			$ydesc = $_REQUEST["desc"];
			$yurl = $_REQUEST["url"];
			$yprice  = $_REQUEST["price"];


			$sql = "update shop set shopId='{$yid}',shopName='{$yname}',shopDesc='{$ydesc}',shopUrl='{$yurl}', shopPrice='{$yprice}'where shopId='{$yid}' ";

			$result = mysql_query($sql);
			if($result)
			{
                header("location:../shop/all.php");

			}
			
			else
			{
				echo "error";
				echo mysql_error();
			}
	
?>
