<?php
	ob_start();      	//打开缓冲区
	session_start();	//初始化会话数据
	require("../config/config.php");
?>
<?php 
	$selectSel = "select * from comment";
	$resuleSet = mysql_query($selectSel);
	echo "<script> 	var commentId=new Array()
					var commentContent=new Array()
					var commentTitle=new Array()
					var commentTime=new Array()
					var shopId=new Array()
					var userId=new Array()
					var count=0;
				</script>";
	while($person = mysql_fetch_array($resuleSet)){
		echo "<script>  
		commentId.push('".$person['commentId']."');
		commentContent.push('".$person['commentContent']."');
		commentTitle.push('".$person['commentTitle']."');
		commentTime.push('".$person['commentTime']."');
		shopId.push('".$person['shopId']."');
		userId.push('".$person['userId']."');
		
		 </script>";
	}
	$sql="SELECT COUNT(*) AS count FROM comment";


	$query=mysql_query($sql);
	if(mysql_num_rows( $query)){
		$rs=mysql_fetch_array($query);
	
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
<link rel="stylesheet" type="text/css" href="../css/comment.css">
<link rel="stylesheet" type="text/css" href="../css/public.css">
</head>
<body>
	<section>
		<div class="top">
            		<p>当前位置 :
            		<span class='topS'>信息管理 &gt;</span> <span class='topA'>审核评论</span>
            		</p>
       			</div> 
       			<table class='con'>
					<tr class='top'>
						<td>评论编号</td>
						<td>评论标题</td>
						<td>评论内容</td>
						<td>评论时间</td>
						<td>评论商品编号</td>
						<td>评论用户编号</td>
						<td>操作</td>
					</tr>
				</table>  
			<div class="content">
				
				
				<table id="idData" width="70%" class='xtable'>
					
					<!-- <tr>
						<td>1</td>
						<td>这是第一个评论标题</td>
						<td>这是第一个评论内容</td>
						<td>2018-10-06 04:00:00</td>
						<td>1</td>
						<td>2</td>
						<td><i>通过</i><b>不通过</b></td>
					</tr> -->
				</table>
					
					
				<table width="60%" align="right" >
					
					<tr><td><div id="barcon" name="barcon"></div></td></tr>
				</table>
			</div>



	</section>
</body>

<script type="text/javascript" src='../js/jquery-1.11.0.js'></script>
<script src="../js/myApi.js"></script>
<script type="text/javascript" src='../js/backjs.js'></script>
<script type="text/javascript">
	allTableComment();
    window.onload=function(){goPage(1,8)};


</script>
</html>