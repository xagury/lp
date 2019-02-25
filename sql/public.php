<?php
	//设置字符集
	header("content-type:text/html;charset=utf-8");
	//操作数据库
	//1.连接数据库服务器
	$db = mysql_connect('localhost','root','123456');
	//2. 选择数据库
	mysql_select_db('lp',$db);
	//3. 设置数据库的字符集
	mysql_query('set names utf-8');