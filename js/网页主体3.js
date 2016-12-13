$(function(){
	$("#main_list li").on("click",function(){
		var index = $("#main_list li").index($(this));
//		alert(index);
		//点击圆点，让图片切换
		$("#main_middle>img").css("display","none")
		$("#main_middle img").eq(index).css("display","block")
		//点击圆点，圆点颜色的切换
		$("#main_list>li").removeClass("active")
		$("#main_list li").eq(index).addClass("active")
	});
});

//图片变换的定时器
var imgs = document.querySelectorAll("#main_middle img");
var main_middle = document.querySelector("#main_middle");
var lis = document.querySelectorAll("#main_list li");
var index = 0;
setInterval(function(){
	index++;
	if(index>2){
		index = 0;
	}
	for(var i =0; i<imgs.length;i++){
		imgs[i].style.display = "none";
		lis[i].className = "";
	}
	imgs[index].style.display = "block";
	lis[index].className = "active";
},2500)

//瀑布流
var main_wrap2 = document.querySelector("#main_wrap2");
	var uls = main_wrap2.children;

	function rand(min,max){
		return parseInt(Math.random()*(max-min+1)+min);
	}
	
	function create(){
		//1.先产生20个li
		for (var i = 0; i < 20; i++) {
			var newLi = document.createElement("li");
			var newImg = document.createElement("img");
			newLi.appendChild(newImg);
			
//			newLi.style.height = h+"px";
			newImg.src = "img/a"+i+".jpg";

			//2.把li插入到ul里
			//先获取到所有ul的高度
			var heightArr = [];
			for (var j = 0; j < uls.length; j++) {
				heightArr.push(uls[j].offsetHeight);
			}
			
			//找到高度最低的ul
			//假设第一个li的高度最小
			var minHeight = heightArr[0];
			var minIndex = 0;
			for (var j = 0; j < heightArr.length; j++) {
				if (heightArr[j] < minHeight) {
					minHeight = heightArr[j];
					minIndex = j;
				}
			}
			//把li插入到最低的ul中
			uls[minIndex].appendChild(newLi);
		}
	}
	create();

//鼠标悬停在图片上出现的div
$("#main_wrap2 li").hover(function(){
	//console.log($("#main_wrap2 li").index($(this)))
//	var index = $("#main_wrap2 li").index($(this));
	var width = $(this).find("img").width();
	var height = $(this).find("img").height();
//	console.log(width)
//	console.log(height)
	var div = $("<div class='look'><img src='img/look.png'/ class='look_img'></div>")
	$(div).css({"width":width,"height":height,"position":"absolute","background-color":"black","opacity":0.1})
	$(div).find("img").css({"width": 0.10*width,"height":0.10*width,"margin-left":-0.05*width,"margin-top":-0.05*height})
	$(this).prepend(div)
	$(div).animate({
		"opacity": 0.5
	},500)
},function(){
	$(".look").remove()
});

//鼠标点击图片的事件
$("#main_wrap2 li").on("click",function(){
	//当点击图片后把搜索的div移出
	$(".look").remove()
	//获取点击的这个li的宽高
	var width = $(this).width();
	var height = $(this).height();
	//让大图的容器显示
	$("#bigImg").css({"display":"block"})
	//把大图的容器里的内容清空
	$("#bigImg").empty();
	var imgObj = $(this).clone();//复制你点击的这个li
	
	$(imgObj).remove()
//	console.log($(window).width());
	//判断ul是两列还是4列
	if(width > $(window).width()/3){
		$(imgObj).css({"width": 1.5*width,"height":1.5*height,"margin-left":-0.75*width,"margin-top":-0.75*height})
	}else{
		$(imgObj).css({"width": 2.5*width,"height":2.5*height,"margin-left":-1.25*width,"margin-top":-1.25*height})
	}
	//在id为bigImg的元素中添加imgObj
	$("#bigImg").prepend(imgObj)
	
	//点击大图让其消失
	$("#bigImg").on("click",function(){
		
		$("#bigImg").css({"display":"none"})
	})
})


