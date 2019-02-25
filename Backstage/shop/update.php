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
            		<span class='topS'>商品管理 &gt;</span> <span class='topA'>更新商品信息</span>
            		</p>
       			</div>   
			<div class="content">
				<form action='../sql/sql-shop-update.php'>
					<p>
						<span>商品编号: </span><input type='text' name='id'>
					</p>
					<p>
						<span>商品名称: </span><input type='text' name='name'>
					</p>
					<p>
						<span>商品单价: </span><input type='text' name='price'>
					</p>
					<p>
						<span>商品图片地址:</span><input type='text' name='url'>
					</p>
					<p>
						<span>商品介绍: </span><input type='tel' name='desc'>
					</p>
					<p>
						<input type='submit' value='修改' id='sub'>
					</p>
				</form>
			</div>



	</section>
</body>
</html>