    <?php
        ob_start();      	//打开缓冲区
        session_start();	//初始化会话数据
        require("../config/config.php");
    ?>
    <?php
        $selectSel = "select * from orderB";
        $resuleSet = mysql_query($selectSel);
        echo "<script> 	var orderId=new Array()
                        var orderMoney=new Array()
                        var orderComplete=new Array()
                        var orderTime=new Array()
                        var userId=new Array()
                        var count=0;
                    </script>";
        while($person = mysql_fetch_array($resuleSet)){

            echo "<script>  
            orderId.push('".$person['orderId']."');
            orderMoney.push('".$person['orderMoney']."');
            orderComplete.push('".$person['orderComplete']."');
            orderTime.push('".$person['orderTime']."');
            userId.push('".$person['userId']."');
    
             </script>";
        }
            echo mysql_error();

        $sql="SELECT COUNT(*) AS count FROM orderB";

        //执行sql
        $query=mysql_query($sql);
        if(mysql_num_rows( $query)){
            $rs=mysql_fetch_array($query);
            //统计结果
            $count=$rs[0];
        }else{
            $count=0;
        }
        echo "<script> count=$count</script>";

    ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>后台管理</title>
<link rel="stylesheet" type="text/css" href="../css/order.css">
<link rel="stylesheet" type="text/css" href="../css/public.css">
</head>
<body onLoad="goPage(1,5);">
	<section>
		<div class="top">
            		<p>当前位置 :
            		<span class='topS'>商品管理 &gt;</span> <span class='topA'>所有订单</span>
            		</p>
       			</div>  
       			<table class='con'>
					<tr class='top'>
						<td>订单编号</td>
						<td>订单总金额</td>
						<td>订单状态</td>
						<td>下单时间</td>
						<td>购买者</td>
						<td>操作</td>
					</tr>
				</table> 
			<div class="content">
				
				<table id="idData" width="70%">
			
					<!-- <tr>
						<td>1</td>
						<td>500</td>
						<td>true</td>
						<td>2018-10-06 04:00:00</td>
						<td>2</td>
						<td><a href="#">发货</a></td>
					</tr> -->
				</table>
				<table width="60%" align="right" >
					
					<tr><td><div id="barcon" name="barcon"></div></td></tr>
				</table>
			</div>



	</section>
</body>
<script type="text/javascript" src='../js/jquery-1.11.0.js'></script>
<script src="../../js/myApi.js"></script>
<script type="text/javascript" src='../js/backjs.js'></script>
<script type="text/javascript">
	allTableOrder();

	 window.onload=function(){goPage(1,8)};

</script>
</html>