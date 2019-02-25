<?php
	ob_start();      	//打开缓冲区
	session_start();	//初始化会话数据
	require("../config/config.php");
?>
<?php 
	$selectSel = "select * from user";
	$resuleSet = mysql_query($selectSel);
	echo "<script> 	var myId=new Array()
					var myName=new Array()
					var myPsd=new Array()
					var mySex=new Array()
					var myPhone=new Array()
					var myMail=new Array()
					var count=0;
				</script>";
	while($person = mysql_fetch_array($resuleSet)){
	
		echo "<script>  
		myId.push('".$person['userId']."');
		myName.push('".$person['userName']."');
		myPsd.push('".$person['userPassword']."');
		mySex.push('".$person['userSex']."');
		myPhone.push('".$person['userPhone']."');
		myMail.push('".$person['userMail']."');

		 </script>";
	}
	$sql="SELECT COUNT(*) AS count FROM user";

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
<link rel="stylesheet" type="text/css" href="../css/user.css">
<link rel="stylesheet" type="text/css" href="../css/public.css">
<style type="text/css">
	body{background:rgba(0,0,0,0);}
	.con{margin:20px auto;}
	#barcon{color:#fff;border:1px solid #BF1E40;margin-top:20px;position: relative;}
	#barcon a{color:#Fff;margin:0 10px;}
	#barcon a:hover{color:#BF1E40;}
	#barcon span{margin:0 10px;}
</style>
</head>
<body >
	<section>
		 <div class="top">
            		<p>当前位置 :
            		<span class='topS'>用户管理 &gt;</span> <span class='topA'>所有用户</span>
            		</p>
       	</div>
				<table class='con'>
					<tr class='top'>
						<td>用户ID</td>
						<td>用户名</td>
						<td>密码</td>
						<td>性别</td>
						<td>手机号</td>
						<td>邮箱</td>
						<td>余额</td>
					</tr>
				</table>

			<div class="content" >
			
				
				<table id="idData" width="70%">
				</table>
				<table width="60%" align="right" >
					
					<tr><td><div id="barcon" name="barcon"></div></td></tr>
				</table>
			</div>



	</section>
</body>
<script type="text/javascript" src='../js/jquery-1.11.0.js'></script>
<script type="text/javascript" src='../js/myApi.js'></script>
<script type="text/javascript" src='../js/backjs.js'></script>
<script type="text/javascript">
    allTableUser();
    window.onload=function(){goPage(1,8)};


</script>


</html>