/*
 *	soChange 1.2 - simple gallery with jQuery
 *	made by bujichong 2009-11-27
 *	作者：不羁虫  2009-11-27
 * Download by http://sc.xueit.com
 * http://hi.baidu.com/bujichong/
 *	欢迎交流转载，但请尊重作者劳动成果，标明插件来源及作者
 */
(function(c){c.fn.soChange=function(d){return new a(this,d)};var b={thumbObj:null,botLast:null,botNext:null,thumbNowClass:"now",slideTime:1000,autoChange:true,clickFalse:true,overStop:true,changeTime:5000,delayTime:300};c.soChangeLong=function(n,h){this.options=c.extend({},b,h||{});var p=c(n);var q=this.options;var d;var s=p.size();var j=0;var m;var g;var k;p.hide();p.eq(0).show();function i(){if(j!=m){if(q.thumbObj!=null){c(q.thumbObj).removeClass(q.thumbNowClass).eq(m).addClass(q.thumbNowClass)}if(q.slideTime<=0){p.eq(j).hide();p.eq(m).show()}else{p.eq(j).fadeOut(q.slideTime);p.eq(m).fadeIn(q.slideTime)}j=m;if(q.autoChange==true){clearInterval(g);g=setInterval(r,q.changeTime)}}}function r(){m=(j+1)%s;i()}if(q.thumbObj!=null){d=c(q.thumbObj);d.removeClass(q.thumbNowClass).eq(0).addClass(q.thumbNowClass);d.click(function(){m=d.index(c(this));i();if(q.clickFalse==true){return false}});d.mouseenter(function(){m=d.index(c(this));k=setTimeout(i,q.delayTime)});d.mouseleave(function(){clearTimeout(k)})}if(q.botNext!=null){var f=c(q.botNext);f.click(function(){r();return false})}if(q.botLast!=null){var l=c(q.botLast);l.click(function(){m=(j+s-1)%s;i();return false})}if(q.autoChange==true){g=setInterval(r,q.changeTime);if(q.overStop==true){p.mouseenter(function(){clearInterval(g)});p.mouseleave(function(){g=setInterval(r,q.changeTime)})}}};var a=c.soChangeLong})(jQuery);
