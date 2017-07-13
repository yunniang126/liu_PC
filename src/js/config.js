// 配置
// 依赖
require.config({
	// baseUrl:''
	paths:{
		jquery:'../lib/jquery3.1.1',
		//放大镜
		gdszoom:'../lib/jquery-gdsZoom/jquery.gdsZoom',
		//轮播图
		Carousel:'../lib/jquery.Carousel/jquery.Carousel',
		//广告轮播图
		ad_Carousel:'../lib/jquery.Carousel/jquery.ad_Carousel',
		//注册
		validate:'../lib/jquery-validate/jquery.validate',
		//详情页轮播图
		xq_Carousel:'../lib/jquery.Carousel/jquery.xq_Carousel',
		//小图轮播图
		xluCarousel:'../lib/jquery.Carousel/jquery.xluCarousel',
		//中文
		validate_z:'../lib/jquery-validate/localization/messages_zh_TW'
	},
	
	shim:{
		// gdszoom依赖jquery
		gdszoom:['jquery'],
		Carousel:['jquery'],
		ad_Carousel:['jquery'],
		xq_Carousel:['jquery'],
		xluCarousel:['jquery'],
		validate:['jquery'],
		validate_zh:['jquery']
	}
});