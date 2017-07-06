// 配置
// 依赖
require.config({
	// baseUrl:''
	paths:{
		jquery:'../lib/jquery3.1.1',
		gdszoom:'../lib/jquery-gdsZoom/jquery.gdsZoom'
	},
	shim:{
		// gdszoom依赖jquery
		gdszoom:['jquery']
	}
});