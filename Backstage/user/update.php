<?php
	ob_start();      	//打开缓冲区
	session_start();	//初始化会话数据
	require("../config/config.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>后台管理</title>

	<link rel="stylesheet" type="text/css" href="../css/user.css">
</head>


<body>
	<section>
		<div class="top">
            		<p>当前位置 :
            		<span class='topS'>用户管理 &gt;</span> <span class='topA'>修改用户信息</span>
            		</p>
       			</div>   
			<div class="content">
                <form name="register" action="../sql/sql-user-update.php">
                    <p class="idT">
                        <span id="sspan">输入需要修改的用户ID : </span><input type='text' id="id" name='id' value="">
                        <input type="button" id="btn" value="查找">
                    </p>
                    <div id="deA">
                        <?php
                        $userId=$_COOKIE['id'];;
                        $selectSel = "select * from user WHERE userId= '$userId' ";

                        $resuleSet = mysql_query($selectSel);mysql_error();
                        $person = mysql_fetch_array($resuleSet);
                        ?>
                        <p>
                            <span>昵称 : </span><input type='text' name='name' value="<?php echo $person['userName'] ?>">

                        </p>
                        <p>
                            <span>密码 : </span><input type='password' name='psd' value="<?php echo $person['userPassword'] ?>">
                        </p>
                        <p>
                            <span>性别 : </span><input type='text' name='sex' value="<?php echo $person['userSex'] ?>">
                        </p>
                        <p>
                            <span>手机号 : </span><input type='tel' name='phone' value="<?php echo $person['userPhone'] ?>">
                        </p>
                        <p>
                            <span>邮箱 : </span><input type='mail' name='mail' value="<?php echo $person['userMail'] ?>">
                        </p>
                        <p>
                            <span>余额 : </span><input type='number' name='money' value="<?php echo $person['userMoney'] ?>">
                        </p>

                        <p>
                            <input type='submit' value='修改' id='sub'>
                        </p>
                    </div>
                </form>
			</div>



	</section>
</body>
<script src="../js/myApi.js"></script>
<script>
    deleteCookie('id');
    var id=document.querySelector('#id');
    var xBtn=document.querySelector('#btn');
    var xdea=document.querySelector('#deA');

    id.onchange=function(){
        $.ajax({
            url: '../select-user/' + id.value,
            type: 'get',

            success: function (res) {
                return value
            },
            error: function (error) {
                console.log(error);
            }
        })
        console.log(id.value);
        setCookie("id",id.value,3000);
    }
    window.onload=function(){
        xBtn.onclick=function () {
            xdea.style.display='block';
        }

    }


</script>
</html>