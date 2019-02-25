
function setCookie(cName,cValue,expires){
		var d = new Date();
		d.setDate(d.getDate() + Number(expires));
		document.cookie=cName+'='+cValue+';path=/lp;expires='+d.toGMTString();
	}

	function readCookie(cName){
		var allCookie = document.cookie;
		var arrCookie = allCookie.split('; ');
		for(var i = 0 ; i < arrCookie.length ;i++){
			var items = arrCookie[i].split('=');
			if(cName == items[0]){
				return items[1];
			}
		}
	}
	//删除cookie
	function deleteCookie(cName){
		setCookie(cName,null,-1);
	}



	function moreMove(ele,attr,iTarget,fn){
		//关闭定时器   ele.timer    对象私有的定时器
		clearInterval(ele.timer);
		//开启定时器
		ele.timer = setInterval(function(){
			//获取运动的属性
			var iCur = getStyle(ele,attr)
			//判断属性是否为opacity；
			if(attr == 'opacity'){    //0.3
				iCur = iCur * 100;    //30
			}else{
				iCur = parseInt(iCur);
			}
			//设置速度
			var speed = (iTarget - iCur) / 8;
			//速度取整
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//终止条件的判断
			if(iCur == iTarget){
				clearInterval(ele.timer);
				if(fn){

					fn();
				}
			}else{
				//因为透明的设置方式和其他的设置方式不同。所用要对属性做一个判断
				if(attr == 'opacity'){
					ele.style.opacity = (iCur + speed) / 100;
					ele.style.filter = 'alpha(opacity='+(iCur + speed)+')'
				}else{
					ele.style[attr] = iCur + speed +'px';
				}
			}
		},30)
	}


	function chainMove(ele,attr,iTarget,fn){
		//关闭定时器
		clearInterval(ele.timer);
		//开启定时器
		ele.timer =setInterval(function(){
			//获取运动属性值
			var iCur = getStyle(ele,attr);
			//判断属性是否为透明
			if(attr == 'opacity'){
				iCur *=100;
			}else{
				iCur =parseInt(iCur)
			}
			//速度
			var speed = (iTarget - iCur)/8;
			//处理边界误差
			speed = speed>0?Math.ceil(speed):Math.floor(speed)
			//判断终止条件
			if(iCur == iTarget){
				clearInterval(ele.timer);
				if(fn){
					fn();

				}
			}else {
				if(attr == 'opacity'){
					ele.style.opacity = (iCur + speed) /100;
					ele.style.filter = 'alpha(opacity'+iCur + speed+')';
				}else{
					ele.style[attr] = iCur + speed +'px'
				}
			}
		},30)
	}

	function move(ele,json,fn){
		//关闭定时器
		clearInterval(ele.timer);
		//开启定时器
		ele.timer = setInterval(function(){
			//定时开关
			var bStop=true;

			//传进对象遍历
			for(attr in json){
				//获取属性值
				var iCur = getStyle(ele,attr);
				if(attr == 'opacity'){
					iCur *=100;
				}else{
					iCur = parseInt(iCur);
				}
				var speed =(json[attr]-iCur)/8;
				speed = speed > 0 ?Math.ceil(speed):Math.floor(speed);
				if(json[attr]!= iCur){
					bStop = false;
				}
				if(attr == 'opacity'){
					ele.style.opacity = (iCur +speed)/100;
					ele.style.filter ='alpha(opacity='+(iCur +speed)+')'
				}else{
					ele.style[attr] = iCur + speed +'px';
				}
			}
			if(bStop){
				clearInterval(ele.timer);
				if(fn){

					fn();
				}
			}
		},30)
	}


	//ajax
function ajax(url,fnWin,fnFaild) {
	var xhr=window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")

	xhr.open("GET",url,true);
	xhr.send();
	xhr.onreadystatechange = function () {
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				if(typeof fnWin === 'function'){
					fnWin(xhr.responseText);
				}
			}else{
                if(typeof fnFaild === 'function'){
                    fnFaild();
                }

			}
		}
    }


}

//表格分页
function goPage(pno,psize){
    var itable = document.getElementById("idData");
    var num = itable.rows.length;//表格所有行数(所有记录数)
    var totalPage = 0;//总页数
    var pageSize = psize;//每页显示行数
    //总共分几页
    if(num/pageSize > parseInt(num/pageSize)){
        totalPage=parseInt(num/pageSize)+1;
    }else{
        totalPage=parseInt(num/pageSize);
    }
    var currentPage = pno;//当前页数
    var startRow = (currentPage - 1) * pageSize+1;//开始显示的行
    var endRow = currentPage * pageSize;//结束显示的行
    endRow = (endRow > num)? num : endRow;

    //遍历显示数据实现分页
    for(var i=1;i<(num+1);i++){
        var irow = itable.rows[i-1];
        if(i>=startRow && i<=endRow){
            irow.style.display = "block";
        }else{
            irow.style.display = "none";
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

    if(currentPage<totalPage){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+psize+")\">下一页></a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(totalPage)+","+psize+")\">尾页</a>";
    }else{
        tempStr += "<span>下一页></span>";
        tempStr += "<span>尾页</span>";
    }

    document.getElementById("barcon").innerHTML = tempStr;

}
