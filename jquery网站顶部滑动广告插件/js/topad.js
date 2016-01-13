// JScript 文件
function TopAd()
{
    var strTopAd="";
	
	//定义小图片内容
    var topSmallBanner="<center><div><a href=\"http://www.vip168168.com/others/stockaward/index.html\" target=_blank><img width=\"980\" src=\"http://www.vip168168.com/ad/top2.jpg\" /></a></div></center>";
	
	//判断在那些页面上显示大图变小图效果，非这些地址只显示小图（或FLASH）
    if (true)
    {
		//定义大图内容
        strTopAd="<center><div id=adimage style=\"width:980px\">"+
                    "<div id=adBig><a href=\"http://www.vip168168.com/others/stockaward/index.html\" " + 
                    "target=_blank><img title=慧股时空网选股大赛 "+
                    "src=\"http://www.vip168168.com/ad/top1.jpg\" " +
                    "border=0></A></div>"+
                    "<div id=adSmall style=\"display: none\">";
        //strTopAd+=  topFlash;     
		strTopAd+=  topSmallBanner;  
        strTopAd+=  "</div></div></center>";
    }
    else
    {
        //strTopAd+=topFlash;
		strTopAd+=  topSmallBanner;  
    }
    strTopAd+="<div style=\"height:7px; clear:both;overflow:hidden\"></div>";
    return strTopAd;
}
document.write(TopAd());
$(function(){
	//过2秒显示 showImage(); 内容
    setTimeout("showImage();",4000);
    //alert(location);
});
function showImage()
{
    $("#adBig").slideUp(1000,function(){$("#adSmall").slideDown(1000);});
}

//首页滚图
function Marquee(){
		  this.ID=document.getElementById(arguments[0]);
		  this.Direction=arguments[1];
		  this.Step=arguments[2];
		  this.Width=arguments[3];
		  this.Height=arguments[4];
		  this.Timer=arguments[5];
		  this.WaitTime=arguments[6];
		  this.StopTime=arguments[7];
		  if(arguments[8]){this.ScrollStep=arguments[8];}else{this.ScrollStep=this.Direction>1?this.Width:this.Height;}
		  this.CTL=this.StartID=this.Stop=this.MouseOver=0;
		  this.ID.style.overflowX=this.ID.style.overflowY="hidden";
		  this.ID.noWrap=true;
		  this.ID.style.width=this.Width;
		  this.ID.style.height=this.Height;
		  this.ClientScroll=this.Direction>1?this.ID.scrollWidth:this.ID.scrollHeight;
		  this.ID.innerHTML+=this.ID.innerHTML;
		  this.Start(this,this.Timer,this.WaitTime,this.StopTime);
		}
		Marquee.prototype.Start=function(msobj,timer,waittime,stoptime){
		  	msobj.StartID=function(){msobj.Scroll();}
		  	msobj.Continue=function(){
				if(msobj.MouseOver==1){setTimeout(msobj.Continue,waittime);}
				else{clearInterval(msobj.TimerID); msobj.CTL=msobj.Stop=0; msobj.TimerID=setInterval(msobj.StartID,timer);}
			}
		  	msobj.Pause=function(){msobj.Stop=1; clearInterval(msobj.TimerID); setTimeout(msobj.Continue,waittime);}
		  	msobj.Begin=function(){
			msobj.TimerID=setInterval(msobj.StartID,timer);
			msobj.ID.onmouseover=function(){msobj.MouseOver=1; clearInterval(msobj.TimerID);}
			msobj.ID.onmouseout=function(){msobj.MouseOver=0; if(msobj.Stop==0){clearInterval(msobj.TimerID); msobj.TimerID=setInterval(msobj.StartID,timer);}}
			}
		  setTimeout(msobj.Begin,stoptime);
		 }
		Marquee.prototype.Scroll=function(){
		  switch(this.Direction){
			case 0:
			  this.CTL+=this.Step;
			  if(this.CTL>=this.ScrollStep&&this.WaitTime>0){this.ID.scrollTop+=this.ScrollStep+this.Step-this.CTL; this.Pause(); return;}
			  else{if(this.ID.scrollTop>=this.ClientScroll) this.ID.scrollTop-=this.ClientScroll; this.ID.scrollTop+=this.Step;}
			  break;
			case 1:
			  this.CTL+=this.Step;
			  if(this.CTL>=this.ScrollStep&&this.WaitTime>0){this.ID.scrollTop-=this.ScrollStep+this.Step-this.CTL; this.Pause(); return;}
			  else{if(this.ID.scrollTop<=0) this.ID.scrollTop+=this.ClientScroll; this.ID.scrollTop-=this.Step;}
			  break;
			case 2:
			  this.CTL+=this.Step;
			  if(this.CTL>=this.ScrollStep&&this.WaitTime>0){this.ID.scrollLeft+=this.ScrollStep+this.Step-this.CTL; this.Pause(); return;}
			  else{if(this.ID.scrollLeft>=this.ClientScroll) this.ID.scrollLeft-=this.ClientScroll; this.ID.scrollLeft+=this.Step;}
			  break;
			case 3:
			  this.CTL+=this.Step;
			  if(this.CTL>=this.ScrollStep&&this.WaitTime>0){this.ID.scrollLeft-=this.ScrollStep+this.Step-this.CTL; this.Pause(); return;}
			  else{if(this.ID.scrollLeft<=0) this.ID.scrollLeft+=this.ClientScroll; this.ID.scrollLeft-=this.Step;}
			  break;
			}
		  }