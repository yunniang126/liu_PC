/*
	首页js文件
 */
require(['config'],function(){
	require(['jquery','gdszoom','xq_Carousel','Carousel','ad_Carousel','list'],function(){
		console.log('首页');
		// $('nav').css('color','#f00');
		//首页轮播图
		// $('.lbt').Carousel({
		// 	imgs:['img/banner/001.jpg','img/banner/002.jpg','img/banner/003.jpg','img/banner/004.jpg','img/banner/005.jpg'],
		// 	page:true,
		// 	autoPlay:false
		// });

		// // $('.searchBtn').on('click',function(){
		// // 	console.log(666);
		// // })

		// //右下角广告轮播图,236,149
		// $('.ad_lbt').ad_Carousel({
		// 	imgs:['img/q111.png','img/q222.png','img/q333.png'],
		// 	page:true,
		// 	autoPlay:false
		// });

		//详情页轮播图,311,69
		// $('.d_l_ci').xq_Carousel({
		// 	imgs:['../img/goods_x.png','../img/goods_x1.png','../goods_x2.png'],
		// 	page:false,
		// 	autoPlay:false
		// });

		$('.d_l_zhu').gdsZoom({
			// width:430,//大图宽度，高度
			// height:430,
			// position:'right',//大图显示位置：left,bottom,top,right
			// gap:33//大图与小图的间距
		});


		
	})
})

