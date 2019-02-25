


//aside 下拉

function xclick(){
    // var e = e || window.event;
    // var target = e.srcElement || e.target;
    var xDl = document.querySelectorAll('dl');
    var oDt = document.querySelectorAll('dl dt');
    var xUser = document.querySelector('.aside-user');
    var xShop = document.querySelector('.aside-shop');
    var xDetail = document.querySelector('.aside-detail');
    var xUserDt = document.querySelector('.aside-user dl dt' );
    var xShopDt = document.querySelector('.aside-shop dl dt');
    var xDetailDt = document.querySelector('.aside-detail dl dt');

//dt单击事件

    xUserDt.onclick = function(){
        dtOnclick('.aside-user',0);

    }

//单击下拉调用方法
    function dtOnclick(str,num){
        var str1 = str +' dl dd';
        str =  str+' dl dt';

        var xDt = document.querySelector(str);
        var xDd = document.querySelectorAll(str1);

        if(xDd[0].style.opacity == 0){
            var k = 50;
            xDl[num].style.height=205 +'px';
            xDt.style.backgroundColor='rgba(255,255,255,0.4)';
            xDt.style.opacity=1;
            for(var i = 0 ; i < xDd.length ;i++){

                xDd[i].style.opacity=0.5;
                xDd[i].style.top= k +'px';
                k += 50;
            }
        }
        else{
            xDt.style.backgroundColor='none';
            xDt.style.opacity=.2;
            for(var i = 0 ; i < xDd.length ;i++){
                var k = 50;
                xDl[num].style.height=0 +'px';
                xDd[i].style.opacity=0;
                xDd[i].style.top= k +'px';
                k -= 50;
            }
        }
    }

}

//用户信息-订单
//My
//order
function userPersonOrder(){
    var xTable = document.querySelector('.content table');
    var str='';
    for(var i = 0; i < orderId.length;i++){
        str +=`<tr>
                        <td>${orderId[i]}</td>
                        <td>${orderMoney[i]}</td>
                        <td class='xComplete'>${orderComplete[i]}</td>
                        <td>${orderTime[i]}</td>
                        <td  class="std"  data-order-id="${orderId[i]}"><i class="cDel">删除</i></td>
                    </tr>`

    }
    $(xTable).html(str);
    var xStd=document.querySelectorAll('.std');
    for(let j=0;j<xStd.length;j++){
        xStd[j].onclick=function(){
            this.parentNode.remove();
            ajax.get("../sql/del-order.php?id=" + this.getAttribute('data-order-id'));
            location.reload(true);
        }
    }
}

//用户信息-商品评论
//comment
function userPersonComment(){
    var xTable = document.querySelector('.content table');
    var str='';
    for(var i = 0; i <commentId.length;i++){
        str +=`<tr>
                    <td>${commentTitle[i]}</td>
                    <td>${commentContent[i]}</td>
                    <td>${commentTime[i]}</td>
                    <td>${shopId[i]}</td>
                    <td  class="std" data-comment-id="${commentId[i]}"><i class="cDel">删除</i></td>
                </tr>`
    }
    $(xTable).html(str);
    var xStd=document.querySelectorAll('.std');
    for(let j=0;j<xStd.length;j++){
        xStd[j].onclick=function(){
            ajax.get("../sql/del-comment.php?id=" + this.getAttribute('data-comment-id'));
            location.reload(true);
        }
    }

}

//用户信息-留言
//message
function userPersonMessage(){
    var xTable = document.querySelector('.content table');
    var str='';
    for(var i = 0; i < messageId.length;i++){
        str +=`<tr>
                    <td>${messageTitle[i]}</td>
                    <td>${messageCon[i]}</td>
                    <td>${messageUrl[i]}</td>
                    <td>${messageTime[i]}</td>
                    <td class="std" data-message-id="${messageId[i]}"><i class="cDel">删除</i></td>
                </tr>`
    }
    $(xTable).html(str);

    var xStd=document.querySelectorAll('.std');
    for(let j=0;j<xStd.length;j++){
        xStd[j].onclick=function(){
            ajax.get("../sql/del-message.php?id=" + this.getAttribute('data-message-id'));
            location.reload(true);
        }
    }
}




var ajax = {};
ajax.get = function(url,fn){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            if(typeof fn === 'function'){
                fn(xhr.responseText);
            }
        }
    }
}
ajax.post = function(url,data,fn){
    var xhr = new XMLHttpRequest();
    xhr.open('POST',url,true);
    //设置请求头
    xhr.setRequestHeader("content-type","application/x-www-form-urlencode;charset=utf-8");
    xhr.send(data); // key=value&key=value
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            if(typeof fn === 'function'){
                fn(xhr.responseText);
            }
        }
    }
}
