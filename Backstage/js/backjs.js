


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
    xShopDt.onclick = function(){
        dtOnclick('.aside-shop',1);

    }
    xDetailDt.onclick = function(){
        dtOnclick('.aside-detail',2);

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
//allshop
function allTableShop(){
    var xTable = document.querySelector('.content table');
    var str='';
    for(var i = 0; i < count;i++){
        str +=`<tr>
		        	<td>${shopId[i]}</td>
			        <td>${shopName[i]}</td>
			        <td>${shopDesc[i]}</td>
			        <td>${shopUrl[i]}</td>
			        <td>${shopPrice[i]}</td>
			        <td class='std' data-shop-id="${shopId[i]}"><i class="cLook">查看</i><b class="cDel">删除</b></td>
        		</tr>`
    }
    $(xTable).html(str);
    var xStd=document.querySelectorAll('.std');
    var oDiv = document.createElement('div');
    oDiv.className='commentDiv';
    oDiv.style.cssText ="box-shadow:0 0 5px #BF1E40;display:none;text-align:center;width:300px;height:300px;position:absolute;left:0;top:140px;margin:auto;right:0;background:rgba(255,255,255,0.9)";
    document.body.appendChild(oDiv);
    for(let j=0;j<xStd.length;j++){
        xStd[j].onclick=function(e){
            var e = e || window.event;
            var target = e.srcElement || e.target;
            if(target.tagName == 'B' && target.className=='cDel'){
                ajax.get("../sql/del-shop.php?id=" + this.getAttribute('data-shop-id'));
                location.reload(true);
            }
        }
        xStd[j].onmouseover=function(e){
            var e = e || window.event;
            var target = e.srcElement || e.target;

            if(target.tagName == 'I' && target.className=='cLook'){
                oDiv.style.display='block';
                ajax.get("../sql/select-shop.php?id=" + this.getAttribute('data-shop-id'),function (data) {
                    let obj = JSON.parse(data);

                    var str1 =`
                    <div class='cBox' style="">
                         <span>编号:</span><p>${obj.shopId}</p>
                         <span>名称:</span><p>${obj.shopName}</p>
                         <span>简介:</span><p>${obj.shopDesc}</p>
                         <span>路径:</span><p>${obj.shopUrl}</p>
                         <span>价格:</span><p>${obj.shopPrice}</p>                       
                    </div>`

                    oDiv.innerHTML=str1;
                });
            }
        }
        xStd[j].onmouseout=function(e){
            var e = e || window.event;
            var target = e.srcElement || e.target;

            if(target.tagName == 'I' && target.className=='cLook'){

                oDiv.style.display='none';

            }
        }
    }

}

//allorder
function allTableOrder(){
    var xTable = document.querySelector('.content table');
    var str='';
    for(var i = 0; i <count;i++){
        str +=`<tr>
                <td>${orderId[i]}</td>
                <td>${orderMoney[i]}</td>
                <td class='xComplete'>${orderComplete[i]}</td>
                <td>${orderTime[i]}</td>
                <td>${userId[i]}</td>
                <td  class='std' data-update-id="${orderId[i]}"><a href="#">发货</a></td>
            </tr>`

    }
    $(xTable).html(str);
    for(let j=0;j<count;j++){

        if(orderComplete[j] === 'true'){

            var xA =document.querySelectorAll('.std');
            xA[j].innerHTML='已发货';
            xA[j].style.backgroundColor='rgba(0,0,0,0)';
            xA[j].style.color='#fff';
            xA[j].style.font='100 14px/40px ""';
        }
    }

    var xBtn =document.querySelectorAll('.content table tr .std');
    var xComplete =document.querySelectorAll('.content table tr .xComplete');
    for(let k=0;k<xBtn.length;k++){
        xBtn[k].onclick=function(){
            alert('是否发货?');
            xBtn[k].innerHTML='已发货';
            xBtn[k].style.backgroundColor='rgba(0,0,0,0)';
            xComplete[k].innerHTML=true;
            ajax.get("../sql/update-order.php?id=" + this.getAttribute('data-update-id'))

        }
    }

}

//allTableUser
function allTableUser() {
    var str='';
    for(var i = 1 ; i < count ; i++){
        str +=`<tr><td>${myId[i]}</td>
                    <td>${myName[i]}</td>
                    <td>${myPsd[i]}</td>
                    <td>${mySex[i]}</td>
                    <td>${myPhone[i]}</td>
                    <td style='width:132px'>${myMail[i]}</td>
                    <td class='std' data-user-id="${myId[i]}"><i class="cLook">查看</i><b class="cDel">删除</b></td>
                </tr>`;//

    }

    var xTable = document.querySelector('section .content table');

    $(xTable).html(str);
    var xStd=document.querySelectorAll('.std');
    var oDiv = document.createElement('div');
    oDiv.className='commentDiv';
    oDiv.style.cssText ="box-shadow:0 0 5px #BF1E40;display:none;text-align:center;width:300px;height:300px;position:absolute;left:0;top:140px;margin:auto;right:0;background:rgba(255,255,255,0.9)";
    document.body.appendChild(oDiv);
    for(let j=0;j<xStd.length;j++){
        xStd[j].onclick=function(e){
            var e = e || window.event;
            var target = e.srcElement || e.target;
            if(target.tagName == 'B' && target.className=='cDel'){
                ajax.get("../sql/del-user.php?id=" + this.getAttribute('data-user-id'));
                location.reload(true);
            }
        }
        xStd[j].onmouseover=function(e){
            var e = e || window.event;
            var target = e.srcElement || e.target;

            if(target.tagName == 'I' && target.className=='cLook'){
                oDiv.style.display='block';
                ajax.get("../sql/select-user.php?id=" + this.getAttribute('data-user-id'),function (data) {
                    let obj = JSON.parse(data);

                    var str1 =`
                    <div class='cBox' style="">
                         <span>编号:</span><p>${obj.userId}</p>
                         <span>名字:</span><p>${obj.userName}</p>
                         <span>性别:</span><p>${obj.userSex}</p>
                         <span>手机号:</span><p>${obj.userPhone}</p>
                         <span>邮箱:</span><p>${obj.userMail}</p>                       
                    </div>`

                    oDiv.innerHTML=str1;
                });
            }
        }
        xStd[j].onmouseout=function(e){
            var e = e || window.event;
            var target = e.srcElement || e.target;

            if(target.tagName == 'I' && target.className=='cLook'){

                oDiv.style.display='none';

            }
        }
    }
}


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
//allcomment
function allTableComment(e){
    var xTable = document.querySelector('.content table');
    var str='';
    console.log(commentContent)
    for(var i = 0; i <count;i++){
        str +=`<tr>
        		<td>${commentId[i]}</td>
	        	<td>${commentTitle[i]}</td>
	        	<td>${commentContent[i]}</td>
	        	<td>${commentTime[i]}</td>
	        	<td>${shopId[i]}</td>
	        	<td>${userId[i]}</td>
	        	<td class='std' data-comment-id="${commentId[i]}"><i class="cLook">查看</i><b class="cDel">删除</b></td>
        	</tr>`
    }
    $(xTable).html(str);
    var xStd=document.querySelectorAll('.std');
    var oDiv = document.createElement('div');
    oDiv.className='commentDiv';
    oDiv.style.cssText ="box-shadow:0 0 5px #BF1E40;display:none;text-align:center;width:300px;height:300px;position:absolute;left:0;top:140px;margin:auto;right:0;background:rgba(255,255,255,0.9)";
    document.body.appendChild(oDiv);
    for(let j=0;j<xStd.length;j++){
        xStd[j].onclick=function(e){
            var e = e || window.event;
            var target = e.srcElement || e.target;
            if(target.tagName == 'B' && target.className=='cDel'){
                ajax.get("../sql/del-comment.php?id=" + this.getAttribute('data-comment-id'));
                location.reload(true);
            }
            // if(target.tagName == 'I' && target.className=='cLook'){
            //     oDiv.style.display='block';
            //     ajax.get("../sql/select-comment.php?id=" + this.getAttribute('data-comment-id'),function (data) {
            //         let obj = JSON.parse(data);
            //
            //             var str1 =`
            //         <div class='cBox' style="">
            //              <span>标题:</span><p>${obj.commentTitle}</p>
            //              <span>内容:</span><p>${obj.commentContent}</p>
            //              <span>商品:</span><p>${obj.userId}</p>
            //              <span>用户:</span><p>${obj.userId}</p>
            //              <span>时间:</span><p>${obj.commentTime}</p>
            //         </div>`
            //
            //         oDiv.innerHTML=str1;
            //     });
            // }
        }
        xStd[j].onmouseover=function(e){
            var e = e || window.event;
            var target = e.srcElement || e.target;

            if(target.tagName == 'I' && target.className=='cLook'){
                oDiv.style.display='block';
                ajax.get("../sql/select-comment.php?id=" + this.getAttribute('data-comment-id'),function (data) {
                    let obj = JSON.parse(data);

                    var str1 =`
                    <div class='cBox' style="">
                         <span>标题:</span><p>${obj.commentTitle}</p>
                         <span>内容:</span><p>${obj.commentContent}</p>
                         <span>商品:</span><p>${obj.shopId}</p>
                         <span>用户:</span><p>${obj.userId}</p>
                         <span>时间:</span><p>${obj.commentTime}</p>                       
                    </div>`

                    oDiv.innerHTML=str1;
                });
            }
        }
        xStd[j].onmouseout=function(e){
            var e = e || window.event;
            var target = e.srcElement || e.target;

            if(target.tagName == 'I' && target.className=='cLook'){

                oDiv.style.display='none';

            }
        }
    }
}


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

//allmessage
function allTableMessage(){
    var xTable = document.querySelector('.content .xtable');
    var str='';
    for(var i = 0; i < count;i++){
        str +=`<tr class='str'>
	        	<td>${messageId[i]}</td>
	        	<td>${messageTitle[i]}</td>
	        	<td>${messageCon[i]}</td>
	        	<td>${messageUrl[i]}</td>
	        	<td>${messageTime[i]}</td>
	        	<td>${userId[i]}</td>
	        	<td class='std' data-message-id="${messageId[i]}"><i class="cLook">查看</i><b class="cDel">删除</b></td>
        	</tr>`
    }
    $(xTable).html(str);

    var xStd=document.querySelectorAll('.std');
    var oDiv = document.createElement('div');
    oDiv.className='commentDiv';
    oDiv.style.cssText ="box-shadow:0 0 5px #BF1E40;display:none;text-align:center;width:300px;height:300px;position:absolute;left:0;top:140px;margin:auto;right:0;background:rgba(255,255,255,0.9)";
    document.body.appendChild(oDiv);
    for(let j=0;j<xStd.length;j++){
        xStd[j].onclick=function(e){
            var e = e || window.event;
            var target = e.srcElement || e.target;
            if(target.tagName == 'B' && target.className=='cDel') {
                ajax.get("../sql/del-message.php?id=" + this.getAttribute('data-message-id'));
                location.reload(true);
            }
        }
        xStd[j].onmouseover=function(e){
            var e = e || window.event;
            var target = e.srcElement || e.target;

            if(target.tagName == 'I' && target.className=='cLook'){
                oDiv.style.display='block';
                ajax.get("../sql/select-message.php?id=" + this.getAttribute('data-message-id'),function (data) {
                    let obj = JSON.parse(data);

                    var str1 =`
                    <div class='cBox' style="">
                        <span>图片:</span><p>${obj.messageUrl}</p>
                         <span>标题:</span><p>${obj.messageTitle}</p>
                         <span>内容:</span><p>${obj.messageCon}</p>
                         <span>用户:</span><p>${obj.userId}</p>
                         <span>时间:</span><p>${obj.messageTime}</p>                       
                    </div>`

                    oDiv.innerHTML=str1;
                });
            }
        }
        xStd[j].onmouseout=function(e){
            var e = e || window.event;
            var target = e.srcElement || e.target;

            if(target.tagName == 'I' && target.className=='cLook'){

                oDiv.style.display='none';

            }
        }
    }

}


//user delete
function delUser(){


    var xBtn=document.querySelector('#btn');
    var xDel=document.querySelector('#delContent');


    xBtn.onclick=function () {
        var xId=document.getElementById('id');

        var id = xId.value;
        console.log(id);
        ajax.get(`../sql/select-user.php?id=${id}`,function (data) {
            let obj = JSON.parse(data);

            var str1 =`
                    <div class='cBox' style="">
                         <span>编号:</span><p>${obj.userId}</p>
                         <span>名字:</span><p>${obj.userName}</p>
                         <span>性别:</span><p>${obj.userSex}</p>
                         <span>手机号:</span><p>${obj.userPhone}</p>
                         <span>邮箱:</span><p>${obj.userMail}</p>
                    </div>`

            xDel.innerHTML=str1;
        });
        xDel.style.display='block';
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
