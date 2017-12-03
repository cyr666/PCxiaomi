//获取注册页面所得的cookie值
var arr = getCookie("phone");
var Dphone = arr[0],
	Dpass = arr[1];

//判断帐户和密码是否与注册页面的一样；
var Dinput1 = document.getElementById("dinput1"),
	Dinput2 = document.getElementById("dinput2")
 
$(".login").bind("click",function(){
	var Binput1 = Dinput1.value;
	 var Binput2 = Dinput2.value;
	if(Dphone == Binput1 && Dpass == Binput2){
	window.location.href = "../html/index.html"

}else{
	$.msg({
			"height" : 100,
			"ico" : "../image/007.gif",
			"title" : "帐号不存在",
			"autoClose" : 0,
			"mask" : true
		});
}
})

$.extend({
	msg : function(json){
		var w = json.width || 300;
		var h = json.height || 200;
		console.log(json)
		var ico = json.ico;
		// 遮罩
		if( json.mask ){
			var mask = $("<div></div>");
			$("body").append(mask);
			mask.css({
				"position" : "fixed",
				"left" : 0,
				"top" : 0,
				"right" : 0,
				"bottom" : 0,
				"background" : "rgba(0,0,0,.7)"
			});
		}
		// 创建窗口
		var div = $("<div></div>");
		$("body").append(div);
		div.css({
			"width":w,
			"height":h,
			"border-radius":"5px",
			"box-shadow":"0px 0px 5px black",
			"position" : "fixed",
			"background":"#fff",
			"left" : ($(window).width()-w)/2,
			"top" : ($(window).height()-h)/2,
			"color":"#000"
		});
		// 创建图标
		var img2 = $("<img />");
		div.append(img2);		
		$(img2).attr({"src": ico}).css({
			"width":50, "height":50, "position":"absolute", 
			"top": (h-50)/2,
			"left":50
		});
		// 正文
		var p = $("<p></p>");
		div.append(p);
		p.css({
			"position":"absolute",
			"margin":0,
			"padding":0,
			"height":20,
			"top":(h-20)/2,
			"left":110
		}).html( json.title );
		
		// 关闭按钮
		var img1 = $("<img/>");
		div.append(img1);
		$(img1).attr("src","../image/006.gif")
		img1.css({
			"position":"absolute",
			"right":5,
			"top":5,
			"width":40,
			"height":20
		}).click(function(){
			div.remove();
			if( json.mask ){
				mask.remove();
			}
			if( json.type=="prompt" ){
				json.succ(input.val());
			}
		});
		
	}
});

$(".d_span1").bind("click",function(){
	window.location.href = "../html/zhuce.html"
})
