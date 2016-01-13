$(document).ready(function(){
var ul=$("#ul_gallery");
var li=$("#ul_gallery li");
var img=$("#ul_gallery img");
var autoplayer,w,h,m,n;
var ws,hs;
var x=img.length-1;
var y=1;
var z=0;
var s=0;


/*获得图片宽高的盒子*/

$("body").append("<div id='imgSizeBox' style='height:0px;font-size:0;line-height:0;visibility:hidden;overflow:hidden;'></div>");
img.clone().appendTo("#imgSizeBox");
var imgSize=$("#imgSizeBox img");


/*自动宽高函数*/
function autoWH(maxW,maxH) {
if(w>maxW){h=maxW*h/w;w=maxW;m=0;n=(maxH -h)/2}
if(h>maxH){w=maxH*w/h;h=maxH;m=(maxW-w)/2;n=0}else{m=(maxW-w)/2;n=(maxH -h)/2}
}


/*图片动效函数*/
window.imgAnimate = function(x,posX,posY,maxW,maxH) {
w=imgSize.eq(x).width();
h=imgSize.eq(x).height();
autoWH(maxW,maxH);
li.eq(x).animate({left:(posX+m)+"px",top:(posY+n)+"px",width:w,height:h});
img.eq(x).animate({width:w,height:h});
}

/*切换函数*/
function nextImg() {
	if(y<x){
	if(y==(x-1)){
	$("#span_next").animate({opacity:0.4});
	$("#this_next").css({cursor:"default"});}
	$("#span_prev").css({opacity:1});
	$("#this_prev").css({cursor:"pointer"});

	y++;
	imgAnimate(y+1,670,150,120,80);
	li.eq(y+1).animate({opacity:"1"});
	imgAnimate(y,150,0,500,400);
	imgAnimate(y-1,10,150,120,80);
	li.eq(y-2).animate({opacity:"0"});
	}else{z=1;}
}

function prevImg() {
	if(y>0){
	if(y==1){
	$("#span_prev").animate({opacity:0.4});
	$("#this_prev").css({cursor:"default"});}
	$("#span_next").css({opacity:1});
	$("#this_next").css({cursor:"pointer"});

	y--;
	li.eq(y-1).animate({opacity:"1"});
	imgAnimate(y,150,10,500,400);
	li.eq(y+2).animate({opacity:"0"});
	imgAnimate(y+1,670,150,120,80);
	}else{z=0;}
}

window.autoPlay = function() {
	if(z==0){nextImg();	}else{prevImg();}
}


/*初始化*/
//$("#span_prev").hide();
$("#ul_gallery li:lt(3)").css({opacity:"1"});
imgAnimate(0,10,150,120,80);
imgAnimate(1,150,10,500,400);
imgAnimate(2,670,150,120,80);


/*点击事件*/
$("#span_next").click(nextImg);
$("#span_prev").click(prevImg);
$("#this_next").click(nextImg);
$("#this_prev").click(prevImg);

/*点击自动播放事件*/
$("#span_auto").click(function (){
	if(s==0){
		autoplayer = setInterval("autoPlay()",3000);s=1;
		$(this).addClass("play");
	}else{
		clearInterval(autoplayer);s=0;
		$(this).removeClass("play");}
});


/*给大图加lightbox*/

$("#ul_gallery a").lightbox({fitToScreen:true,imageClickClose: false});



});
