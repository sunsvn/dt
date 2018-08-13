//app
//刷新
if(Jsbridge.isApp()){
	Jsbridge.appLifeHook(null,null,null,null,function(){
	    location.reload();
	});
}

