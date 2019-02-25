<?php
ob_start();      	//打开缓冲区
session_start();	//初始化会话数据
require("../config/config.php");

	$id = $_GET['id'];
	$complete = 'true';


    $sql = "update orderb set orderComplete='{$complete}' where orderId='{$id}'";
	mysql_query($sql);
