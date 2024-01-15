// * 전체 스크롤 이벤트
$(window).scroll(function(){
    let sct = $(window).scrollTop();

    // * 메인2 영역
    let m2Top = $('#main2').offset().top - 700;
    if(sct >= m2Top) {
        $('.m2_item').addClass('visiOn');
    } else {
        $('.m2_item').removeClass('visiOn');
    };

    // * 메인3 영역
    let m3Top1 = $('.m3_box1').offset().top - 600;
    let m3Top2 = $('.m3_box2').offset().top - 600;
    if(sct >= m3Top1) {
        $('.m3b1_in').addClass('visiOn');
    } else {
        $('.m3b1_in').removeClass('visiOn');
    };
    if(sct >= m3Top2) {
        $('.m3b2_in').addClass('visiOn');
    } else {
        $('.m3b2_in').removeClass('visiOn');
    };

    // * 메인4 영역
    let m4Top1 = $('.m4Bn1').offset().top - 700;
    let m4Top2 = $('.m4Bn2').offset().top - 700;
    if(sct >= m4Top1) {
        $('.m4Bn1_in').addClass('visiOn');
    } else {
        $('.m4Bn1_in').removeClass('visiOn');
    };
    if(sct >= m4Top2) {
        $('.m4Bn2_in').addClass('visiOn');
    } else {
        $('.m4Bn2_in').removeClass('visiOn');
    }

    // * 메인5 영역
    let m5Top = $('#main5').offset().top - 700;
    if(sct >= m5Top) {
        $('.m5_item').addClass('visiOn');
    } else {
        $('.m5_item').removeClass('visiOn');
    };

    // * 메인6 영역
    let m6Top = $('#main6').offset().top - 900;
    if(sct >= m6Top) {
        $('.m6_in').addClass('visiOn');
    } else {
        $('.m6_in').removeClass('visiOn');
    };

    // * 메인7 영역
    let m7Top = $('#main7').offset().top - 700;
    if(sct >= m7Top) {
        $('.m7_in').addClass('visiOn');
    } else {
        $('.m7_in').removeClass('visiOn');
    };
});

// * 메인1 - 메인배너 슬라이드
$('.m1_Bn').slick({
    prevArrow : '.m1_prev',
    nextArrow : '.m1_next',
    dots : true,
    appendDots : '.m1_pager',
    autoplay : true,
    autoplaySpeed : 6000,
    speed : 1200
});
$('.m1_stop').click(function(){
    $('.m1_Bn').slick('slickPause');
    $(this).hide();
    $('.m1_play').show();
});
$('.m1_play').click(function(){
    $('.m1_Bn').slick('slickPlay');
    $(this).hide();
    $('.m1_stop').show();
});

// * 메인2 - 베스트셀러
$('.m2_item').slick({
    slidesToShow : 4,
    slidesToScroll : 2,
    prevArrow : '#main2 .main_arrow .arrow_left',
    nextArrow : '#main2 .main_arrow .arrow_right',
    speed : 1200
});

// * 메인5 - 추천아이템
$('.m5_cate li').click(function(){
    let i = $(this).index();
    $('.m5_cate li').removeClass('choice');
    $(this).addClass('choice');
    $('.m5_list').removeClass('view');
    $('.m5_list').eq(i).addClass('view');
    $('.m5_list').slick('setPosition');
});
$('.m5_list').slick({
    slidesToShow : 5,
    slidesToScroll : 2,
    speed : 1000
});