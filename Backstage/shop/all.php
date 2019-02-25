<?php
	ob_start();      	//打开缓冲区
	session_start();	//初始化会话数据
	require("../config/config.php");
?>
<?php 
	$selectSel = "select * from shop";
	$resuleSet = mysql_query($selectSel);
	echo "<script> 	var shopId=new Array()
					var shopName=new Array()
					var shopDesc=new Array()
					var shopUrl=new Array()
					var shopPrice=new Array()
					var count=0;
				</script>";
	while($person = mysql_fetch_array($resuleSet)){
		echo "<script>  
		shopId.push('".$person['shopId']."');
		shopName.push('".$person['shopName']."');
		shopDesc.push('".$person['shopDesc']."');
		shopUrl.push('".$person['shopUrl']."');
		shopPrice.push('".$person['shopPrice']."');
		

		 </script>";
	}
        $sql="SELECT COUNT(*) AS count FROM shop";

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
<link rel="stylesheet" type="text/css" href="../css/shop.css">
<link rel="stylesheet" type="text/css" href="../css/public.css">
</head>
<body>
	<section>
				<div class="top">
            		<p>当前位置 :
            		<span class='topS'>商品管理 &gt;</span> <span class='topA'>所有商品</span>
            		</p>
       			</div> 
       			<table class='con'>
					<tr class='top' >
						<td>商品编号</td>
						<td>商品名称</td>
						<td>商品简介</td>
						<td>商品图片路径</td>
						<td>商品价格</td>
						<td>操作</td>
					</tr>
				</table>  
			<div class="content">
				
				
				<table id="idData" width="70%">

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
	allTableShop();

    window.onload=function(){goPage(1,8)};
</script>
</html>