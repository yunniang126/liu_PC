// 配置
// 依赖
require.config({
	// baseUrl:''
	paths:{
		jquery:'../lib/jquery3.1.1',
		gdszoom:'../lib/jquery-gdsZoom/jquery.gdsZoom',
		Carousel:'../lib/jquery.Carousel/jquery.Carousel',
		//广告轮播图
		ad_Carousel:'../lib/jquery.Carousel/jquery.ad_Carousel',
		//注册
		validate:'../lib/jquery-validate/jquery.validate',
		//中文
		validate_z:'../lib/jquery-validate/localization/messages_zh_TW'
	},
	shim:{
		// gdszoom依赖jquery
		gdszoom:['jquery'],
		Carousel:['jquery'],
		ad_Carousel:['jquery'],
		validate:['jquery'],
		validate_zh:['jquery']
	}
});