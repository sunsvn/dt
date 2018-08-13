$(function () {
	

    //------------------注册页是否同意协议---------------
    var agree = true;
    $('#agree-btn').on('click',() => {
        agree = !agree;
        $("#agree-btn").toggleClass("unselect");
    })

    var tel = $('#tel');
    var pwd = $('#pwd');
    var yzmTu = $('#yzmTu');
    var yzmPhone = $('#yzmPhone');

    //----------------获取验证码-----------------------
    $('#yzmGet').on('click', function () {
        var telVal = tel.val();
        if( telVal == '' ){
            message('请输入手机号');
            return false;
        }
        if( !phoneChk(telVal) ){
            message('手机号有误');
            return false;
        }
        message('验证码已发到您手机');
        //请求数据
    })

    //----------------点击注册-----------------------
    $('#regBtn').on('click', function () {
        if(!agree) 
            return;
        var telVal = tel.val();
        var pwdVal = pwd.val();
        var yzmTuVal = yzmTu.val();
        var yzmPhoneVal = yzmPhone.val();
        if( telVal == '' ){
            message('请输入手机号');
            return false;
        }
        if( !phoneChk(telVal) ){
            message('手机号有误');
            return false;
        }
        if( pwdVal == '' ){
            message('请输入密码');
            return false;
        }
        if( yzmTuVal == '' ){
            message('请输入图形验证码');
            return false;
        }
        if( yzmPhoneVal == '' ){
            message('手机验证码');
            return false;
        }
        //请求数据
    })
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