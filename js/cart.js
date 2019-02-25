
//cart 购物车
function cart() {
    var oList =document.querySelector('#list tbody');
    //读取cookie;
    var goodCookie = JSON.parse(readCookie('gcart'));
    var str = '';
    ajax.get("sql/shop.php",function (data) {
        let arr = JSON.parse(data);
        console.log(arr);


        for(var i = 0 ; i < arr.length; i++){
            for(var key in goodCookie){
                if(arr[i].shopId == key){
                    str += `<tr class="sp">
                         <td><input type="checkbox"/></td>
                         <td><img src="${arr[i].shopUrl}" class="smallPic"></td>
                         <td>￥${arr[i].shopPrice}</td>
                         <td>
                            <button class="minus">-</button>
                            <input type="text" id='sum' value="${goodCookie[key]}" class="num">
                            <button class="plus">+</button>
                         </td>
                         <td class="price" ><span id='price'>${arr[i].shopPrice *goodCookie[key]}</span></td>
                         <td class="del">删除</td>
                    </tr>`
                }
            }
        }
        oList.innerHTML += str;


        oList.onclick =function(e){
            var e =  e || window.event;
            var target = e.srcElement || e.target;
            var xTotal = document.querySelector('.b-total span');
            var sum = document.querySelector('.b-all span');
            var xTotal1 = document.querySelector('.top .total');
            var goodCount=1;
            if(target.tagName == 'BUTTON' && target.className=='plus'){
                target.previousElementSibling.value ++;
                goodCount = target.previousElementSibling.value ;
                sum.innerHTML=target.previousElementSibling.value;
                target.parentNode.nextElementSibling.innerHTML = '￥' + goodCount * target.parentNode.previousElementSibling.innerHTML.substr(1);
                xTotal.innerHTML = target.parentNode.nextElementSibling.innerHTML;
                xTotal1.innerHTML = target.parentNode.nextElementSibling.innerHTML;
            }
            if(target.tagName == 'BUTTON' && target.className=='minus'){
                if(target.nextElementSibling.value > 1){
                    target.nextElementSibling.value--;
                    goodCount = target.nextElementSibling.value ;
                    sum.innerHTML=target.nextElementSibling.value;
                    target.parentNode.nextElementSibling.innerHTML = '￥' + goodCount * target.parentNode.previousElementSibling.innerHTML.substr(1);
                    xTotal.innerHTML = target.parentNode.nextElementSibling.innerHTML;
                    xTotal1.innerHTML = target.parentNode.nextElementSibling.innerHTML;
                }
            }
            if(target.tagName == 'TD' && target.className=='del'){
                target.parentNode.remove();

            }

        }
        let xSum=document.getElementById('sum')
        console.log(xSum.value)
        setCookie('sum',xSum.value,5000);

        let xBb=document.querySelector('.b-btn');
        console.log(xBb);
        xBb.onclick=function () {
            location.href='buy.html';
        }

    })
}