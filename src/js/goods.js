//详情
require(['config'],function(){
	require(['jquery','gdszoom','xq_Carousel','Carousel','ad_Carousel','list'],function(){
		
		// 详情页轮播图,311,69
		$('.d_l_ci').xq_Carousel({
			imgs:['../img/goods_x.png','../img/goods_x1.png'],
			page:false,
			autoPlay:false
		});

		//放大镜
		$('.d_l_zhu').gdsZoom({
			// width:430,//大图宽度，高度
			// height:430,
			// position:'right',//大图显示位置：left,bottom,top,right
			// gap:33//大图与小图的间距
		});


		
	})
})

