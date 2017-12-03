var login = getCookie("phone");
var Dphone = login[0]
//判断账号和密码的cookie是否存在
if(login){
	$(".user").html(Dphone)
}else{
	$(".user").html("登录").bind("click",function(){
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
		window.location.href = "../html/liebiao.html"
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

$("#ul2>li:has(div)").bind("mouseenter",function(){
	$(this).children("div").css("z-index",555).stop().fadeIn()
}).bind("mouseleave",function(){
	$(this).children("div").stop().fadeOut()
})


//小米明星单品区轮播
var ul = document.getElementById("ul3")
var lis = Array.from(ul.children)
var lbtn = document.getElementById("lbtn")
var rbtn = document.getElementById("rbtn")

lbtn.onclick = function(){
	if(lis[5].offsetLeft==1230){
		dong()
	}
}
rbtn.onclick = function(){
	if(ul.style.left=="" || ul.style.left=="0px"){
		dong();
	}
}
//var timer = setInterval(nex,5000)

function dong(){
	if(ul.style.left=="" || ul.style.left=="0px"){
		startMove(ul3,{"left":-1230})
	}else if(lis[5].offsetLeft==1230){
		startMove(ul3,{"left":0})
	}
}
var timer = setInterval(dong,5000)

//家电区
var Ulis = Array.from(document.getElementById("ul6").children),
	Blis = Array.from(document.getElementById("ul7").children),
	Clis = Array.from(document.getElementById("ul8").children)
console.log(Ulis,Blis)
var divs = Array.from($(".photo>#right")),
	Bdivs = Array.from($(".photo1>#right1")),
	Cdivs = Array.from($(".photo2>#right2"))
console.log(divs,Bdivs)
// var cul = Array.from($(".house_1").children("ul").children("li"))
//console.log(cul);

for(let i=0,l=divs.length;i<l;i++){	
	Ulis[i].onmouseenter = function(){
		Ulis.forEach(function(li){
		li.className = ""
	})
	divs.forEach(function(div){
		div.className = "hide"
	})
		this.className = "Ali";
		divs[i].className = "show"
	}
	
}


for(let i=0,l=Bdivs.length;i<l;i++){	
	Blis[i].onmouseenter = function(){
		Blis.forEach(function(li){
		li.className = ""
	})
	Bdivs.forEach(function(div){
		div.className = "hide"
	})
		this.className = "Ali";
		Bdivs[i].className = "show"
	}
	
}
for(let i=0,l=Cdivs.length;i<l;i++){	
	Clis[i].onmouseenter = function(){
		Clis.forEach(function(li){
		li.className = ""
	})
	Cdivs.forEach(function(div){
		div.className = "hide"
	})
		this.className = "Ali";
		Cdivs[i].className = "show"
	}
	
}

var Gul = document.getElementById("ul9")
console.log(Gul)
var Glis = Array.from(Gul.children)
console.log(Glis)
var l_btn = document.getElementById("l_btn")
console.log(l_btn)
var r_btn = document.getElementById("r_btn")

l_btn.onclick = function(){
	if(Glis[5].offsetLeft==1230){
		startMove(Gul,{"left":0})
	}
}
r_btn.onclick = function(){
	if(Gul.style.left=="" || Gul.style.left=="0px"){
		startMove(Gul,{"left":-1230})
	}
}



