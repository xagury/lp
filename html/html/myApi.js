//随机数取整  min 最小值、   max   最大值。
function randomNum(min,max){
	return parseInt(Math.random() * ( max - min ) + min);
}


//封装数组排序方法
function orderArr(arr){
	for(var i = 0 ; i < arr.length ; i++){
		for(var j = i + 1 ; j < arr.length ; j++){
			if(arr[i] > arr[j]){
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}


//数组元素去重！！
function norepeat(arr){
	for(var i = 0 ; i < arr.length ; i++){
		for(var j = i + 1 ; j < arr.length ; j++){
			if(arr[i] == arr[j]){
				arr.splice(j,1);
				j--;
			}
		}
	}
		return arr;
}

//按照从小到大的排序，将数据插入数组
function insert(arr,n){
	var flag = true;
	for(var i = 0 ; i < arr.length ; i++){
		if(arr[i] > n){
			arr.splice(i,0,n);
			flag = false;
			break;
		}
	}
	if(flag == true){
		arr.push(n)
	}
	return arr;
}


//随机颜色
function randomColor(){
	var str = '0123456789abcdef';
	var color = '#';
	for(var i = 0 ; i < 6 ; i++){
		var num = parseInt(Math.random() * 16);
		color += str.charAt(num);
	}
	return color;
}


//时间上补0
//补零
function mendZero(n){
	if(n < 10){
		return '0' + n;
	}else{
		return n;
	}
}


//返回顶部
function goTop(){
	var st = document.documentElement.scrollTop || document.body.scrollTop;
	var timer = setInterval(function(){
		st-=50;
		document.documentElement.scrollTop = document.body.scrollTop = st;
		if(st <= 0){
			clearInterval(timer);
		}
	},10)
}


//获取非行间样式
function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr];
	}else{
		return getComputedStyle(ele,null)[attr];
	}
}



/*封装阻止浏览器默认行为*/
function preventDefault(e){
	return e.preventDefault ? e.preventDefault() : e.returnValue = false;
}


//封装事件监听
function addEventListener(ele,eType,fn){
	if(ele.addEventListener){
		return ele.addEventListener(eType,fn)
	}else{
		return ele.attachEvent('on'+eType,fn)
	}
}


//封装阻止事件冒泡
function stopPropagation(e){
	return e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
}