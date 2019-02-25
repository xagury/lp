


//商品详情 放大镜
function magnifyingGlass(){
    var xShow =document.querySelector('.show');
    var xShowImg =document.querySelector('.show img');
    var xFilter =document.querySelector('.filter');
    var xBig = document.querySelector('.bigImg');
    var xBigImg = document.querySelector('.bigImg img');
    var xSmallImg=document.querySelector('.smallImg');
    var xImg = document.querySelectorAll('.smallImg img');
    var xBtn = document.querySelector('.btn');
    var xSpan=document.querySelectorAll('.btn span');
    var count = 0;
    //通过图片的长度设置父元素的宽度

    xSmallImg.style.width=xImg.length*(xImg[0].offsetWidth + 20)+'px';
    //控制小图左右切换

    function pre(){
        if(count==0){
            count = 0;
        }else{
            count--;
        }
        move(xSmallImg,{left:-(count*(xImg[0].offsetWidth+20))});
    }
    function next(){
        if(count >= xImg.length-4){
            count = xImg.length-4;
        }else{
            count++;
        }
        move(xSmallImg,{left:-(count*(xImg[0].offsetWidth+20))});
    }
    xSpan[0].onclick=function(){
        next();
    }
    xSpan[1].onclick=function(){
        pre();
    }
    //鼠标划过小图。改变大图的路径

    for(var i = 0 ; i < xImg.length; i++){
        xImg[i].onmouseover=function(){
            xShowImg.src = this.src;
            xBigImg.src = this.src;
        }

    }
    //鼠标划过show   改变右侧放大镜里面的图片地址
    xShow.onmouseover =function(){
        xFilter.style.display='block';
        xBig.style.display='block';
    }
    xShow.onmouseleave =function(){
        xFilter.style.display='none';
        xBig.style.display='none';
    }
    //fdj
    xShow.onmousemove=function(e){
        var e = e || window.event,
            l = e.clientX - xShow.offsetLeft - xFilter.offsetWidth / 2,
            t = e.clientY - xShow.offsetTop - xFilter.offsetHeight / 2;
        l = l < 0 ? 0 : (l < 200 ? l : 200);
        t = t < 0 ? 0 : (t < 200 ? t : 200);
        xFilter.style.left=l+'px';
        xFilter.style.top=t+'px';
        xBig.firstElementChild.style.width = 800+'px';
        xBig.firstElementChild.style.height = 800+'px';

        xBig.firstElementChild.style.left = - 2 * l +'px';
        xBig.firstElementChild.style.top = - 2 * t +'px';
    }
}


//shop-detail li单击事件
function shopDetail(){
    var xLi = document.querySelectorAll('.detailContent ul li');
    var xComment =document.querySelector('.comment');
    var xShopDetail =document.querySelector('.shopDetail');
    xLi[0].onclick=function(){
        xShopDetail.style.display='block';
        xComment.style.display='none';
        xLi[0].style.backgroundColor='#fff';
        xLi[0].style.color='#BF1E40';
        xLi[1].style.backgroundColor='#BF1E40';
        xLi[1].style.color='#fff';
    }
    xLi[1].onclick=function(){
        xShopDetail.style.display='none';
        xComment.style.display='block';
        xLi[0].style.backgroundColor='#BF1E40';
        xLi[0].style.color='#fff';
        xLi[1].style.backgroundColor='#fff';
        xLi[1].style.color='#BF1E40';
    }
}
//shop-detail 数量加减
function numA(){
    var xMinus=document.querySelector('.sp .minus');
    var xPlus=document.querySelector('.sp .plus');
    var xNum=document.querySelector('.sp .num');
    var xSp = document.querySelector('.textContent');
    console.log(xMinus);
    xSp.onclick=function(e){
        var e =  e || window.event;
        var target = e.srcElement || e.target;

        if(target.tagName=='BUTTON'&&target.className=='plus'){
            target.previousElementSibling.value ++;
        }
        if(target.tagName=='BUTTON'&&target.className=='minus'){
            if(target.nextElementSibling.value>1){
                target.nextElementSibling.value--;
            }
        }

    }
}
//shop-detail .ope单击事件
function buyJoin(e){
    var xShowImg =document.querySelector('.show img');
    var xBuy=document.querySelector('.buy');
    var oJoin=document.querySelector('.joinCart');
    xBuy.onclick=function(){
        location.href='buy.html';
    }
    var oCart = document.querySelector('.cart');
    var iw = document.documentElement.clientWidth - oCart.offsetWidth;

    oCart.onclick=function(){window.location.href='cart.html';}
    oCart.onmouseover=function(){
        oCart.innerHTML='<b></b><i></i>查看购物车'
    }
    oCart.onmouseleave=function(){
        oCart.innerHTML='<b></b><i></i>加入购物车'
    }
    oJoin.onmousedown=function() {
        join();
    }


    function join(e){
        //虚拟坐标0,0 实际坐标 iw,oCart.offsetWidth
        //创建新标签抛物线
        var e = e||window.event;
        var l = e.clientX;
        var t = e.clientY;
        var createSpan = document.createElement('span');
        createSpan.className ='cart';
        // createSpan.style.background=`url(images/1(1).png)no-repeat`;
        createSpan.style.left = l +'px';
        createSpan.style.top = t +'px';

        document.body.appendChild(createSpan);
        var x = -(iw - l);
        var y = -(t - oCart.offsetTop);
        var b = (y - (-0.001 * Math.pow(x,2))) /x;

        createSpan.timer=setInterval(function(){
            x+=50;
            y = -0.001 * Math.pow(x,2) + b* x;
            if(x>0){
                clearInterval(createSpan.timer);
                createSpan.remove();
            }

            createSpan.style.left = iw + x +'px';
            createSpan.style.top = oCart.offsetTop - y +'px';
        },30)

    }
}


//加入购物车单击事件
function joinCCC() {

    var xJoin =document.getElementById('joinCart');

    xJoin.onclick=function () {

        var s = GetQueryString("id");
        var num = document.querySelector('.num');
        var n = num.value;
        let cart1 ={};
        let car ={}
        parseInt(s);
        car[s]=n;
        console.log(car)
        console.log(cart1)
        if(checkCookie(cart1)){
            cart1[s]=n;
        }else{
            cart1[s]=n;
        }
        console.log(cart1);

        // cart1[s] = n;

        setCookie('gid',s,100);
        setCookie('gcart',JSON.stringify(cart1),100);

    }
}


//shop-detail()评论
function sDetail() {
    var xCommentDe = document.querySelector('.comment');
    var str='';
    console.log(commentTime[0]);
    for(var i = 0 ; i < count ; i++){
        str +=`<div class='cBox'>
                    <div class='my l'>
                        <img src="images/1(1).png">
                        
                        <span>${commentTime[i]}</span>
                    </div>
                    <div class='cContent l'>
                        <h3>${commentTitle[i]}</h3>
                        <p>${commentContent[i]}</p><span >${userId[i]}</span><br>
                    </div>
                </div>`
    }
    xCommentDe.innerHTML=str;

}
