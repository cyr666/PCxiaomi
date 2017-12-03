function drift(elem,n,ul){
	this.div = elem;
	console.log(this.div)
	var a = this.div.children;
	//this.Vlis = Array.from(div.getElementsByTagName("li"));
	this.w = parseInt(getStyle(this.div,"width"));
	this.spans = Array.from($(a[1]).children("span"));
	console.log(this.spans)
	this.imgs = Array.from($(a[1]).children("img"));
	this.l = this.imgs.length;
	this.Cul = a[0];//startmove里面要用它 而startmove所传的必须是一个元素，不能传集合
//	this.Cul = ul;
	console.log(this.Cul);
	var that = this;	
	this.num = n;
  	that.spans.forEach(function(Cspan,index){
  	
 	Cspan.onclick = function(){
  		that.num = index;
  		startMove(that.Cul,{"left":-that.w*that.num})
  		that.imgs.forEach(function(Cimg){
  			Cimg.className = "hide"
  		})
  		that.imgs[index].className = "show";
  		return false;
  	}
  	
  })
  
  
}