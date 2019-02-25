<?php
ob_start();      	//打开缓冲区
session_start();	//初始化会话数据
require("../config/config.php");

	$userId = $_GET['id'];

	$sql = "DELETE FROM `user` WHERE userId=$userId";

    mysql_query($sql);
