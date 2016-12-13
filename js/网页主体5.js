//滚动条滚动事件

$(function() {
	// jquery 兼容的滚轮事件
	var start = true;
	
	$(document).on("mousewheel DOMMouseScroll", function(e) {
		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
			(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
		var t = $(window).scrollTop();
		console.log(start);
		if(start) { //开关控制滚轮次数
			
			setTimeout(function() {
				if(delta > 0) {
					// 向上滚
//					console.log("wheelup");
//					console.log(t);
					$(window).scrollTop(t-650);
				} else if(delta < 0) {
					// 向下滚
//					console.log("wheeldown");
					console.log(t);
					$(window).scrollTop(t+650);
				}
				start = true;
			}, 500)
			start = false;
		}
	});
})


//var t2 = 0;
//document.onmousewheel = function(e){
//	var e = e || window.event;
////	console.log(e.wheelDelta);
//	var down = true;
//	if(e.wheelDelta < 0) {
//		down = true;
//		t2+=650;
//		donghua()
//		$(window).scrollTop(t2);
//		
//	} else{
//		down = false;
//		t2-=650;
//		donghua()
//		$(window).scrollTop(t2);
//	}
//}

////滚动条动画
//function donghua(e) {
//	var e = e || window.event;
//	var start = $(window).scrollTop();
//	var num = 650;
//	//	alert(start);
//	if(e.wheelDelta < 0) {
//		var end = $(window).scrollTop() + num;
//	} else {
//		var end = $(window).scrollTop() - num;
//	}
//	//	alert(end);
//	var c = end - start;
//	var t = 0;
//	var d = 30;
//	timer = setInterval(function() {
//		t++;
//		if(t >= d) {
//			clearInterval(timer);
//		}
//		$(window).scrollTop(Tween.Quad.easeIn(t, start, c, d));
//	}, 30);
//}
//延时器
//setTimeout(donghua(),500);