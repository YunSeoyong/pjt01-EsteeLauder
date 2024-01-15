// * 전체 스크롤 이벤트
$(window).scroll(function(){
    let sct = $(window).scrollTop();
    
    // * 한정 이벤트 영역
    $('.limit_list ul > li').each(function(){
        let liTop = $(this).offset().top - 800;
        if(sct >= liTop){
            $(this).addClass('visiOn');
        }
    });
    // * 상시 이벤트 영역
    $('.regul_list ul > li').each(function(){
        let reTop1 = $(this).offset().top - 800;
        let reTop2 = $(this).offset().top - 700;
        if(sct >= reTop1){
            $(this).find('.re_icon').addClass('visiOn');
            $(this).find('.left_photo').addClass('visiOn');
        }
        if(sct >= reTop2){
            $(this).find('.regul_txt').addClass('visiOn');
            $(this).find('.share_txt').addClass('visiOn');
        }
    });
});