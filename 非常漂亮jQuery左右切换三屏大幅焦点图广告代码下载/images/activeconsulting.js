/* Initialise Galllery tabs Download by http://sc.xueit.com*/
$(document).ready(function(){
	if($('#carusel').length > 0){
		$('div.G1').galleryScroll({
			holderList: '.holder',
			scrollElParent: '.holder > ul',
			scrollEl: '.holder > ul > li'
		});
	}
	initTabs();
});
function initTabs(){
	var _a = -1;
	var _btn = $('#categories .content_main_col h3 a');
	_btn.each(function(_i){
		this.box = $('#' + this.href.substr(this.href.indexOf("#") + 1)).hide();
		if($(this).hasClass('active')){
			_a = _i;
			this.box.show();
		}
		this.onclick = function(){
			if(_i != _a){
				this.box.slideDown(500);
				_btn.get(_a).box.slideUp(500, function(){
					_btn.eq(_a).removeClass('active');
					_btn.eq(_i).addClass('active');
					_a = _i;
				});
			}
			return false;
		}
	});
	if(_a == -1 && _btn.length > 0){
		_a = 0;
		_btn.eq(_a).addClass('active');
		_btn.get(_a).box.show();
	}
}
/*
Preload images für Standard script
*/

var myimages=new Array();
function preloadimages()
{
for (i=0;i<preloadimages.arguments.length;i++)
{
myimages[i]=new Image()
myimages[i].src=preloadimages.arguments[i]
}
}

// Pfad und Name der Images innerhalb von Anführungszeichen eintragen.
// Liste nach Bedarf erweitern.
preloadimages("media/layout/blowerdoor.png","media/layout/thermobild.png","media/layout/clochedor.png","media/layout/bild-bg.png","media/layout/top-content-area.png","media/layout/body-bg.jpg","media/layout/icon-card.gif","media/layout/icon-list.gif","media/layout/icon-briefcase.gif","media/layout/icon-card-large.gif","media/layout/icon-list-large.gif","media/layout/icon-briefcase-large.gif","media/layout/btn-mehr-lesen.gif","media/layout/btn-termin-res.gif","media/layout/categotie-box-bg.jpg","media/layout/nav-btn-start-seite.png","media/layout/nav-btn-leistungen.png","media/layout/nav-btn-kontakt.png","media/layout/nav-btn-referenzen.png");
// -->
// Image Effekte setzen
function set_graphicsfunc(type) {
	switch (type)
	 { case "gallery":
			hs.graphicsDir = 'media/layout/';
			hs.outlineType = 'rounded-white';
			hs.showCredits = false;
	  		break;
	   case "other":
			hs.graphicsDir = 'media/layout/';
			hs.outlineType = 'rounded-white';
			hs.showCredits = false;
	  		break;
	}
	window.onload = function() {
			hs.preloadImages(5);
			}
}