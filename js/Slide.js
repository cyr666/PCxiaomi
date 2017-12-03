function slide(elem,ind,d){
	this.elem = elem;
	this.w = parseInt(getStyle(elem,"width"))
	this.h = parseInt(getStyle(elem,"height"))
	var a = this.elem.children
	this.ul = a[0];
	this.ol = a[1];
	this.lbp1 = a[2];
	this.rbp2 = a[3];
	this.lbp1.style.top = this.rbp2.style.top = (this.h - this.lbp1.offsetHeight)/2+"px"
	
	this.uls = Array.from(this.ul.children)
	this.l = (Array.from(this.ul.children)).length;//ul下面有几个li，可根据它计算ul的宽度
	//console.log(this.l)
	//this.x = this.ul.style.width = (this.w)*(this.l+1)+"px" 
	
	this.spans = Array.from(this.ol.getElementsByTagName("span"));//得到ol下所有的span节点
	//console.log(typeof(this.spans))
	//this.ul.innerHTML += this.ul.children[0].outerHTML
	
	var that = this;//将this的值赋给that
	this.num = ind
	this.d = d
	this.pre = this.ul.style.left;
	
	that.move = function(){
		var  l=that.l,btns=that.spans,btn;
		for( let i =0;i<l;i++){
//			btn = btns[i];
//			btn.i = i;
			btns[i].onclick = function(){
				//startMove(that.ul,{"left":-that.w*i})
				that.num = i;
				that.tab();
			}
		}
			this.lbp1.onclick = function(){
				that.num--;
				that.d = -1;
				if(that.num == -1){
					that.num = that.l-1;
				}
				that.tab();
				
			}
			this.rbp2.onclick = function(){
				that.num++;
				that.d = 1;
				
				that.tab();
				
			}
		this.lbp1.onmousedown =	this.rbp2.onmousedown = function(){
			return false
		}
	}
	
	that.tab = function(){	
		/*
		that.ul.style.left = that.pre + "px" //每次运动的时候先瞬间定位到上一次的位置，再进行运动
	if( that.num==that.l ){ // 进入到最后一张补充的图片（实际上是第一张图片）
		that.pre = 0;
		startMove(that.ul, {"left":-that.w*that.num}, function(){
			that.ul.style.left = "0px";	// 当最后一张补充的图片的运动效果走完之后，瞬间定位到第一张图片
		});
		
		that.num = 0;
	}else if(that.num==-1){
		that.num = that.l-1;
		that.ul.style.left = -that.w*(that.l)+"px"
		that.pre = -that.num*that.w;
		startMove(that.ul, {"left":that.pre});
		
	}else{
		that.pre = -that.num*that.w;
		startMove(that.ul, {"left":that.pre});
	}*/
	/* 透明轮播*/
	
	that.uls.forEach(function(li,index){
		//that.uls[index].style.display = "none";
		startMove(that.uls[index],{"opacity":0})
	})
	if(that.num == that.l){
		that.num=0;
	}
		that.uls[that.num].style.display = "block";
		startMove(that.uls[that.num],{"opacity":100})
		
	
	
	
	// 清除所有按钮的样式
	that.spans.forEach(function(span){
		span.className = "";
	});
	// 设置当前按钮的样式
	that.spans[that.num].className = "selected";
}
	this.zidong = function(){
		
//				that.num+=that.d;
//				that.tab()
		if(that.d==1){
			that.num++;
			if(that.num>that.l-1){
				that.num=0
			}
			that.tab()
		}
		if(that.d==-1){
			that.num--;
			if(that.num==-1){
				that.num=that.l-1
			}
			that.tab()
		}
		if(that.d==0){that.tab()}
			
	}
	this.timer = setInterval(that.zidong,3000);
	this.elem.onmouseover = function(){
		clearInterval(that.timer)
		startMove(that.lbp1,{"opacity":100})
		startMove(that.rbp2,{"opacity":100})
	}
	this.elem.onmouseout = function(){
		that.timer = setInterval(that.zidong,3000);
		startMove(that.lbp1,{"opacity":0})
		startMove(that.rbp2,{"opacity":0})
	}
	
	that.tab();
	that.move()
	
}
