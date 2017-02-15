/**
 * Created by 季策 on 2016/12/26.
 */
$(function () {
    /*轮播1开始*/
    (function () {
        $("#header").load("header.html");
        $("#footer").load("footer.html");
        var oCp_lund = $(".cp_lund");
        var oPrve = $(".prve");
        var oNext = $(".next");
        var oXp_lunxhzd = $(".xp_lunxhzd");
        var arrXp_img = $(".xp_img");
        var page = 0;
        arrXp_img.click(function () {
            page = $(this).index(".xp_img");
            if (page == 0) {
                oCp_lund.css("left", "0");
                oXp_lunxhzd.css("left", "0");
            } else if (page == 1) {
                oCp_lund.css("left", "-650px");
                oXp_lunxhzd.css("left", "-120px");
            }
            arrXp_img.removeClass("xp_imgdj").eq(page).addClass("xp_imgdj")
        });
        oNext.click(function () {
            oCp_lund.css("left", "-650px");
            oXp_lunxhzd.css("left", "-120px");
            arrXp_img.removeClass("xp_imgdj").eq(1).addClass("xp_imgdj")
        });
        oPrve.click(function () {
            oCp_lund.css("left", "0");
            oXp_lunxhzd.css("left", "0");
            arrXp_img.removeClass("xp_imgdj").eq(0).addClass("xp_imgdj")
        });
    })();
    /*轮播1结束*/
    /*轮播2开始*/
    (function () {
        var oLunx = $(".lunx");
        var oLund = $(".lund");
        var oZuo = $(".zuo");
        var oYou = $(".you");
        var page = 0;
        oYou.click(function () {
            page++;
            if(page<3){
                oLund.stop(true,true).animate({"left":page*-276+"px"})
            }else {
                page=2;
                oLund.stop(true,true).animate({"left":2*-276+"px"})
            }

        });
        oZuo.click(function () {
            page--;
            if(page>-1){
                oLund.stop(true,true).animate({"left":page*-276+"px"})
            }else {
                page=0
                oLund.stop(true,true).animate({"left":0})
            }

        })


    })();
    /*轮播2开始*/
})