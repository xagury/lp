<?php

        ob_start();      	//打开缓冲区
        session_start();	//初始化会话数据
        require("../config/config.php");

            if (isset($_POST['submit'])){
                $query = "select * from user where userName = '{$_POST['id']}' and userPassword = '{$_POST['psd']}'";
                $result = mysql_query($query);
                $person = mysql_fetch_array($result);
                if (mysql_num_rows($result) == 1){
                    setcookie("name",$person['userName'],time()+36000,'/');

                    if($person['userName']=='admin')
                        header("Location:../Backstage/admin.html");
                    else
                        header("Location:../html/index.html");

                }else {
                    echo"<script>
                        alert('Wrong account or password!')
                        location.href='../login.html';
                    </script>";

                }


            }
?>