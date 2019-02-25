<?php
    ob_start();         //打开缓冲区
    session_start();    //初始化会话数据
    require("config/config.php");
    header('Access-Control-Allow-Origin:*');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>商店</title>
    <link rel="shortcut icon" href="images/banner.png">
    <link rel="stylesheet" type="text/css" href="css/public.css">
    <link rel="stylesheet" type="text/css" href="css/style-shop.css">
    <link rel="stylesheet" type="text/css" href="css/nav.css">
    <style type="text/css">
            nav ul li a:hover{background:rgba(0,0,0,0.5);}
           #loginBar .margin .nav nav .lp-nav{background:rgba(0,0,0,0.5);top:29px;}
           #loginBar nav .lp-nav .lp-nav-content .lp-nav-content-mod .lp-nav-content-mod-wrap .lp-nav-content-mod-bd ul li a {    padding: 0px 5px;line-height:25px;}
           #loginBar nav .lp-nav .lp-nav-content .lp-nav-content-mod .lp-nav-content-mod-wrap .lp-nav-content-mod-bd ul li a:hover{background:#BF1E40}
    </style>
</head>
<body>

    <div id="" class="xss">©Xss</div>
    <div id='loginBar'>
         <div class="margin clear">
             <span class="l" style="width:60px;height:30px;"><?php echo $_COOKIE['name'];?></span>
             <span class='l'>欢迎您登录</span>
             <div class='nav r'>
                 <nav id="nav">
                     <div class="navC">
                         <div class="nav index"><a href="index.html">网站首页</a></div>

                         <div class="nav shopIndex"><a href="shop.php">商店首页</a></div>
                         <div class="nav message"><a href="message.html">交流区</a></div>
                         <div class="nav help" id="help"><a href="#">服务指南</a>
                             <div class='lp-nav' id="navHelp">
                                 <div class='lp-nav-content'>
                                     <ul>
                                         <li><a href="index1.html">网站前页</a><b>|</b></li>
                                         <li><a href="href.html">京剧网站</a><b>|</b></li>

                                         <li><a href="cart.html">购物车</a></li>
                                         <li><a href="about.html">关于我们</a><b>|</b></li>
                                         <li><a href="contact.html">联系我们</a><b>|</b></li>
                                         <li><a href="feedback.html">反馈</a></li>
                                     </ul>
                                 </div>

                             </div>
                         </div>
                         <div id="user" class="nav user"><a id='auser' class='user l' href='Backstage/user.html'></a>
                             <div class='lp-nav'>
                                 <div class='lp-nav-content'>
                                     <ul>
                                         <li><a href="Backstage/user.html">我的后台</a><b>|</b></li>
                                         <li><a href="message.html">我要留言</a><b>|</b></li>
                                         <li><a href="login.html">登录</a><b>|</b></li>
                                         <li><a href="register.html">注册</a><b>|</b></li>
                                     </ul>
                                 </div>
                             </div>

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
                <span>商品</span>
            </a>

<!--            <div class='all r'>-->
<!--                <input type='text' class='txt l'>-->
<!--                <input type='btn' class='search l ' value='搜索'>-->
<!--            </div>-->
        </div>
        
        
    </header>

    <?php


        $selectSel = "select * from shop order by shopId ";
        $resuleSet = mysql_query($selectSel);
        echo "<script>  var shopId=new Array()
                        var shopName=new Array()
                        var shopDesc=new Array()
                        var shopUrl=new Array()
                        var shopPrice=new Array()
                    </script>";//js定义数组

        while($person = mysql_fetch_array($resuleSet)){
            echo "<script>  
            shopId.push('".$person['shopId']."');
            shopName.push('".$person['shopName']."');
            shopDesc.push('".$person['shopDesc']."');
            shopUrl.push('".$person['shopUrl']."');
            shopPrice.push('".$person['shopPrice']."');
             </script>";
        }
            $sql="SELECT COUNT(*) AS count FROM shop";

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
    <main>
        <ul id="list">

        </ul>

    </main> 
    <footer>

        <div class='page' >

            <div id="barcon" name="barcon"></div>

        </div>

    </footer>

    <div class="copyRight"></div>
</body>
<script src="js/jquery-1.11.1.min.js"></script>
<script src="js/ajaxOOP.js"></script>
<script type="text/javascript" src='js/myApi.js'></script>
<script src="js/shop.js"></script>
<script type="text/javascript" src='js/lp.js'></script>
<script src="js/nav.js"></script>
<script type="text/javascript">
    shop();
    window.onload=function(){goPage(1,8)};


</script>


</html>