<?php
    ob_start();         //打开缓冲区
    session_start();    //初始化会话数据
    require("../config/config.php");
?>
<?php 
    $selectSel = "select * from message";
    $resuleSet = mysql_query($selectSel);
    echo "<script>  var messageId=new Array()
                    var messageCon=new Array()
                    var messageTitle=new Array()
                    var messageUrl=new Array()
                    var messageTime=new Array()
                    var userId=new Array()
                    var count=0;
                </script>";
    while($person = mysql_fetch_assoc($resuleSet)){
        echo "<script>  
        messageId.push('".$person['messageId']."');
        messageCon.push('".$person['messageCon']."');
        messageTitle.push('".$person['messageTitle']."');
        messageUrl.push('".$person['messageUrl']."');
        messageTime.push('".$person['messageTime']."');
        userId.push('".$person['userId']."');
         </script>";
    }
    $sql="SELECT COUNT(*) AS count FROM message";


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
<link rel="stylesheet" type="text/css" href="../css/message.css">
<link rel="stylesheet" type="text/css" href="../css/public.css">
</head>
<body>
	<section>
		<div class="top">
            		<p>当前位置 :
            		<span class='topS'>信息管理 &gt;</span> <span class='topA'>审核留言</span>
            		</p>
       			</div>
       			 <table class='con'>
					<tr class='top'>
						<td>留言编号</td>
						<td>留言标题</td>
						<td>留言内容</td>
						<td>留言图片路径</td>
						<td>留言时间</td>
						<td>留言者</td>
						<td>操作</td>
					</tr>
				</table>
			<div class="content">
				
				<table id="idData" width="70%" class='xtable'>

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
	allTableMessage();
    window.onload=function(){goPage(1,8)};


</script>
</html>