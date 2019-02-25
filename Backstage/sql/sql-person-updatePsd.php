<?php
/**
 * Created by PhpStorm.
 * User: 思思
 * Date: 2018/10/9
 * Time: 11:03
 */
        ob_start();      	//打开缓冲区
        session_start();	//初始化会话数据
        require("../config/config.php");
        $newPsd = $_REQUEST["newPsd"];
        $cookie = $_COOKIE['name'];
        $sql = "update user set userPassword='{$newPsd}' where userName = '$cookie' ";
        $result = mysql_query($sql);
        if($result)
        {
            echo"<script>alert('添加成功')</script>";
            header("location:../person/information.php");

        }

        else
        {
            echo "error";
            echo "$cookie";
        }


