var useragent = navigator.userAgent;//获取UA
    if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {//判断是否是微信端查看网页
		document.addEventListener("DOMContentLoaded", function(event) {//写入提示
			document.open();
			document.write("<div style='font-size:22px;width: 98%;height:80px;line-height: 80px;border: solid 1px lightblue;top:35%;position: absolute;margin:0 auto;text-align: center;box-shadow: 5px 5px 5px #CCCCCC;'>请使用微信内置浏览器进行查看</div>");
			document.close();
		});
    }