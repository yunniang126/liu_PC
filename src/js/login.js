//登录
require(['config'],function(){
	require(['jquery','gdszoom','Carousel','validate_z','validate','ad_Carousel','list'],function(){
		//首页轮播图
		$('.lbt').Carousel({
			imgs:['img/banner/001.jpg','img/banner/002.jpg','img/banner/003.jpg','img/banner/004.jpg','img/banner/005.jpg'],
			page:true,
			autoPlay:false
		});

		// $('.searchBtn').on('click',function(){
		// 	console.log(666);
		// })

		//右下角广告轮播图,236,149
		$('.ad_lbt').ad_Carousel({
			imgs:['img/q111.png','img/q222.png','img/q333.png'],
			page:true,
			autoPlay:false
		});

		$('form').validate({
            // 验证规则
            rules:{
                username:{
                    required:true,
                    rangelength:[6,12]
                },
                passowrd:{
                    required:true,
                    rangelength:[6,12]
                },
                passowrd02:{
                    required:true,
                    rangelength:[6,12]
                }
            },
        })


		
	})
})

