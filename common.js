// アコーディオン
$(function(){
    //クリックで動く
    $('.faq-content-q').click(function(){
        $(this).toggleClass('active');
        $(this).next('.faq-content-a').slideToggle();
    });
});