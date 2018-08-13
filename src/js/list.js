$(function () {

	//抽红包
    $('.btn3').on('click', function(){
        var index = $(this).index();
        tan(11);
    })

    //下拉加载更多
    var hasMore = true;   //是否有更多可以加载
    var myscroll = new iScroll("wrapper",{
		onScrollMove:function(){
			if (hasMore) {
				if (this.y<(this.maxScrollY)) {
					$('.pull_icon').addClass('flip');
					$('.pull_icon').removeClass('loading');
					$('.more span').text('释放加载...');
				}else{
					$('.pull_icon').removeClass('flip loading');
					$('.more span').text('上拉加载...')
				}
			}else{
				$('.more span').text('没有更多了');
			}
			
		},
		onScrollEnd:function(){
			console.log(2);
			if ($('.pull_icon').hasClass('flip')) {
				$('.pull_icon').addClass('loading');
				$('.more span').text('加载中...');
				pullUpAction();
			}
			
		},
		onRefresh:function(){
			console.log(3);
			$('.more').removeClass('flip');
			$('.more span').text('上拉加载...');
		}
		
	});
	
	function pullUpAction(){
		setTimeout(function(){
			/*$.ajax({
				url:'/json/ay.json',
				type:'get',
				dataType:'json',
				success:function(data){
					for (var i = 0; i < 5; i++) {
						$('.scroller ul').append(data);
					}
					myscroll.refresh();
				},
				error:function(){
					console.log('error');
				},
			})*/
			for (var i = 0; i < 5; i++) {
				$('.scroller ul').append("<li>新的li</li>");
			}
			myscroll.refresh();
			
		}, 1000)
	}

})

