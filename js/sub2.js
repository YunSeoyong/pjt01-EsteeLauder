// * 전체 스크롤 이벤트
// * 1 - 창립자스토리
let nowt = $(window).scrollTop();
if(nowt >= 0) {
    $('.mb_top .box_text').addClass('visiOn');
}
$(window).scroll(function(){
    let sct = $(window).scrollTop();
    // * 2 - 트렌딩리포트
    let mtop2 = $('.mb_md').offset().top - 700;
    if(sct >= mtop2) {
        $('.box_tr .box_text').addClass('visiOn');
    } else {
        $('.box_tr .box_text').removeClass('visiOn');
    }

    // * 3 - 에너징 리더펀드
    let mtop3 = $('.mb_md').offset().top - 400;
    if(sct >= mtop3) {
        $('.md_right .box_text').addClass('visiOn');
    } else {
        $('.md_right .box_text').removeClass('visiOn');
    }

    // * 4 - 원료
    let mtop4 = $('.mb_md').offset().top - 200;
    if(sct >= mtop4) {
        $('.box_ig .box_text').addClass('visiOn');
    } else {
        $('.box_ig .box_text').removeClass('visiOn');
    }

    // * 5 - 가치와 목표
    let mtop5 = $('.mb_bt').offset().top - 600;
    if(sct >= mtop5) {
        $('.box_ovg .box_text').addClass('visiOn');
    } else {
        $('.box_ovg .box_text').removeClass('visiOn');
    }

    // * 6 - 라이브캐스트
    let mtop6 = $('.mb_bt').offset().top - 600;
    if(sct >= mtop6) {
        $('.box_lb .box_text').addClass('visiOn');
    } else {
        $('.box_lb .box_text').removeClass('visiOn');
    }
});