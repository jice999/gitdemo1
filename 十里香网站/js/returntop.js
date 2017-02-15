/**
 * Created by 季策 on 2016/12/19.
 */
/*返回顶部开始*/
$(function(){
(function(){
    var scrollTOP;
    var oF_top=$(".f_top");
    var timer=0;
    scrollTOP=$(window).scrollTop();
    if(scrollTOP>300){
        oF_top.show();
    }else{
        oF_top.hide();
    }
    $(window).scroll(function(){
        scrollTOP=$(this).scrollTop();
        if(scrollTOP>300){
            oF_top.show();
        }else{
            oF_top.hide();
        }
    });
    oF_top.click(function(){
        $('body').animate({ scrollTop: 0 },"ease");
    })
})();
/*返回顶部结束*/
})