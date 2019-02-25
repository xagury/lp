
function cartBuy() {
    var oList =document.querySelector('#list tbody');
    //读取cookie;
    var goodCookie = JSON.parse(readCookie('gcart'));
    var str = '';
    ajax.get("sql/cart.html",function (data) {
        let arr = JSON.parse(data);
        console.log(arr);

        for(var i = 0 ; i < arr.length; i++){
            for(var key in goodCookie){
                if(arr[i].shopId == key){
                    str += `<tr>
                        <td class='buyImg'><img src="${arr[i].shopUrl}"></td>
                        <td class='buyPrice'>￥${arr[i].shopPrice}</td>
                        <td class='buyNum'>${readCookie('sum')}</td>
                        <td class='buyTotal'>￥${arr[i].shopPrice *goodCookie[key]}</td>
                    </tr>`
                    var mTotal=arr[i].shopPrice *goodCookie[key];
                }
            }
        }
        console.log(mTotal)
        oList.innerHTML += str;
        let xT=document.querySelector('.Total');
        let xTT=document.querySelector('.buyTotal');
        xT.innerHTML= xTT.innerHTML;

        addWQ();
        function addWQ(){

            let xCooiename = readCookie('name');
            // let xImg=document.querySelector('.buyImg')
            // let xPrice=document.querySelector('.buyPrice')
            // let xNum=document.querySelector('.buyNum')
            let xTotal=document.querySelector('.buyTotal')
            var xTxt=document.querySelector('.site');
            var xBtn=document.querySelector('.xTotal');
            var input  = /^[\s]*$/;
            if(input.test(xTxt.value)){
                alert('请输入正确的收货地址');
            }
            //给按钮添加点击事件
            xBtn.onclick = function(){
                // var str = '';
                // str=mTotal;
                console.log(mTotal);
                console.log(xCooiename);
                let str = `total=${mTotal}`;
                //设置ajax，将数据传递给后端
                ajax.post('sql/add-order.php',str,function(){
                    // location.reload(); //刷新当前页面
                    console.log('yes')
                })
            }
        }

    })


}
