// 配置
// 依赖
require.config({
	// baseUrl:''
	paths:{
		jquery:'../lib/jquery3.1.1',
		gdszoom:'../lib/jquery-gdsZoom/jquery.gdsZoom',
		Carousel:'../lib/jquery.Carousel/jquery.Carousel'
	},
	shim:{
		// gdszoom依赖jquery
		gdszoom:['jquery'],
		Carousel:['jquery']
	}
});