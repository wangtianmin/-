$(function() {
	//导航部分js效果
	$("#ngv_list li").hover(function() {
		//		alert($(this).hasClass("active"))
		$(this).find("a").css("color", "white")
			//判断鼠标悬停的这个li是否原本就有active类
		if($(this).hasClass("active")) { //原本有旧不用添加
			$(this).addClass("baoliu") //添加的这个类是起标记的作用，代表这个li原本就有active类
		} else { //原本没有就添加active类
			$(this).addClass("active")
		}
	}, function() {
		if($(this).hasClass("baoliu")) { //表示li原本就有active类，不用移除

		} else {
			$(this).toggleClass("active")
			$(this).find("a").css("color", "#ccc")
		}

	});

	//尾部ji效果
	$("#footer_email img").hover(function() {
		$("#footer_email img").attr({
			"src": "img/email_cai.png"
		})
	}, function() {
		$("#footer_email img").attr({
			"src": "img/email.png"
		})
	});

	$("#footer_share img:eq(0)").hover(function() {
		$("#footer_share img:eq(0)").attr({
			"src": "img/facebook_cai.png"
		})
	}, function() {
		$("#footer_share img:eq(0)").attr({
			"src": "img/facebook.png"
		})
	});

	$("#footer_share img:eq(1)").hover(function() {
		$("#footer_share img:eq(1)").attr({
			"src": "img/youTube_cai.png"
		})
	}, function() {
		$("#footer_share img:eq(1)").attr({
			"src": "img/youTube.png"
		})
	});

	$("#footer_share img:eq(2)").hover(function() {
		$("#footer_share img:eq(2)").attr({
			"src": "img/linkedIn_cai.png"
		})
	}, function() {
		$("#footer_share img:eq(2)").attr({
			"src": "img/linkedIn.png"
		})
	});

	$("#footer_share img:eq(3)").hover(function() {
		$("#footer_share img:eq(3)").attr({
			"src": "img/twitter_cai.png"
		})
	}, function() {
		$("#footer_share img:eq(3)").attr({
			"src": "img/twitter.png"
		})
	});

});