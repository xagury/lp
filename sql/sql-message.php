<?php

	ob_start();      	//打开缓冲区
	session_start();	//初始化会话数据
	require("../config/config.php");
			$yname = $_REQUEST["name"];
			$ytitle = $_REQUEST["title"];
			$ycontent = $_REQUEST["content"];
			$yfile  = $_REQUEST["file"];
            date_default_timezone_set('PRC');
            $ytime = date("Y-m-d H:i:s");

            $name = $_COOKIE['name'];

            $selectSel = "select * from user where userName='$name' ";
            $resuleSet = mysql_query($selectSel);
            $person = mysql_fetch_array($resuleSet);
            $yid=   $person['userId'];
            echo $name;
            echo $yid;

$sql = "INSERT into message (messageTitle,messageCon,messageUrl,messageTime,userId) values('{$ytitle}','{$ycontent}','images/{$yfile}','{$ytime}','{$yid}')";
			$result = mysql_query($sql);

			if($result)
			{
			header("location:../message.html");
			}
			else
			{
			echo "error";
			}

