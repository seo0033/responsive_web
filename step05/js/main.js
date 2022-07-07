$(function () {
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    // 위에랑 같은거
    // $('.mbtn').on('click',()=>$('.gnb').toggleClass('on'),console.log('잠온다'));

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.smenu').stop().slideUp();
            $(this).next().stop().slideToggle();
        }

    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.smenu').removeAttr('style')
    })

})//the end