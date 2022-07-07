$(function () {
    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on');
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($(window).width() < 769) {
            e.preventDefault();
            $('.smenu').hide();
            $(this).next().show();
        }
    });

    $(window).on('resize', function () {
        $('.smenu').removeAttr('style')
    })
    // 모바일사이즈에서 .smenu show되어있는 거 window사이즈에 돌아왔을 때 제거 


})//the end