// * 메인배너 슬라이드
$('.mBn').slick({
    prevArrow : '.mBn_prev',
    nextArrow : '.mBn_next',
    dots : true,
    appendDots : '.mBn_pager',
    autoplay : true,
    autoplaySpeed : 6000,
    speed : 1200
});
$('.mBn_stop').click(function(){
    $('.mBn').slick('slickPause');
    $(this).hide();
    $('.mBn_play').show();
});
$('.mBn_play').click(function(){
    $('.mBn').slick('slickPlay');
    $(this).hide();
    $('.mBn_stop').show();
});

// * 베스트셀러 아이템 셀렉트
$('.page_cate li').click(function(e){
    e.preventDefault();
    let i = $(this).index();
    let skincare = $('.item_skincare');
    let makeup = $('.item_makeup');
    let perfume = $('.item_perfume');
    $('.page_cate li').removeClass('choice');
    $(this).addClass('choice');
    switch(i) {
        
        case 1 :
            skincare.show();
            makeup.hide();
            perfume.hide();
            break;
        case 2 :
            skincare.hide();
            makeup.show();
            perfume.hide();
            break;
        case 3 :
            skincare.hide();
            makeup.hide();
            perfume.show();
            break;
        
        default :
            $('.ab_item li').show();
    }
});