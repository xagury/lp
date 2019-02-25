<?php
ob_start();      	//打开缓冲区
session_start();	//初始化会话数据
require("../config/config.php");



    $shop = $_GET['id'];
    $sql = "SELECT * FROM `shop` WHERE shopId=$shop";

    $set = mysql_query($sql);
    echo json_encode(mysql_fetch_array($set));