(function(){
	let datalist = document.querySelector('#datalist');
	let page = document.querySelector('#page');

	let pageNo = 1;
	let qty = 5;

	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = ()=>{
		console.log(666);
		
		if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
			var res = JSON.parse(xhr.responseText);
			console.log(res);
			// 生成分页
			let pageLen = Math.ceil(res.total/res.qty);
			page.innerHTML = '';
			for(var i=1;i<=pageLen;i++){
				var span = document.createElement('span');
				span.innerHTML = i;
				if(i===pageNo){
					span.className = 'active';
				}
				page.appendChild(span);
			}

			let ul = document.createElement('ul');

			ul.innerHTML = res.data.map(item=>{
				return `
					<li>
						<a href="goods.html" class='bao'>
						<h4>${item.name}</h4>
						<img src="${item.img}">
						<p>${item.xiang}</p>
						<p>${item.jia}</p>
						</a>
						<a href="goods.html" class='bao'>
						<h4>${item.name}</h4>
						<img src="${item.img}">
						<p>${item.xiang}</p>
						<p>${item.jia}</p>
						</a>
						<a href="goods.html" class='bao'>
						<h4>${item.name}</h4>
						<img src="${item.img}">
						<p>${item.xiang}</p>
						<p>${item.jia}</p>
						</a>
						<a href="goods.html" class='bao'>
						<h4>${item.name}</h4>
						<img src="${item.img}">
						<p>${item.xiang}</p>
						<p>${item.jia}</p>
						</a>
					</li>
				`
			}).join('');

			datalist.innerHTML = '';
			datalist.appendChild(ul);
		}
	}

	xhr.open('get','../api/list.php?pageNo='+pageNo + '&qty='+qty,true);
	xhr.send();

	// 分页切换
	page.onclick = e=>{
		console.log(666);
		if(e.target.tagName.toLowerCase() === 'span'){
			pageNo = Number(e.target.innerText);

			xhr.open('get','../api/list.php?pageNo='+pageNo + '&qty='+qty,true);
			xhr.send();
		}
			xhr.onreadystatechange = ()=>{
			if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
				var res = JSON.parse(xhr.responseText);
				console.log(res)
				// 生成分页
				let pageLen = Math.ceil(res.total/res.qty);
				page.innerHTML = '';
				for(var i=1;i<=pageLen;i++){
					var span = document.createElement('span');
					span.innerHTML = i;
					if(i===pageNo){
						span.className = 'active';
					}
					page.appendChild(span);
				}

				let ul = document.createElement('ul');

				ul.innerHTML = res.data.map(item=>{
					return `
						<li>
						<a href="goods.html" class='bao'>
						<h4>${item.name}</h4>
						<img src="${item.img02}">
						<p>${item.xiang}</p>
						<p>${item.jia}</p>
						</a>
						<a href="goods.html" class='bao'>
						<h4>${item.name}</h4>
						<img src="${item.img02}">
						<p>${item.xiang}</p>
						<p>${item.jia}</p>
						</a>
						<a href="goods.html" class='bao'>
						<h4>${item.name}</h4>
						<img src="${item.img02}">
						<p>${item.xiang}</p>
						<p>${item.jia}</p>
						</a>
						<a href="goods.html" class='bao'>
						<h4>${item.name}</h4>
						<img src="${item.img02}">
						<p>${item.xiang}</p>
						<p>${item.jia}</p>
						</a>
					</li>
					`
				}).join('');

				datalist.innerHTML = '';
				datalist.appendChild(ul);
			}
		}
	}
})();