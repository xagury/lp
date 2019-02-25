<?php
ob_start();         //打开缓冲区
session_start();    //初始化会话数据
require("config/config.php");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>商店</title>
    <link rel="shortcut icon" href="images/banner.png">
    <link rel="stylesheet" type="text/css" href="css/public.css">
    <link rel="stylesheet" type="text/css" href="css/style-shop-detail.css">

</head>
<body>
<div class="cart">
        <b></b>
     <i></i>加入购物车
</div>
<div id="" class="xss">©Xss</div>
    <div id='loginBar'>
         <div class="margin clear">
            <span class='l'>欢迎您登录</span>    
            <div class='nav r'>

                <nav id="nav">
                    <div class="navC">
                        <div class="nav index"><a href="index.html">网站首页</a></div>

                        <div class="nav shopIndex"><a href="shop.php">商店首页</a></div>
                        <div class="nav message"><a href="message.html">交流区</a></div>
                       
                        <div id="user" class="nav user"><a id='auser' class='user l' href='Backstage/user.html'>我的后台</a>
                           

                        </div>
                    </div>
                </nav>

            </div>
         </div>
        
    </div>
        
    <header>
        <div class='margin'>
        
            <a href="#" class="logo l ">
                <img src="images/banner.png">
                <span>商店</span>
            </a>


        </div>
        
        
    </header>
    <?php
        $hShopId=$_GET['id'];
        $selectSel = "select * from shop WHERE shopId= $hShopId";
        $resuleSet = mysql_query($selectSel);
        $person = mysql_fetch_array($resuleSet);
    ?>
    <main>
        <section class='xContent'>
            <div class='imgContent l'>
                <div class='show'>
                    <img src="<?php echo $person['shopUrl'] ?>">
                    <span class='filter'></span>
                    <div class='bigImg'>
                        <img src="<?php echo $person['shopUrl'] ?>">
                    </div>
                </div>
                <div class='btn'>
                    <div class='smallImg'>
                        <img src="<?php echo $person['shopUrl'] ?>" alt="">
                        <img src="html/img/1(58).png" alt="">
                        <img src="html/img/1(59).png" alt="">
                        <img src="html/img/1(60).png" alt="">
                        <img src="html/img/1(61).png" alt="">
                        <img src="html/img/1(62).png" alt="">
                    </div>
                    <span>></span><span><</span>
                </div>
            </div>
            <div class='textContent l'>
                <h3><?php echo $person['shopName'] ?></h3>
                <p>价格
                    <span class='price'>￥<?php echo $person['shopPrice'] ?></span>
                </p>
                <p>配送
                    <i class='star1'>安徽</i>
                    至
                    <i>广东</i>
                    快递 免运费 48小时发货
                </p>
                <p class='sp'><span>数量</span>
                    <button class="minus">-</button>
                    <input type="text" value="1" class="num">
                    <button class="plus">+</button>
                </p>
                <div class='ope' id="ope">
                    <a class='buy l' id="buy">立即购买</a>
                    <a class='joinCart l' id="joinCart">加入购物车</a>
                </div>
                <p>销量 <i>30</i> 件</p>
            </div>
        </section>

    </main>



    <div class='detailContent'>
            <ul>
                <li>商品详情</li>
                <li>评论</li>
            </ul>
            <div class='comment'>
            </div>
            <div class='shopDetail'>
                <div class="de">
                    <img src="<?php echo $person['shopUrl'] ?>" class="cImg l">
                    <div class='cCon l '>
                        <p>脸谱人物:<span class='name1'><?php echo $person['shopDesc'] ?></span></p>
                        <p>脸谱类别:<span class='name1'><?php echo $person['shopDesc'] ?></span></p>
                        <p>京剧曲目:<span class='name1'><?php echo $person['shopDesc'] ?></span></p>
                    </div> 
                </div>

                <div class="de">
                    <img src="html/img/1(57).png" class="cImg l">
                    <div class='cCon l '>
                        <p>脸谱人物:<span class='name1'>黄盖</span></p>
                        <p>脸谱类别:<span class='name1'>花脸</span></p>
                        <p>京剧曲目:<span class='name1'>群英会</span></p>
                    </div>
                </div>
                <div class="de">
                    
                    <img src="html/img/1(58).png" class="cImg l">
                    <div class='cCon l '>
                        <p>脸谱人物:<span class='name1'>孟良</span></p>
                        <p>脸谱类别:<span class='name1'>花脸</span></p>
                        <p>京剧曲目:<span class='name1'>穆柯寨</span></p>
                    </div> 
                </div>
               
            </div>
        </div>
    <footer>
        <div class='content'>
    
            <a href="#">用户反馈</a>
            <a href="about.html">关于我们</a>
            <a href="map.html">网站导航</a>

        </div>
    </footer>
<?php

$xCommentId=$_GET['id'];
$selectSel1 = "select * from comment where shopId = '$xCommentId' ";
$resuleSet1 = mysql_query($selectSel1);
echo "<script>  var commentId=new Array()
                                        var commentTitle=new Array()
                                        var commentContent=new Array()
                                        var commentTime=new Array()
                                        var userId=new Array()
                                    </script>";//js定义数组

while($person = mysql_fetch_array($resuleSet1)){
    echo "<script>  
                            commentId.push('".$person['commentId']."');
                            commentTitle.push('".$person['commentTitle']."');
                            commentContent.push('".$person['commentContent']."');
                            commentTime.push('".$person['commentTime']."');
                            userId.push('".$person['userId']."');
                         
                             </script>";
}
$sql="SELECT COUNT( shopId = 'xCommentId') AS 'xCommentId' FROM comment GROUP BY shopId ";

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
</body>
<script type="text/javascript" src='js/myApi.js'></script>
<script type="text/javascript" src='js/lp.js'></script>
<script src="js/jquery-1.11.1.min.js"></script>
<script src="js/shopDetail.js"></script>
<script src="js/nav.js"></script>
<script type="text/javascript">
magnifyingGlass();
shopDetail();
numA();
buyJoin();
sDetail();
joinCCC();

</script>


</html>