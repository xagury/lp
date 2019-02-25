<?php


ob_start();      	//打开缓冲区
session_start();	//初始化会话数据
require("../config/config.php");

//4. 编写sql语句
$sql = "SELECT * FROM `shop` WHERE 1";
//5. 执行sql语句
$set = mysql_query($sql);
//mysql_fetch_array()
while($arr = mysql_fetch_array($set)){
    $list[] = $arr; // [[],[],[],[]]
}
echo json_encode($list);

