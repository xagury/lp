//message-detail.php
function messageDetail(){
    var oMessage = document.querySelector('main section .content .message');
    var xTxt=document.querySelector('.txt');
    var xBtn=document.querySelector('.btn');
    var xBox=document.querySelector('.content1');

    var str='';
    var date= new Date();
    for(var i = 0; i < 10 ; i++){
        str += `<div class='mContent'>
                    <div class='topM'>
                    <p>软软</p>
                    </div>
                    <div class='topB'>
                        <span class='topB1'>No.<b>${i+1}</b></span>
                        <span class='topB2'>发表者:<i>软软</i></span>
                        <span class='topB3'>发表时间:<em>${stringDate(date)}</em></span>
                    </div>
                </div>`
    }
    oMessage.innerHTML = str;

    var j=11;
    xBtn.onclick=function(){
        var date= new Date();
        str = `<div class='mContent'>
                    <div class='topM'>
                    <p>${xBox.innerHTML}</p>
                    </div>
                    <div class='topB'>
                        <span class='topB1'>No.<b>${j++}</b></span>
                        <span class='topB2'>发表者:<i>${xTxt.value}</i></span>
                        <span class='topB3'>发表时间:<em>${stringDate(date)}</em></span>
                    </div>
                </div>`
        oMessage.innerHTML +=str;
    }
}


//上传图片显示背景图
function changepic() {
    var reads= new FileReader();
    var f=document.getElementById('file').files[0];
    reads.readAsDataURL(f);
    reads.onload=function (e) {
        document.getElementById('show').src=this.result;
    };


}

//message.html

function xMessage(){
    var str='';
    var oWrap = document.querySelector('.wrap')
    ajax.get('sql/message.php',function (data) {
        let arr = JSON.parse(data);
        for(var i = 0 ; i < arr.length ; i++){
            str += `<div class='grid box' id='${arr[i].messageId}'>
            <h3>${arr[i].messageTitle}</h3>
            <img src="${arr[i].messageUrl}">
            <p><a href="#">${arr[i].messageCon}</a></p>
            </div>`
        }
        oWrap.innerHTML = str;
        var oBox = document.querySelectorAll('.box');
        var oP = document.querySelectorAll('.box p');
        for(let k = 0 ; k < oBox.length ; k++){
            oBox[k].style.borderColor = 'rgba(191,30,64,' + ( Math.random() * 0.5 + 0.25 ) + ')';
            oBox[k].onmouseover=function(){
                move(oBox[k],{opacity:100});
            }
            oBox[k].onmouseleave=function(){
                move(oBox[k],{opacity:50});
            }
            oBox[k].onclick=function() {
                const id = oBox[k].getAttribute("id");
                location.href = `message-detail.php?id=${id}`;
            }
        }


    })
}
