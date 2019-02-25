<?php
ob_start();      	//打开缓冲区
session_start();	//初始化会话数据
require("../config/config.php");

$message = $_GET['id'];
$sql = "SELECT * FROM `message` WHERE messageId=$message";

$set = mysql_query($sql);
echo json_encode(mysql_fetch_array($set));