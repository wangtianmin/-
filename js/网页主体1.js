$(function(){
//	alert($(".main_list:eq(0)").height());
	//给ul中的li设置高度
	$(".main_list_two:eq(0)").height($(".main_list:eq(0)").outerHeight()-1);
	$(".main_list_two:eq(1)").height($(".main_list:eq(1)").outerHeight()-1);
	$(".main_list_two:eq(2)").height($(".main_list:eq(2)").outerHeight()-1);
	
	//三个ul的悬停事件
	$(".main_list:eq(0)").hover(function(){
		$(".main_list_one img:eq(0)").attr({"src":"img/home1.png"})
		$(".main_list_two:eq(0)").css("background-color","yellowgreen")
	},function(){
		$(".main_list_one img:eq(0)").attr({"src":"img/home1_hui.png"})
		$(".main_list_two:eq(0)").css("background-color","darkgray")
	})
	$(".main_list:eq(1)").hover(function(){
		$(".main_list_one img:eq(1)").attr({"src":"img/home2.png"})
		$(".main_list_two:eq(1)").css("background-color","yellowgreen")
	},function(){
		$(".main_list_one img:eq(1)").attr({"src":"img/home2_hui.png"})
		$(".main_list_two:eq(1)").css("background-color","darkgray")
	})
	$(".main_list:eq(2)").hover(function(){
		$(".main_list_one img:eq(2)").attr({"src":"img/home3.jpg"})
		$(".main_list_two:eq(2)").css("background-color","yellowgreen")
	},function(){
		$(".main_list_one img:eq(2)").attr({"src":"img/home3_hui.jpg"})
		$(".main_list_two:eq(2)").css("background-color","darkgray")
	})
})