/**
 * Created by 季策 on 2017/2/14.
 */
$(function(){
    var arrCen_inp=$(".cen_inp");
    var arrCen_sele=$(".cen_sele");
    var arrCircle=$(".circle");
    var page;
    arrCen_inp.click(function(){
        page=$(this).index(".cen_inp");
        arrCircle.removeClass("circledj").eq(page).addClass("circledj");
    })
})

