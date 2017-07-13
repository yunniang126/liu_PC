;(function($){
	// $.prototype.lxCarousel = function(options){
	$.fn.ad_Carousel = function(options){

		// 默认参数
		var defaults = {
			width:236,//ok
			height:149,//ok
			autoPlay:true,//ok,自动播放
			small:false,
			buttons:true,//ok
			page:false,//ok，页码
			duration:2000,//ok,间隔
			index:0,//ok,索引
			type:'fade',
	//vertical(垂直),horizontal(水平),fade(淡入淡出),show(切换)
			seamless:false
		}

		// var opt = Object.assign({},defaults,options);
		var opt = $.extend({},defaults,options);


		return this.each(function(idx,ele){
			var $self = $(ele);

			var len = opt.imgs.length;

			// 添加特定类名
			$self.addClass('lxCarousel');

			// 定义宽高
			$self.css({
				width:opt.width,
				height:opt.height
			})

			// 生成大图
			var $ul = $('<ul/>');

			$.each(opt.imgs,function(idx,url){
				$('<li/>').css({height:opt.height,width:opt.width}).html(`<img src="${url}">`).appendTo($ul);
			});

			$ul.appendTo($self);

			// 水平排列
			if(opt.type === 'horizontal'){
				$ul.width(opt.width*len);
				$ul.addClass('horizontal');
			}

			// 默认显示图片
			var index = opt.index;
			

			// 生成分页
			if(opt.page){
				var $page = $('<div/>').addClass('page');
				for(var i=1;i<=len;i++){
					// 去掉页码号

					var $span = $('<span/>');
					// var $span = $('<span/>').text(i);


					// 给第一个span添加高亮
					if(i==index+1){
						$span.addClass('active');
					}
					$span.appendTo($page);
				}
				$page.appendTo($self);
			}

			// 前后按钮
			// if(opt.buttons){
			// 	$('<div/>').addClass('prev').html('&lt;').appendTo($self);
			// 	$('<div/>').addClass('next').html('&gt;').appendTo($self);
			// }

			var timer;

			// 上一页下一页
			$self.on('click','.prev',function(){
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


			// 点击页码
			.on('click','.page span',function(){
				index = $(this).index();
				showPic();
			})

			// 自动轮播
			if(opt.autoPlay){
				$self.trigger('mouseleave');
			}

			function autoPlay(){
				index++;
				showPic();
			}

			function showPic(){
				// 到达最后一张时，重新回到第一张
				if(index > len-1){
					index = 0;
				}else if(index<0){
					index = len-1;
				}

				// 滚动显示每一张图片
				var obj;

				if(opt.type === 'horizontal'){
					obj = {left:-index*opt.width};
				}
				//1
				// // 淡入淡出
				// else if(opt.type==='fade'){
					
				// 	$ul.find('li').css({position:'absolute',left:0,top:0});
				// 	$ul.children().eq(index).fadeIn().siblings().fadeOut();

				// }
				// // 切换
				// else if(opt.type==='show'){
				// 	$ul.children().eq(index).css({display:'block'}).siblings().css({display:'none'})
				// 	// $ul.find('img').attr('src','img/00'+index+'.jpg')
				// }
				//1

				//滚动
				else{
					obj = {top:-index*opt.height};
				}



				$ul.stop().animate(obj);

				// 高亮分页
				if(opt.page){

					$page.children().eq(index).addClass('active').siblings().removeClass();
				}
			}
		});

		// return this;
	}

	// $.fn.lxTab = function(){}
	// $.fn.lxPopover = function(){}

	// 系列插件
	// $.fn.extend({
	// 	lxCarousel:function(){},
	// 	lxPopover:function(){},
	// 	lxTab:function(){}
	// });

	// 全局插件
	// $.lxTab = function(){

	// }

	// 系列插件
	// $.extend({
	// 	lxCarousel:function(){},
	// 	lxPopover:function(){},
	// 	lxTab:function(){}
	// });

	// $.lxTab()
})(jQuery);


//$('#lbt').lxCarousel();