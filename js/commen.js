// <<<<전문서 공통 스크립트>>>>
// * 전체 스크롤 이벤트
$(window).scroll(function(){
    let sct = $(window).scrollTop();
    if(sct >= 450){
        $('#header').css('margin-top', '-90px');
        $('.gnb_d2').css('top', '60px');
    } else {
        $('#header').css('margin-top', 0);
        $('.gnb_d2').css('top', '150px');
    }

    // * TOP
    if(sct >= 500){
        $('.goTopBtn').css('opacity', 1)
    } else {
        $('.goTopBtn').css('opacity', 0)
    }
});

// * 헤더 - 검색하기
$('.btn_search').click(function(){
    $('.h_search').stop().slideToggle(300);
});

// * 헤더 - gnb
$('.gnb_d1 li').mouseover(function(){
    $(this).find('.gnb_d2').stop().slideDown(300);
}).mouseout(function(){
    $(this).find('.gnb_d2').stop().slideUp(300);
});

