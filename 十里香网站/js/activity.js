/**
 * Created by 季策 on 2016/12/24.
 */
$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    var oNext = $(".next");
    var oPrve = $(".prve");
    var arrHd_gg = $(".hd_gg");
    var arrHd_fz = $(".hd_fz");
    var page=0;
    arrHd_gg.click(function () {
        page = $(this).index(".hd_gg");
        arrHd_gg.removeClass("hd_ndj").eq(page).addClass("hd_ndj");
        arrHd_fz.hide().eq(page).show()
    });
    oNext.click(function () {
        page++;
        if(page>arrHd_gg.size()-1){
           page=0;
        }
        arrHd_gg.removeClass("hd_ndj").eq(page).addClass("hd_ndj");
        arrHd_fz.hide().eq(page).show()
    });
    oPrve.click(function(){
        page--;
        if(page<0){
            page=arrHd_gg.size()-1
        }
        arrHd_gg.removeClass("hd_ndj").eq(page).addClass("hd_ndj");
        arrHd_fz.hide().eq(page).show()
    })
});


