$(function () {
    //点击宝箱
    $('#baoxiang').on('click', function () {
        if(!false){   // true--已打开过宝箱，false--未打开过宝箱
            tan(14);    
        }else{
            tan(12);
        }
    })


    //打开宝箱
    $('#fgImg').on('click', function () {
        $('.tanbox').hide();
        tan(9)
    })

    //获得好友星星
    tan(3);
    $('.getXingXing').on('click', function () {
        addStar();
    })

    //加星星
    // addStar();
    function addStar () {
        var starArr = $('#starP span.yes');
        var starYesLen = starArr.length;
        if (starYesLen == 5)
            return ;
        var changeStar = $('#starP span').eq(starYesLen);
        changeStar.addClass('zoomOut');
        setTimeout(function () {
            changeStar.removeClass('zoomOut');
            changeStar.addClass('yes zoomIn');
        }, 500)
    }

    //减少星星
    //removeStar();
    function removeStar () {
        var starArr = $('#starP span.yes');
        var starYesLen = starArr.length;
        if (starYesLen == 0)
            return ;
        var changeStar = $('#starP span').eq(starYesLen - 1);
        changeStar.addClass('zoomOut');
        setTimeout(function () {
            changeStar.removeClass('zoomOut yes');
            changeStar.addClass('zoomIn');
        }, 500)
    }
})