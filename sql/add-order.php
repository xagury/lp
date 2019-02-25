<?php

ob_start();      	//打开缓冲区
session_start();	//初始化会话数据
require("../config/config.php");

$total = $_POST['total'];
$complete = 'false';
$yname = $_COOKIE['name'];
date_default_timezone_set('PRC');
$ytime = date("Y-m-d H:i:s");

$selectSel = "select * from user where userName='$yname' ";
$resuleSet = mysql_query($selectSel);
$person = mysql_fetch_array($resuleSet);
$yid=   $person['userId'];


$sql = "INSERT into orderb (orderMoney,orderComplete,orderTime,userId) values('{$total}','{$complete}','{$ytime}','{$yid}')";
$result = mysql_query($sql);

if($result)
{
    header("location:../message.html");
}
else
{
    echo "error";
    echo mysql_error();
}

