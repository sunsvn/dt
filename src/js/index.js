$(function () {
   // 百度地图API功能
	var map = new BMap.Map("allmap");            // 创建Map实例
	var mPoint = new BMap.Point(116.404, 39.915);  
	map.enableScrollWheelZoom();
	map.centerAndZoom(mPoint,15);

	var circle = new BMap.Circle(mPoint,1000,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
    map.addOverlay(circle);
    var local =  new BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}});  
    local.searchNearby('学校',mPoint,1000);

    var placeJson = {
        'station':  [
            {
                'icon': 'A',
                'name': '公交站1',
                'desc': [
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车'
                ]
            },
            {
                'icon': 'B',
                'name': '公交站2',
                'desc': [
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车'
                ]
            },
        ],
        'school': [
            {
                'icon': 'A',
                'name': '学校1',
                'desc': [
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车'
                ]
            },
            {
                'icon': 'B',
                'name': '学校2',
                'desc': [
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车'
                ]
            },
        ],
        'hospital': [
            {
                'icon': 'A',
                'name': '医院1',
                'desc': [
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车'
                ]
            },
            {
                'icon': 'B',
                'name': '医院2',
                'desc': [
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车'
                ]
            },
        ],
        'bank': [
            {
                'icon': 'A',
                'name': '银行1',
                'desc': [
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车'
                ]
            },
            {
                'icon': 'B',
                'name': '银行2',
                'desc': [
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车',
                    '1路车'
                ]
            },
        ]
    }

    //切换
    $('#placeTab').on('click', 'li', function(){
        $(this).addClass('cur').siblings('li').removeClass('cur');
        var target = $(this).attr('target');
        var listArr = placeJson[target];
        reloadList(listArr);
        var searchKey = '';
        switch (target) {
            case 'station':
                searchKey = '公交站';
                break;
            case 'school':
                searchKey = '学校';
                break;
            case 'hospital':
                searchKey = '医院';
                break;
            case 'bank':
                searchKey = '银行';
                break;
        }
        local.searchNearby(searchKey,mPoint,1000);
    })

    function reloadList (listArr) {
        var listAppend = '';
        console.log(listArr);
        for(var i=0,len=listArr.length; i<len; i++) {
            var spanItem = '';
            var spanArr = listArr[i].desc;
            for(var j=0,len2=spanArr.length; j<len2; j++) {
                spanItem += '<span>'+spanArr[j]+'</span>'
            }
            console.log(spanItem);
            listAppend += '<li class="clearfix">'+
                '<span class="iconL">'+listArr[i].icon+'</span>'+
                '<p class="placeName">'+listArr[i].name+'</p>'+
                '<p class="placeDesc">'+ spanItem +
                '</p>'+
            '</li>'
        }
        $('#placeList').html(listAppend);
    }
})





// 提示
$('body').append(function() {
    return "<center class='tip_wrap'><span class='tip'></span></center>";
});
function message(msg) {
    $('.tip').text(msg);
    $('.tip_wrap').show();
    setTimeout(function() {
        $('.tip_wrap').hide();
    }, 5000);
}

//手机验证
function phoneChk( phone ){
    if(!/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(phone))
    {
      return false;
    }
    else{
        return true;
    }
}