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
		window.location.href = "../html/xiangqing.html"
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

$(".F_span1").bind("click",function(){
	window.location.href = "../html/index.html"
})
var d = true;
$(".Ep1").bind("click",function(){
	if(d){
		startMove(Mtop,{"height":138});
		d = false;
	}else{
		startMove(Mtop,{"height":46});
		d = true;
	}
})
var e = true;
$(".Ep2").bind("click",function(){
	if(e){
		startMove(Mcenter,{"height":276});
		e = false;
	}else{
		startMove(Mcenter,{"height":46});
		e = true;
	}
})
	

var Ylis = Array.from($(".Lul1").children("li"))
console.log(Ylis)
var Yuls = Array.from($(".Ldiv1").children("ul"))
console.log(Yuls)
for(let i=0,l=Yuls.length;i<l;i++){	
	Ylis[i].onclick = function(){
		Ylis.forEach(function(li){
		li.className = ""
	})
	Yuls.forEach(function(ul){
		ul.className = "hide"
		
	})
		var m = getStyle(Yuls[i],"height");
		console.log(m)
		Ldiv1.style.height = m;
		this.className = "select";
		Yuls[i].className = "show"
	}
	
}

