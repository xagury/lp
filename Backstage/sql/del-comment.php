<?php
ob_start();      	//打开缓冲区
session_start();	//初始化会话数据
require("../config/config.php");

	$comment = $_GET['id'];

	$sql = "DELETE FROM `comment` WHERE commentId=$comment";

    mysql_query($sql);
