//列表
require(['config'],function(){
	require(['jquery','gdszoom','xq_Carousel','Carousel','ad_Carousel','list'],function(){
		$.ajax({
			url:'api/user.php',
			success:res=>{
				console.log(res);
			}
		})

		
	})
})

