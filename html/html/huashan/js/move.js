	function getStyle(ele,attr){
		if(ele.currentStyle){
			return ele.currentStyle[attr];
		}else{
			return getComputedStyle(ele,null)[attr]
		}
	}
	//{width : '500', height: '600'}
	function move(ele,json,fn){
		//关闭定时器
		clearInterval(ele.timer)
		//开启定时器
		ele.timer = setInterval(function(){
			//定时开关（控制是否关闭定时器。结束运动）
			var bStop = true;
			//对传进来的对象进行遍历
			for(attr in json){
				//获取每个变化属性的初始值
				var iCur = getStyle(ele,attr);
				//判断是否为opacity
				if(attr == 'opacity'){
					iCur *= 100;
				}else{
					iCur = parseInt(iCur);
				}
				//设置速度  （目标值 - 初始值）/ 8
				var speed = (json[attr] - iCur) / 8;
				//速度取整
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				//判断终止条件 (如果所有属性运动不完，把bStop = false);

				if(json[attr] != iCur){
					bStop = false;
				}

				//判断是否能为opacity
				if(attr == 'opacity'){
					ele.style.opacity = (iCur + speed) / 100;
					ele.style.filter = 'alpha(opacity='+(iCur + speed)+')'
				}else{
					ele.style[attr] = iCur + speed + 'px';
				}
			}

			if(bStop){
				clearInterval(ele.timer)
				//做回调函数的判断（链式运动）
				if(fn){
					fn();
				}
			}
		},30)
	}