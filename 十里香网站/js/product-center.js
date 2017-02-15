/**
 * Created by 季策 on 2016/12/24.
 */
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    (function(){
        var oPct_span=$(".pct_span");
        var oPczt_b=$(".pczt_b");
        var oBian=$(".bian");
        var arr=["小刀","十里香"];
        var page;
        oPct_span.click(function(){
            page=$(this).index(".pct_span");
            oPct_span.removeClass("pct_ding").eq(page).addClass("pct_ding");
            oPczt_b.hide().eq(page).show();
            oBian.text(arr[page]);
        })
    })()

       /* $(".cp_zh").click(function(){  oMainbody.load("pc-z1.html")}*/

})