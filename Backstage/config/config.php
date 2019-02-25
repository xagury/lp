<?php
		error_reporting(E_ALL & ~E_DEPRECATED);
        $serverLink = mysql_connect('localhost','root','123456') or die("连接失败：".mysql_error());    //本机,账户,密码
        mysql_query("set names 'utf8'");
		mysql_select_db("lp"); //数据库名称

?>
