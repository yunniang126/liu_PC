;(function($){
	// $.prototype.lxCarousel = function(options){
	$.fn.xluCarousel = function(options){
		// this => $('#lbt');

		// 默认参数
		var defaults = {
			autoPlay:true,//ok
			small:false,
			buttons:true,//ok
			page:true,//ok
			duration:3000,//ok
			index:0,//ok
			type:'vertical',//vertical,horizontal,fade,show
		}

		var opt = $.extend({},defaults,options);

		return this.each(function(idx,ele){

			var $self=$(ele);

		$self.addClass('carousel')
		// 生成大图
		var $wai=$('<div/>').addClass('wai')
		var $ul = $('<ul/>');

		$.each(opt.imgs,function(idx,url){
			$('<li/>').html(`<img src="${url}">`).attr('float','left').appendTo($ul);
		});
		$ul.appendTo($wai);
		$wai.appendTo($self)
		
		// 默认显示图片
		var index = opt.index;
		var len = opt.imgs.length;



		// 是否生成小图片
		if (opt.small) {
			var $xtu=$('<div/>').addClass('xtu');
			$.each(opt.imgs,function(idx,url){
				$('<li/>').html(`<img src="${url}">`).appendTo($xtu);
			});

			$xtu.appendTo($self)
			$xtu.on('mouseenter','li',function(){
				clearInterval(timer);
				index=$(this).index();
				showPic();
				$(this).stop(true).animate({opacity:5},100)
			}).on('mouseleave','li',function(){
				$(this).stop(true).animate({opacity:0.4},100)
				timer = setInterval(autoPlay,opt.duration);
			})

		}

		// 是否生成分页
		// 
		if (opt.page) {
			$page = $('<div/>').addClass('page');
		for(var i=1;i<=len;i++){
			$span = $('<span/>').text(i);

			// 给第一个span添加高亮
			if(i==index+1){
				$span.addClass('active');
			}
			$span.appendTo($page);
		}
		$page.appendTo($wai);
		}

		function showPic(){
			console.log(11)

			// 到达最后一张时，重新回到第一张
			if(index > len-1){
				index = 0;
			}else if(index<0){
				index = len-1;
			}

			// 滚动显示每一张图片
			// var target = -index*opt.width;

			// $ul.stop().animate({left:target});
			var target={};
			if (opt.type=='vertical') {
				target={top:-index*opt.height}
					$ul.stop().animate(target)
			}else if(opt.type=='horizoncal'){
				$ul.css({width:3240})
				$ul.children().css({float:'left'})
				target={left:-index*opt.width}
			}else if(opt.type=='fade'){
			
				$ul.children().css({'position': 'absolute','top':0,'left':0})
				$ul.children().stop().eq(index).fadeIn().siblings().fadeOut()
				
			}
			// else{
			// 	target={};
			// 	$ul.css({width:3240})
			// 	$ul.children().css({float:'left'})
			// 	$ul.animate({left:-10*index})

			// }
		

			// 高亮分页
			
			if (opt.small) {
				$page.children().eq(index).addClass('active').siblings().removeClass();
			$xtu.children().eq(index).stop().animate({opacity:2}).siblings().animate({opacity:0.4})
			}
		}
		

		// 是否前后按钮
		if(opt.buttons){
			$('<div/>').addClass('prev').html('&lt;').appendTo($wai);
			$('<div/>').addClass('next').html('&gt;').appendTo($wai);
		}
		
		var timer;

		// 上一页下一页
		$wai.on('click','.prev',function(){
			index--;
			showPic();
		}).on('click','.next',function(){
			index++;
			showPic();
		})

		// 移入移出
		.on('mouseenter',function(){
			clearInterval(timer);
		}).on('mouseleave',function(){
			timer = setInterval(autoPlay,opt.duration);
		})


		// 是否点击页码
		.on('click','.page span',function(){
			index = $(this).index();
			showPic();
		})

		// 是否自动轮播
		if(opt.autoPlay){
			console.log(22)
			// $wai.trigger('mouseleave');
			timer = setInterval(autoPlay,opt.duration);
		}
		// if (opt.type=='vertical') {
		// 		autoPlay()
		// }

		function autoPlay(){
				index++;
				showPic();
			}
		
			})
		
	}

	
})(jQuery);


