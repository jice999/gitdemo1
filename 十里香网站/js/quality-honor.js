/**
 * Created by 季策 on 2016/12/27.
 */
$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    var oPrve = $(".prve");
    var oNext = $(".next");
    var oRl_lund = $(".rl_lund");
    var oRl_lunx = $(".rl_lunx");
    var oPz_bot=$(".pz_bot");
    var oPz_hn=$(".pz_hn");
    var page=0;
    oRl_lunx.click(function () {
        page = $(this).index(".rl_lunx");
        oRl_lunx.removeClass("rl_lunxdj").eq(page).addClass("rl_lunxdj");
        oPz_hn.hide().eq(page).show();
        if (page < 6) {
            oRl_lund.stop(true, true).animate({"left": -page * 156 + "px"})
        }
    });
   oNext.click(function(){
       page++;
       if (page<6){
           oRl_lund.stop(true, true).animate({"left": -page * 156 + "px"})

       }else {
           page=5;
           oRl_lund.stop(true, true).animate({"left": 5 * -156 + "px"})
       }
   })
    oPrve.click(function(){
        page--;
        if (page>-1){
            oRl_lund.stop(true, true).animate({"left": -page * 156 + "px"})

        }else {
            page=0;
            oRl_lund.stop(true, true).animate({"left":0})
        }
    });
    oPz_bot.click(function(){
        page++;
        if(page<7){
            oPz_hn.hide().eq(page).show();
            oRl_lunx.removeClass("rl_lunxdj").eq(page).addClass("rl_lunxdj");
            if (page < 6) {
                oRl_lund.stop(true, true).animate({"left": -page * 156 + "px"})
            }else {
                page=5;
                oRl_lund.stop(true, true).animate({"left": 5 * -156 + "px"})
            }
        }
    })








})