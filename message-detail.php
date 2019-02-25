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
    <title>留言区</title>
    <link rel="stylesheet" type="text/css" href="css/public.css">
    <link rel="stylesheet" type="text/css" href="css/style-message-detail.css">
    <link rel="stylesheet" type="text/css" href="css/nav.css">
</head>
<body>
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
                                              <div id="user" class="nav user"><a id='auser' class='user l' href='Backstage/user.html'>ruanruan</a>
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
                <span>留言区</span>
            </a>
        </div>
</header>

<?php
    $hMessageId=$_GET['id'];
    $selectSel = "select * from message WHERE messageId= $hMessageId";
    $resuleSet = mysql_query($selectSel);
    $person = mysql_fetch_array($resuleSet);

?>

<main class='margin'>
    <section>
        <h3><span class='txt1'>主题:</span><span class='title'><?php echo $person['messageTitle'] ?></span></h3>
        <div class='content'>
            <div class='top'>
                <img src="<?php echo $person['messageUrl'] ?>">
                <div class='topM'>
                    <p><?php echo $person['messageCon'] ?></p>
                </div>
                <div class='topB'>
                    <span class='topB1'>No.<b>0</b></span>
                    <span class='topB2'>发表者:<i><?php echo $_COOKIE['name']?></i></span>
                    <span class='topB3'>发表时间:<em><?php echo $person['messageTime'] ?></em></span>
                </div>
            </div>
            <div class='message'>

            </div>
        </div>
    </section>
    <div class='comment'>
        <div class='cTitle'>
            <span>昵称:</span>
            <input type='text' class='txt' value=''>
        </div>
        <div class='cContent'>
            <span>内容:</span>
            <div class='content1' contenteditable="true"></div>
            <input type='submit' value='发表' class='btn'>
        </div>
    </div>
</main>
    
<footer>
<div class='content'>
    
    <a href="#">用户反馈</a>
    <a href="about.html">关于我们</a>
    <a href="map.html">网站导航</a>

</div>
   
</footer>
    
</body>
<script type="text/javascript" src='js/myApi.js'></script>
<script type="text/javascript" src='js/lp.js'></script>
<script src="js/jquery-1.11.1.min.js"></script>
<script src="js/message.js"></script>
<script src="js/nav.js"></script>
<script type="text/javascript">
    messageDetail();
</script>


</html>