/*
	首页js文件
 */
require(['config'],function(){
	require(['jquery','gdszoom','Carousel','list'],function(){
		console.log('首页');
		// $('nav').css('color','#f00');
		$('.lbt').lxCarousel({
			imgs:['img/banner/001.jpg','img/banner/002.jpg','img/banner/003.jpg','img/banner/004.jpg','img/banner/005.jpg'],
			page:true,
			autoPlay:false
		});

		$('.searchBtn').on('click',function(){
			console.log(666);
		})
	})
})

