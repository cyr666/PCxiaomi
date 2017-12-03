var login = getCookie("phone");
var Dphone = login[0]
//判断账号和密码的cookie是否存在
if(login){
	$(".user").html(Dphone)
	$(".load").css({"display":"none"})
}else{
	$(".user").html("登录").bind("click",function(){
		$(".load").css({"display":"block"})
		window.location.href = "../html/denglu.html"
	})
}

//var input1 = document.getElementById("input1");
var flug = true;//flug为true让下拉表显示
var tem = document.createDocumentFragment();
chanpin.list.forEach(function(obj){
	var li = $("<li></li>");
	li.html(obj.product);
	$(tem).append(li);
	var span = $("<span></span>");
	span.html(obj.residue);
	$(li).append(span);
	$("#prd").append(tem)
	span.css({"display":"inline-block","float":"right","color":"#b7b7cd","fontSize":"12px","margin-right":"10px","line-height":"30px"})
	li.css({"line-height":"30px","fontSize":"12px","text-indent":"1em","cursor":"pointer"}).bind("mouseover",function(){
		$(this).css("background","#9D9D9D")
	}).bind("mouseout",function(){
		$(this).css("background","none")
	}).bind("click",function(){
		var str = this.innerHTML;
		var arr = str.split("<span");
		input1.value = arr[0];
		$("#prd").css({"display":"none"});
		$("#search").css("display","none");
	//	window.location.href = "../html/denglu.html"
	})
})

$("#input1").bind("focus",function(){
	$("#search").css("display","none");
	$("#input1").css("outline","1px solid #ff6700");
	$(".input2").css("outline","1px solid #ff6700");
	$("#prd").css({"display":"block","z-index":888});
	
}).bind("blur",function(){
	$("#search").css("display","block");
	$("#input1").css("outline","none");
	$(".input2").css("outline","none");
	
})

$("#ul1>li:has(ol)").bind("mouseenter",function(){
	$(this).children("ol").stop().slideDown();
	$(this).children("ol").css("z-index",999)
}).bind("mouseleave",function(){
	$(this).children("ol").stop().slideUp()
})

$("#ul1>.first").bind("mouseenter",function(){
	$(".tree").fadeIn()
}).bind("mouseleave",function(){
	$(".tree").fadeOut()
})

$("#ul2>li:has(div)").bind("mouseenter",function(){
	$(this).children("div").css("z-index",999).stop().fadeIn()
}).bind("mouseleave",function(){
	$(this).children("div").stop().fadeOut()
})


function small(e){
	var h = document.documentElement.scrollTop || document.body.scrollTop;
	//h = document.documentElement.scrollTop || document.body.scrollTop;
	setInterval(small)
	if(h>=140){
		
		$(".small_b").css({"position":"fixed","left":"0px","top":"0px","z-index":9999999}).fadeIn(1000);
	}else if(h<140){
		$(".small_b").css({"position":"static"});
		clearInterval(timer)
	}
	if(h>=500 && h<771){
		$(".mi6_img1").css({"position":"fixed","left":"22px","top":"100px"})
	}else if(h>=771){
		$(".mi6_img1").css({"position":"absolute","left":"0px","top":"400px",})
	}else{
		$(".mi6_img1").css({"position":"absolute","left":"0px","top":"30px"})
	}
}

var timer = setInterval(small)

$(".load_span2").bind("click",function(){
	window.location.href = "../html/denglu.html";
});
$(".load_span3").bind("click",function(){
	$(".load_b").fadeOut()
});
//选手机
var dds1 = Array.from($(".mi_div4").children("dd"))
var dds2 = Array.from($(".mi_div6").children("dd"))
var color = $(dds2[0]).children()
console.log(color)
var arr = [];
var arr1 = [];
var mi6 = "";
var misp = $(".mi_p10").find(":eq(0)")[0];
mi6+="小米全网通6GB+128GB"+" "+color[1].innerHTML;
misp.innerHTML = mi6;
$(".mi_money").html("2499元")
//ajax
$.ajax({
		type:"get",
		url:"../js/dizhi.json",
		async:true,
		success:function(data){
			var img = document.createElement("img");
			img.className = "mi6_img1";
			
			$(".photo").append(img)			
			var str = data[0];				
			var val = str.imgs;
			var val2 = data[1].imgs;
			var val3 = data[2].imgs;
			console.log(val3)
			$(".mi6_img1").attr({"src": val});
			dds1[0].onclick = function(){
				$(".mi_money").html("2499元")
				$(".mi6_img1").attr({"src": val});
				arr[0]=true;
				arr[1]=false;
				arr[2]=false;
				dds1.forEach(function(dd){
					$(dd).css("border-color","#e0e0e0")
				})
				$(this).css({"border-color":"#ffb600"})
				$(dds2[0]).css({"border-color":"#ffb600"})
				dds2[1].className = "show1";
				dds2[2].className = "hide1";
			}
			dds1[1].onclick = function(){
				$(".mi_money").html("2899元")
				arr[0]=false;
				arr[1]=true;
				arr[2]=false;
				dds1.forEach(function(dd){
					$(dd).css("border-color","#e0e0e0")
				})
				$(this).css({"border-color":"#ffb600"})
				dds2[1].className = "hide1";
				dds2[2].className = "show1";
			}
			dds1[2].onclick = function(){
				$(".mi_money").html("2999元")
				arr[0]=false;
				arr[1]=false;
				arr[2]=true;
				dds1.forEach(function(dd){
					$(dd).css("border-color","#e0e0e0")
				})
				$(this).css({"border-color":"#ffb600"})
				dds2[1].className = "hide1";
				dds2[2].className = "hide1";
			}
			dds2[0].onclick = function(){
				arr1[0]=true;
				arr1[1]=false;
				arr1[2]=false;
				misp.innerHTML = "小米全网通6GB+128GB"+" "+"黑色";
				dds2.forEach(function(dd){
					$(dd).css("border-color","#e0e0e0")
				});
				$(this).css({"border-color":"#ffb600"});
				if(arr[0]){
					$(".mi6_img1").attr({"src": val});
				}else if(arr[1]){
					$(".mi6_img1").attr({"src": val});
				}else if(arr[2]){
					$(".mi6_img1").attr({"src": val});
				}
			}
			dds2[1].onclick = function(){
				arr1[0]=false;
				arr1[1]=true;
				arr1[2]=false;
				misp.innerHTML = "小米全网通6GB+128GB"+" "+"白色"
				dds2.forEach(function(dd){
					$(dd).css("border-color","#e0e0e0")
				});
				$(this).css({"border-color":"#ffb600"});
				if(arr[0]){
					$(".mi6_img1").attr({"src": val2});
				}else if(arr[1]){
					$(".mi6_img1").attr({"src": val2});
				}else if(arr[2]){
					$(".mi6_img1").attr({"src": val2});
				}
			}
			dds2[2].onclick = function(){
				arr1[0]=false;
				arr1[1]=false;
				arr1[2]=true;
				misp.innerHTML = "小米全网通6GB+128GB"+" "+"亮蓝色"
				dds2.forEach(function(dd){
					$(dd).css("border-color","#e0e0e0")
				});
				$(this).css({"border-color":"#ffb600"});
				if(arr[0]){
					$(".mi6_img1").attr({"src": val3});
				}else if(arr[1]){
					$(".mi6_img1").attr({"src": val3});
				}else if(arr[2]){
					$(".mi6_img1").attr({"src": val3});
				}
			}
			
			$(".mi_p12").bind("click",function(){
				if(!login){
					if(confirm("请先登录")){
						window.location.href = "../html/denglu.html"
					}
				}else{
					
				
				if(arr[0]){
					if(arr1[0]){
						var o = getCookie("g_phone"+data[0].id)
						var num;
						if(o){
							num = Number(o.num)+1;
						}else{
							num=1
						}
						data[0].num = num;
						setCookie("g_phone"+data[0].id,data[0])
					}else if(arr1[1]){						
						var o = getCookie("g_phone"+data[1].id)
						var num;
						if(o){
							num = Number(o.num)+1;
						}else{
							num=1
						}
						data[1].num = num;
						setCookie("g_phone"+data[1].id,data[1])
					}else if(arr1[2]){
						var o = getCookie("g_phone"+data[2].id)
						var num;
						if(o){
							num = Number(o.num)+1;
						}else{
							num=1
						}
						data[2].num = num;
						setCookie("g_phone"+data[2].id,data[2])
					}
				}else if(arr[1]){
					if(arr1[0]){
						var o = getCookie("g_phone"+data[0].id)
						var num;
						if(o){
							num = Number(o.num)+1;
						}else{
							num=1
						}
						data[0].num = num;
						setCookie("g_phone"+data[0].id,data[0])
					}else if(arr1[1]){
						var o = getCookie("g_phone"+data[1].id)
						var num;
						if(o){
							num = Number(o.num)+1;
						}else{
							num=1
						}
						data[1].num = num;
						setCookie("g_phone"+data[1].id,data[1])
					}else if(arr1[2]){
						var o = getCookie("g_phone"+data[2].id)
						var num;
						if(o){
							num = Number(o.num)+1;
						}else{
							num=1
						}
						data[2].num = num;
						setCookie("g_phone"+data[2].id,data[2])
					}
				}else if(arr[2]){
					if(arr1[0]){
						var o = getCookie("g_phone"+data[0].id)
						var num;
						if(o){
							num = Number(o.num)+1;
						}else{
							num=1
						}
						data[0].num = num;
						setCookie("g_phone"+data[0].id,data[0])
					}else if(arr1[1]){
						var o = getCookie("g_phone"+data[1].id)
						var num;
						if(o){
							num = Number(o.num)+1;
						}else{
							num=1
						}
						data[1].num = num;
						setCookie("g_phone"+data[1].id,data[1])
					}else if(arr1[2]){
						var o = getCookie("g_phone"+data[2].id)
						var num;
						if(o){
							num = Number(o.num)+1;
						}else{
							num=1
						}
						data[2].num = num;
						setCookie("g_phone"+data[2].id,data[2])
					}
				}
				}
				return false;
			})

		}
		
		
	});
	