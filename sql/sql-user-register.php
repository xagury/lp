<?php
	ob_start();      	//打开缓冲区
	session_start();	//初始化会话数据
	require("../config/config.php");
			$yname = $_REQUEST["name"];
			$ypw = $_REQUEST["psd"];
			$ysex = $_REQUEST["sex"];
			$yphone  = $_REQUEST["phone"];
			$ymail = $_REQUEST["mail"];
			$ymoney = 1000;

			
			$sql = "INSERT into user (userName,userPassword,userSex,userPhone,userMail,userMoney) values('{$yname}','{$ypw}','{$ysex}','{$yphone}','{$ymail}','{$ymoney}')";
			$result = mysql_query($sql);

			if($result)
			{
			header("location:../.html");
			}else
			{
			echo "error";
			}
  $res = mysql_query($sql);
   if($res){
       echo "插入成功";
   }
    else{
     echo mysql_error();
    }
?>
