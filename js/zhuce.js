//点击输入框时让选择框显示
var flag = true;
$(".select").bind("click",function(){
	if(flag){
		$(".Bselect").css("display","block");
		flag = false;
	}else{
		$(".Bselect").css("display","none");
		flag = true;
	}
})
//点击li时改变输入框的内容 并隐藏选择框
$("ul>li").bind("click",function(){	
	$(".select").html(this.innerHTML)
	$(".Bselect").css("display","none");
	flag = true;
})

//区号
var flug = true;
	var tem = document.createDocumentFragment();
	diqu.list.forEach(function(obj){
		var li = document.createElement("li")
		li.innerHTML = obj.country;
		tem.appendChild(li);
		li.className = "Ali";
		var span = document.createElement("span");
		span.innerHTML = obj.quhao;
		li.appendChild(span);
		area.appendChild(li);
		span.className = "Aspan";
		li.onclick = function(){
			span1.innerHTML = obj.quhao;
			area.style.display = "none";
			flug = true;
		}
	})
	span1.onclick = function(){
		if(flug){
			area.style.display = "block";
			flug = false;
		}else{
			area.style.display = "none";
			flug = true;
		}
	}
	input1.onfocus = function(){
		area.style.display = "none";
			flug = true;
	}
console.log(diqu.list)

//判断手机号
$("#input1").bind("blur",function(){
	var input = input1.value;
	if(input==""){
		
		$("#meg").css("visibility","visible");
		$("#Mspan").html("请输入手机号码");
		$("#input1").css("outline","1px solid #ff6700")
	}else{
		var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		if(reg.test(input)){
//			setCookie("phone",input,100000)
		}else{
			$("#meg").css("visibility","visible");
			$("#Mspan").html("请输入合法手机号");
			$("#input1").css("outline","1px solid #ff6700")
		}
	}
}).bind("focus",function(){
	$("#meg").css("visibility","hidden");
	$("#input1").css("outline","none")
})
$(".Apass").bind("blur",function(){
	var input3 = input2.value;
	if(input3==""){
		$("#meg1").css("visibility","visible");
		$("#Mspan1").html("请输入密码");
		$("#input2").css("outline","1px solid #ff6700")
	}else{
		var reg = /\d[A-z]|[A-z]\d/
		if(reg.test(input3)){
//			setCookie("pass",input3,100000)
		}else{
			$("#meg1").css("visibility","visible");
			$("#Mspan1").html("请输入有效密码");
			$("#input2").css("outline","1px solid #ff6700")
		}
	}
})

//立即注册
$(".enroll").bind("mouseover",function(){
	
	$(this).css("opacity",0.5)
}).bind("mouseout",function(){
	$(this).css("opacity",1)
}).bind("click",function(){
	var input = input1.value;
	var input3 = input2.value;
	console.log(input3)
	if(input==""){
		$("#meg").css("visibility","visible");
		$("#Mspan").html("请输入手机号码");
		$("#input1").css("outline","1px solid #ff6700")
	}else if(input!=""){
		var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		if(reg.test(input)){
				if(input3==""){
						$("#meg1").css("visibility","visible");
						$("#Mspan1").html("请输入密码");
						$("#input2").css("outline","1px solid #ff6700")
					}else{
						var reg = /\d[A-z]|[A-z]\d/
						if(reg.test(input3)){
							setCookie("phone",[input,input3])
							window.location.href = "../html/denglu.html"
						}else{
							$("#meg1").css("visibility","visible");
							$("#Mspan1").html("请输入有效密码");
							$("#input2").css("outline","1px solid #ff6700")
						}
						
					}
				}else{
					$("#meg").css("visibility","visible");
					$("#Mspan").html("请输入合法手机号");
					$("#input1").css("outline","1px solid #ff6700")
				}
		
		
	}
})
