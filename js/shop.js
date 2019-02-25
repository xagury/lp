
//shop.php
function shop() {
    var oList =document.querySelector('#list');
    var goodStr = '';

    for(var i = 0 ; i < count ; i ++){
        goodStr +=`<li>
            <div class="box" id="${shopId[i]}">
            <img src="${shopUrl[i]}">
            <p class="pirce">￥${shopPrice[i]}</p>
            <p class="mainTitle">${shopDesc[i]}</p>
            </li>`
    }
    oList.innerHTML += goodStr;
    //单击跳转到商品详情界面

    var xBox=document.querySelectorAll('#list li');
    var xBox1=document.querySelectorAll('#list li .box');
    console.log(xBox);
    for(let j=0;j<xBox.length;j++){
        const id=xBox1[j].getAttribute("id");
        xBox[j].onclick=function(){console.log(1);window.location.href=`shop-detail.php?id=${id}`;}
    }



}

//shop分页
function goPage(pno,psize){
    var xBox=document.querySelectorAll('#list li');

    var num = xBox.length;//表格所有行数(所有记录数)
    var totalPage = 0;//总页数
    var pageSize = psize;//每页显示行数
    //总共分几页
    if(num/pageSize > parseInt(num/pageSize)){
        totalPage=parseInt(num/pageSize)+1;
    }else{
        totalPage=parseInt(num/pageSize);
    }
    var currentPage = pno;//当前页数
    var startRow = (currentPage - 1) * pageSize +1;//开始显示的行
    var endRow = currentPage * pageSize;//结束显示的行
    endRow = (endRow > num)? num : endRow;

    //遍历显示数据实现分页
    for(var i=1;i<(num+1);i++){

        if(i>=startRow && i<=endRow){
            xBox[i-1].style.display = "block";
        }else{

            xBox[i-1].style.display = "none";
        }
    }
    var pageEnd = document.getElementById("pageEnd");
    var tempStr = "<span>共"+num+"条记录</span> <span>分"+totalPage+"页</span> <span>当前第"+currentPage+"页</span>";
    if(currentPage>1){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(1)+","+psize+")\">首页</a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+psize+")\"><上一页</a>"
    }else{
        tempStr += "<span>首页</span>";
        tempStr += "<span><上一页</span>";
    }
    // for(var pageIndex= 1;pageIndex<totalPage+1;pageIndex++){
    //     tempStr += "<a href=\"#\" onclick=\"goPage("+psize+")\">"+ pageIndex +"</a>";
    // }
    if(currentPage<totalPage){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+psize+")\">下一页></a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(totalPage)+","+psize+")\">尾页</a>";
    }else{
        tempStr += "<span>下一页></span>";
        tempStr += "<span>尾页</span>";
    }

    document.getElementById("barcon").innerHTML = tempStr;

}