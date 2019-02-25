    <?php
        ob_start();      	//打开缓冲区
        session_start();	//初始化会话数据
        require("../config/config.php");
    ?>


    <?php
        $cook=$_COOKIE['name'];
        $selectSel = "select * from user WHERE userName='$cook'";
        $resuleSet = mysql_query($selectSel);
        $person = mysql_fetch_array($resuleSet);
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
            		<span class='topS'>信息 &gt;</span> <span class='topA'>我的信息</span>
            		</p>
       			</div>   
			<div class="content">
				<div class='left l'>
                    <form action="../sql/sql-person-update.php">
                        <p><b>用户名:</b><span><input type='text' name='name' value="<?php echo $person['userName'] ?>"></span></p>
                        <p><b>性&nbsp;&nbsp;&nbsp;别:</b><span><input type='text' name='sex' value="<?php echo $person['userSex'] ?>"></span></p>
                        <p><b>手机号:</b><span><input type='tel' name='phone' value="<?php echo $person['userPhone'] ?>"></span></p>
                        <p><b>邮&nbsp;&nbsp;&nbsp;箱:</b><span><input type='mail' name='mail' value="<?php echo $person['userMail'] ?>"></span></p>

					    <p><b>余&nbsp;&nbsp;&nbsp;额:</b><span>1000</span></p>

                        <p><input type="submit" id="sub" value="保存"></p>
                    </form>
				</div>
				<div class='right r'>
					<img src="../../images/1(1).png">
				</div>
					
			</div>



	</section>
</body>
<script type="text/javascript" src='../js/jquery-1.11.0.js'></script>
<script type="text/javascript" src='../js/backjs.js'></script>
<script type="text/javascript"></script>
</html>