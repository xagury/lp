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
    <link rel="stylesheet" href="../css/public.css">
</head>
<body>
	<section>
		<div class="top">
            		<p>当前位置 :
            		<span class='topS'>信息 &gt;</span> <span class='topA'>我的订单</span>
            		</p>
       			</div>
        <table>
            <tr class='top'>
                <td>订单编号</td>
                <td>订单总金额</td>
                <td>订单状态</td>
                <td>下单时间</td>
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

                $selectSel = "select * from orderB WHERE userId= '$userId' ";
                $resuleSet = mysql_query($selectSel);
                     echo "<script> 	var orderId=new Array()
                        var orderMoney=new Array()
                        var orderComplete=new Array()
                        var orderTime=new Array()

                        var count=0;
                    </script>";
                while($person = mysql_fetch_array($resuleSet)){

                    echo "<script>  
                    orderId.push('".$person['orderId']."');
                    orderMoney.push('".$person['orderMoney']."');
                    orderComplete.push('".$person['orderComplete']."');
                    orderTime.push('".$person['orderTime']."');
                     </script>";
                }
                    echo mysql_error();

    ?>




            <table id="idData" width="70%" class="orderTable">

            </table>

            <table width="60%" align="right" >

                <tr><td><div id="barcon" name="barcon"></div></td></tr>
            </table>
        </div>



	</section>
</body>

<script src="../js/ajaxOOP.js"></script>
<script type="text/javascript" src='../js/jquery-1.11.0.js'></script>
<script src="../../js/myApi.js"></script>
<script type="text/javascript" src='../js/backjs.js'></script>
<script type="text/javascript">
	userPersonOrder();
    window.onload=function(){goPage(1,3)};
</script>
</html>