<?php
ob_start();      	//打开缓冲区
session_start();	//初始化会话数据
require("../config/config.php");


    $query_str = "http://localhost/parse_str.php?id=1&category=php&title=php-install";
    parse_str($query_str); /* 这种方式可以直接使用变量$id, $category, $title */
    parse_str($query_str, $query_arr);

    echo $category;

    $user = $_GET['id'];
    $sql = "SELECT * FROM `user` WHERE userId=$user";

    $set = mysql_query($sql);
    echo json_encode(mysql_fetch_array($set));