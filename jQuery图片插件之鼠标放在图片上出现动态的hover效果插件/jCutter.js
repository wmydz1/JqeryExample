/*Download by http://sc.xueit.com*/
(function($){
    $.jCutter = function(node, o){
        o = $.extend({
            speedIn: 300,
            speedOut: 300,
            easeIn: '',
            easeOut: ''
        }, o || {});
        
        var that = this;
        that.init = function(){
            that.node = $(node);
            that.img = that.node.find('img');
            that.speedIn = o.speedIn;
            that.speedOut = o.speedOut;
            that.easeIn = o.easeIn;
            that.easeOut = o.easeOut;
            that.generate();
            that.cutter();
        };
		
		
        that.generate = function(){
            var w = that.node.width() / 2;
            var h = that.node.height() / 2;
            that.imga = [];
            for (var i = 0; i < 4; i++) {
                that.imga[i] = document.createElement('div');
                that.imga[i] = $(that.imga[i]);
                that.imga[i].css({
                    'position': 'absolute',
                    'z-index': '2',
                    'width': w,
                    'height': h,
                    'background': 'url("' + that.img.attr("src") + '") no-repeat'
                });
                $(that.node).append(that.imga[i]);
            }
            that.imga[0].css({
                'left': '0px',
                'top': '0px'
            });
            that.imga[1].css({
                'right': '0px',
                'top': '0px',
                'background-position': '-' + w + 'px' + ' 0px'
            });
            that.imga[2].css({
                'left': '0px',
                'bottom': '0px',
                'background-position': '0px' + ' -' + h + 'px'
            });
            that.imga[3].css({
                'right': '0px',
                'bottom': '0px',
                'background-position': '-' + w + 'px ' + '-' + h + 'px'
            });
            that.img.remove();
        };
		
		
        that.cutter = function(){
            var w = that.node.width() / 2;
            var h = that.node.height() / 2;
            that.node.hover(function(){
                that.imga[0].stop().animate({
                    'left': '-' + w,
                    'top': '-' + h
                }, that.speedOut, that.easeOut);
                that.imga[1].stop().animate({
                    'right': '-' + w,
                    'top': '-' + h
                }, that.speedOut, that.easeOut);
                that.imga[2].stop().animate({
                    'left': '-' + w,
                    'bottom': '-' + h
                }, that.speedOut, that.easeOut);
                that.imga[3].stop().animate({
                    'right': '-' + w,
                    'bottom': '-' + h
                }, that.speedOut, that.easeOut);
            }, function(){
                that.imga[0].stop().animate({
                    'left': 0,
                    'top': 0
                }, that.speedIn, that.easeIn);
                that.imga[1].stop().animate({
                    'right': 0,
                    'top': 0
                }, that.speedIn, that.easeIn);
                that.imga[2].stop().animate({
                    'left': 0,
                    'bottom': 0
                }, that.speedIn, that.easeIn);
                that.imga[3].stop().animate({
                    'right': 0,
                    'bottom': 0
                }, that.speedIn, that.easeIn);
            })
        };
        
		
        that.init();
    };
    
    $.fn.jCutter = function(o){
        return this.each(function(i){
            $.jCutter(this,o);
        });
    };
})(jQuery);
