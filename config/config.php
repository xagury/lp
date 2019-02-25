<?php
		error_reporting(E_ALL & ~E_DEPRECATED);
        $serverLink = mysql_connect('localhost','root','123456') or die("".mysql_error());
        mysql_query("set names 'utf8'");
		mysql_select_db("lp");

?>
