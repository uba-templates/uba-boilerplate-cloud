window.onload = function(){
    // 页面滚动事件
    $(window).scroll(function(){
        var topHeight = $(window).scrollTop();
        var wHeight = $(window).height();

        topHeight != 0 ? $('.backtop').addClass('active'): $('.backtop').removeClass('active');
        $('.backtop').on('click', function(){
            $('body').animate({
                scrollTop:0
            },500);
        })
    })


}
