/**
 * Created by 季策 on 2016/12/27.
 */
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    var oPrve=$(".prve");
    var oNext=$(".next");
    var oXj_lund=$(".xj_lund");
    var page=0;
    oNext.click(function(){
        page++;
        if(page<3){
            oXj_lund.stop(true,true).animate({"left":page*-386+"px"})
        }else {
            page=2;
            oXj_lund.stop(true,true).animate({"left":2*-386+"px"})
        }
    })
    oPrve.click(function(){
        page--;
        if(page>-1){
            oXj_lund.stop(true,true).animate({"left":page*-386+"px"})
        }else {
            page=0
            oXj_lund.stop(true,true).animate({"left":0})
        }
    })
})