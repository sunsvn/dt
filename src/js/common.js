$(function () {
    //关闭弹窗
    $('.closeBtn, .close').on('click', function () {
        $('.tanbox').hide();
    })

    //关闭分享页
    $('.shareP').on('click', function () {
        $(this).hide();
    })

    //查看规则
    $('#rule').on('click', function () {
        tan(13)
    })

    //请好友赐星星
    $('.shareNeed').on('click', function () {
        $('.tanbox').hide();
        $('#askforXing').show();
    })
    
    //赠送好友星星
    $('.sureShareXing').on('click', function () {
        $('.tanbox').hide();
        $('#shareXing').show();
    })
})


/*------type 对应弹窗
1.星星已被领完
2.你来晚了
3.获得好友星星x`
4.三颗以上才能开宝箱
5.星星不足赠送
6.请好友赐星
7.是否赠好友星
8.好友运势爆表
9.5团币（查看奖品）
10.补签卡
11.现金红包
12.5团币
13.活动规则
14.宝箱
------*/
function tan (type) {
    if($('#tan'+type)){
        $('#tan'+type).show();
    };
}


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