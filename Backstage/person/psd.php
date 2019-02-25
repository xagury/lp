<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>后台管理</title>
<link rel="stylesheet" type="text/css" href="../css/person.css">
</head>
<body>
	<section>
		<div class="top">
            		<p>当前位置 :
            		<span class='topS'>信息 &gt;</span> <span class='topA'>密码修改</span>
            		</p>
       			</div>   
			<div  class="content">
                <form action="../sql/sql-person-updatePsd.php" onsubmit="return psd();">
                    <p>
                        <span>旧密码: </span><input type='password' name="oldPsd">
                    </p>
                    <p>
                        <span>新密码: </span><input type='password' id="newPsd" name="newPsd">
                    </p>
                    <p>
                        <span>确认新密码: </span><input type='password' id="newPsd1">
                    </p>
                    <p>
                        <input type='submit' value='修改'>
                    </p>
                </form>
			</div>



	</section>
</body>
<script type="text/javascript" src='../js/jquery-1.11.0.js'></script>
<script type="text/javascript" src='../js/backjs.js'></script>
<script type="text/javascript">
    function psd() {
        var psd =document.getElementById('newPsd');
        var psd1 =document.getElementById('newPsd1');
        if(psd.value!=psd1.value) {
            alert('两次密码不一致,请重新输入');
            return false;
        }else{
            return true;
        }
    }
</script>
</html>