<?php
ob_start();      	//打开缓冲区
session_start();	//初始化会话数据
require("../config/config.php");

	$messageId = $_GET['id'];

	$sql = "DELETE FROM `message` WHERE messageId= $messageId";

    mysql_query($sql);
