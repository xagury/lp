<?php
	//引入外部php
	include "public.php";
	//4. 编写sql语句
	$sql = "SELECT * FROM `orderb` WHERE 1";
	//5. 执行sql语句
	$set = mysql_query($sql);
	//mysql_fetch_array()
	while($arr = mysql_fetch_array($set)){
		$list[] = $arr; // [[],[],[],[]]
	}
	echo json_encode($list);