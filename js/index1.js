$(function(){
    returnTop();
    function returnTop() {
        var height = $(window).height();
        $(window).scroll(function () {
            if($(window).scrollTop() > height){
                $('#returnTop').fadeIn(500);
            }else{
                $('#returnTop').fadeOut(500);
            }
        });
        $('#returnTop').click(function () {
            $('body,html').animate({scrollTop:0},2000);
            console.log(1);
            return false;
        });
    }

})

//index1.html banner
function indexBanner(){
    var xCircle = document.querySelector('#banner .circle');
    var xUl =document.querySelector('#banner .banner-w ul');
    var xLi =document.querySelectorAll('#banner .banner-w ul li');
    var xCon1 = document.querySelector('#banner .con1');
    var xCon2 = document.querySelector('#banner .con2');
    xLi[0].style.opacity = 1;
    xLi[0].style.filter = 'alpha(opacity=100)';
    for(var i = 0 ; i < xLi.length ; i ++){
        creatSpan = document.createElement('span');
        xCircle.appendChild(creatSpan);
    }
    var xSpan = document.querySelectorAll('#banner .circle span');
    var count = 0;
    function pre(){
        if(count == 0){
            count = xLi.length -1;
        }else{
            count-- ;
        }
        clear();
        move(xLi[count],{opacity:100});
        xSpan[count].className='active';
    }
    function next() {
        count++;
        if(count > xLi.length-1){
            count = 0;
        }
        clear();
        move(xLi[count],{opacity:100});
        xSpan[count].className ='active';
    }
    xCon1.onclick = function(){pre(); }
    xCon2.onclick = function(){next(); }
    timer = setInterval(function(){
        next();
    },3000);
    xUl.onmouseenter = function(){
        clearInterval(timer);
    }
    xUl.onmouseleave = function(){
        timer = setInterval(function(){
            next();
        },3000);
    }
    xSpan[0].className='active';
    for(let i = 0 ;i < xSpan.length ;i++){
        xSpan[i].onmouseover =function(){
            clear();
            count=i;
            this.className='active';
            move(xLi[i],{opacity:100});
            count = i;
        }
    }

    function clear() {
        for(var k = 0 ; k < xSpan.length ; k++){
            move(xLi[k],{opacity:0});
            xSpan[k].className='';
        }
    }
    var xBanner = document.querySelector('#banner');
    xBanner.onmouseenter = function () {
        move(xCon1,{opacity:100});
        move(xCon2,{opacity:100});
    }
    xBanner.onmouseleave =function () {
        move(xCon1,{opacity:0});
        move(xCon2,{opacity:0});
    }



    $(function () {
        $('#index').hide();
        if(checkCookie('name')){
           $('#us').html(getCookie('name'));
            $('#index').show();
           $('.login').click(function () {
               console.log(1);
               location.href='Backstage/user.html';
           })
        }
        else{
            $('#us').html('登录');
            $('#us').click(function () {
                location.href='login.html';
            })
            $('#re').click(function () {
                location.href='register.html';
            })
            $('#index').hide();
        }
    })



}
