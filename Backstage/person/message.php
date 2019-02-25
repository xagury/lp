<?php
ob_start();         //打开缓冲区
session_start();    //初始化会话数据
require("../config/config.php");

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>后台管理</title>
<link rel="stylesheet" type="text/css" href="../css/person.css">
<link rel="stylesheet" type="text/css" href="../css/public.css">
</head>
<body>
	<section>
		<div class="top">
            		<p>当前位置 :
            		<span class='topS'>信息 &gt;</span> <span class='topA'>我的留言</span>
            		</p>
       			</div>
        <table>
            <tr class='top'>
                <td>留言标题</td>
                <td>留言内容</td>
                <td>留言图片路径</td>
                <td>留言时间</td>
                <td>操作</td>
            </tr>
        </table>
			<div class="content">
                <?php
                $userName=$_COOKIE['name'];

                $selectSelA = "select * from user WHERE userName= '$userName'";
                $resuleSetA = mysql_query($selectSelA);
                $personA = mysql_fetch_array($resuleSetA);

                $user=$personA['userId'];

                $userId= $user;

                $selectSel = "select * from message WHERE userId= '$userId' ";
                $resuleSet = mysql_query($selectSel);
                echo "<script> 	var messageCon=new Array()
                                var messageTitle=new Array()
                                var messageUrl=new Array()
                                var messageTime=new Array()
                                var messageId=new Array()
                                var count=0;
                    </script>";
                while($person = mysql_fetch_array($resuleSet)){

                    echo "<script>  
                            messageId.push('".$person['messageId']."');
                            messageCon.push('".$person['messageCon']."');
                            messageTitle.push('".$person['messageTitle']."');
                            messageUrl.push('".$person['messageUrl']."');
                            messageTime.push('".$person['messageTime']."');
                     </script>";
                }
                echo mysql_error();

                ?>


				<table id="idData" width="70%">

				</table>

                <table width="60%" align="right" >

                    <tr><td><div id="barcon" name="barcon"></div></td></tr>
                </table>
			</div>



	</section>
</body>
<script type="text/javascript" src='../js/jquery-1.11.0.js'></script>
<script src="../js/myApi.js"></script>
<script type="text/javascript" src='../../js/backjs.js'></script>
<script type="text/javascript">
	userPersonMessage();
    window.onload=function(){goPage(1,3)};
</script>
</html>