<?php
ob_start();      	//打开缓冲区
session_start();	//初始化会话数据
require("../config/config.php");

	$shopId = $_GET['id'];

	$sql = "DELETE FROM `shop` WHERE shopId=$shopId";

    mysql_query($sql);
