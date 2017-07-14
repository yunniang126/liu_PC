//index
require(['config'],function(){
	require(['jquery','gdszoom','Carousel','ad_Carousel','list'],function(){
		//首页轮播图
		$('.lbt').Carousel({
			imgs:['img/banner/001.jpg','img/banner/002.jpg','img/banner/003.jpg','img/banner/004.jpg','img/banner/005.jpg'],
			page:true,
			autoPlay:false
		});

		//右下角广告轮播图,236,149
		$('.ad_lbt').ad_Carousel({
			imgs:['img/q111.png','img/q222.png','img/q333.png'],
			page:true,
			autoPlay:false
		});
		var $tab = $('.tab');
		$content = $tab.find('.content');
		$title = $tab.find('.header').children();
		
		// 隐藏除第一张以外的图片
		$content.slice(1).hide();
		
		// 给第一个tab高亮
		$title.eq(0).addClass('active');
        console.log($title.eq(0));

		$tab.on('mouseenter','li',function(){
			var idx = $(this).index();

			$(this).addClass('active').siblings().removeClass('active');
			$content.eq(idx).show().siblings('.content').hide();
		})
		


		
	})
})

