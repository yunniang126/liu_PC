//index
require(['config'],function(){
	require(['jquery','gdszoom','Carousel','ad_Carousel','list'],function(){
		
		// jQuery(function($){
			var pageNo = 1;
			var lastPage = 1;
			// jquery发起ajax请求
			$.ajax({
				url:'../api/list.php',
				data:{pageNo:pageNo,qty:6},

				// 设定返回数据类型
				dataType:'json',
				success:function(res){
					var $ul = $('<ul/>');
					var html = res.data.map(item=>{
						return `
							<li>
								<h4>${item.name}</h4>
								<img src="${item.img}">
								<p>${item.xiang}</p>
								<p>${item.jia}</p>
							</li>
						`
					});

					$ul.html(html).appendTo('.datalist');
					pageNo++;
				}
			});

			// 滚动更多
			$(window).on('scroll',function(){
				var scrollTop = $(window).scrollTop();
				var winHeight = $(window).height();
				var scrollHeight = $('html').outerHeight();

				// 如何判断滚动到最底部
				if(scrollTop >= scrollHeight - winHeight - 200){
					if(pageNo == lastPage) return;
					$.ajax({
						url:'../api/list.php',
						data:{pageNo:pageNo,qty:3},

						// 设定返回数据类型
						dataType:'json',
						success:function(res){
							var $ul = $('<ul/>');
							var html = res.data.map(item=>{
								return `
									<li>
										<h4>${item.name}</h4>
										<img src="${item.img}">
										<p>${item.xiang}</p>
										<p>${item.jia}</p>
									</li>
								`
							});

							$ul.html(html).appendTo('.datalist');

							pageNo++;
						}
					});

					// 更新lastPage
					lastPage = pageNo;
				}

			});
		// })
		


		
	})
})

