<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>后台管理</title>

	<link rel="stylesheet" href="../css/user.css">
</head>
<body>
	<section>
		<div class="top">
            		<p>当前位置 :
            		<span class='topS'>商品管理 &gt;</span> <span class='topA'>删除商品</span>
            		</p>
       			</div>   
			<div class="content">
				<form action='../sql/sql-shop-dele.php'>
					<p>
						<span>商品编号: </span><input type='text' name='id'>
					</p>
					<p>
						<input type='submit' value='删除' id='sub'>
					</p>
				</form>
			</div>



	</section>
</body>
</html>