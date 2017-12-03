var arr = getCookie("phone");
var Dphone = arr[0]
//判断账号和密码的cookie是否存在
if(arr){
	$(".user").html(Dphone)
}else{
	$(".user").html("登录").bind("click",function(){
		window.location.href = "../html/denglu.html"
	})
}
//判断小米6手机是否存在


$.ajax({
	type:"get",
	url:"../js/dizhi.json",
	async:true,
	success:function(data){
		var n;
		console.log(data)
		data.forEach(function(obj){
			var col = getCookie("g_phone"+obj.id)
			if(col){
				var ul = document.createElement("ul");
				ul.style.width = "1245px";
				ul.style.overflow = "hidden";
				ul.style.marginTop = "20px";
				var tme = document.createDocumentFragment();
				var div1_check = document.createElement("div");
				var input1 = document.createElement("input");
				input1.type = "checkbox";
				div1_check.appendChild(input1);
				tme.appendChild(div1_check)
				div1_check.className = "car_check";
				//创建图片
				var div2_check = document.createElement("div");
				var img1 = document.createElement("img");
				div2_check.className = "car_img";
				div2_check.style.height = "86px";
				div2_check.appendChild(img1);
				tme.appendChild(div2_check);		
				img1.src = col.imgs
				img1.style.width = "120px";
				img1.style.height = "86px";
				//创建商品名称
				var div3_check = document.createElement("div");
					div3_check.className = "car_name";
					div3_check.innerHTML = col.title;
					tme.appendChild(div3_check);
				//创建商品单价	
				var div4_check = document.createElement("div");
					div4_check.className = "car_price";
					div4_check.innerHTML = col.price;
					tme.appendChild(div4_check);	
				//创建商品数量
				var div5_check = document.createElement("div");
					div5_check.className = "car_num";
				//减号
				var btn1 = document.createElement("input")
					btn1.type = "button";
					btn1.value = "-";	
					btn1.style.width = "20px";
					btn1.style.height = "39px";
					div5_check.appendChild(btn1);
				btn1.onclick = function(){
						
						col.num=col.num-1;
						
//					input2.value = parseInt(col.num);
						if( col.num<1 ){
							// 如果数量小于1，则删除cookie
							setCookie("g_phone"+col.id, "", -1);
							// 在table中删除tr
							list.removeChild(ul)
						}else{
						setNum(input2, col, div6_check);
						}
				}
				n=col.num;
				var input2 = document.createElement("input");
					input2.value = parseInt(col.num);
					input2.style.width = "60px";
					input2.style.height = "35px";
					input2.style.textAlign = "center";
					div5_check.appendChild(input2);
					input2.onblur = function(){
						if( /^\d+$/.test(this.value) ){
							col.num = Number(this.value);
							setNum(input2, col, div6_check);
						}else{
							this.value = col.num;
						}
					}
				var btn2 = document.createElement("input");
					btn2.value = "+";
					btn2.type = "button";
					btn2.style.width = "20px";
					btn2.style.height = "39px";
					div5_check.appendChild(btn2);
				btn2.onclick = function(){
					col.num=parseInt(col.num)+1;
//					input2.value = parseInt(col.num);
//					console.log(obj.id)
                 	setNum(input2, col, div6_check);
				}
					tme.appendChild(div5_check);	
					
				//创建小计
				var div6_check = document.createElement("div");
					div6_check.className = "car_total";
					div6_check.innerHTML = parseInt(col.price)*col.num+"元";
					tme.appendChild(div6_check);
				//创建操作 删除
				var div7_check = document.createElement("div");
					div7_check.className = "car_action";
					div7_check.innerHTML = "×"
					tme.appendChild(div7_check);
					ul.appendChild(tme);
					div7_check.onclick = function(){
						if(confirm("您确定要删除该商品吗？")){
							list.removeChild(ul)
						}
					}
					$(".list_body").append(ul);					
						}
				function setNum(input2, col, div6_check){
					// 对输入框进行更新
					input2.value = col.num;
					// 对cookie进行更新
					setCookie( "g_phone"+col.id, col );
					// 对总价进行更新
					div6_check.innerHTML = parseInt(col.price )* col.num+"元";
				}

		})

		
		var che = [];var money=0;
		var arrc = document.querySelectorAll("ul input[type='checkbox']");
		var len = arrc.length;
		$(".O_span1").html(len)
		arrc.forEach(function(btn,ind){
			btn.onclick = function(){
				
				if(btn.checked){
					che.push(btn);
					money=money+parseInt(data[ind].price)
					var ul = btn.parentNode.parentNode
					var count = ul.getElementsByClassName("car_total")[0].innerHTML
					var n = getCookie("g_phone"+data[ind].id).num;
					money+=parseInt(count)
					console.log(parseInt(count))
					console.log(getCookie("g_phone"+data[ind].id))
					$(".O_span3").html(money)
				}else{
					che.pop(btn)
//					console.log(data[ind])
				}
				$(".O_span2").html(che.length)
				console.log(che.length)
			}
//			money+=money
//			console.log(money)
		})
	
	all.onclick = function(){
	var v = this.checked;
	var arr = document.querySelectorAll("ul input[type='checkbox']");
	for( var i=0,l=arr.length; i<l; i++ ){
		arr[i].checked = v;
	}
}
	
	}
	
	
});


	





console.log()
