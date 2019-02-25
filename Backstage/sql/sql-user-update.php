<?php
	ob_start();      	//打开缓冲区
	session_start();	//初始化会话数据
	require("../config/config.php");
			$yid = $_REQUEST["id"];
			$yname = $_REQUEST["name"];
			$ypw = $_REQUEST["psd"];
			$ysex = $_REQUEST["sex"];
			$yphone  = $_REQUEST["phone"];
			$ymail = $_REQUEST["mail"];
			$ymoney = $_REQUEST["money"];

			$sql = "update user set userName='{$yname}',userPassword='{$ypw}',userSex='{$ysex}',userPhone='{$yphone}', userMail='{$ymail}',userMoney='{$ymoney}' where userId='{$yid}' ";
			$result = mysql_query($sql);
			if($result)
			{
				echo"
				<script>
					
							alert('修改成功')
						
				</script>";

			}
			
			else
			{
				echo "error";
				echo mysql_error();
			}
			header("location:../user/all.php");
?>
