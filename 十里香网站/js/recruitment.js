/**
 * Created by 季策 on 2016/12/28.
 */
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    var oZp_shi=$(".zp_shi");
    var oZp_cha=$(".zp_cha");
    var oZp_Z=$(".zp_Z");
    var page1;
    oZp_cha.click(function(){
        page1=$(this).index(".zp_cha");
        if(oZp_Z.eq(page1).height()==0){
            oZp_cha.removeClass("zp_chadj").eq(page1).addClass("zp_chadj");
            oZp_Z.removeClass("zp_Zdj").eq(page1).addClass("zp_Zdj");
        }else {
            oZp_cha.removeClass("zp_chadj");
            oZp_Z.removeClass("zp_Zdj");
        }
    });
        var oPct_span=$(".pct_span");
        var oZp_nr=$(".zp_nr");
        var oBian=$(".bian");
        var arr=["校园招聘","社会招聘"];
        var page;
        oPct_span.click(function(){
            page=$(this).index(".pct_span");
            oPct_span.removeClass("pct_ding").eq(page).addClass("pct_ding");
            oZp_nr.hide().eq(page).show();
            oBian.text(arr[page]);
        });
        (function(){
            var page2=window.location.hash;
            console.log(page2);
            if(page2=="#0xyzp"){
                page=0;
            }else{
                page=1;
            }
            oPct_span.removeClass("pct_ding").eq(page).addClass("pct_ding");
            oZp_nr.hide().eq(page).show();
            oBian.text(arr[page]);
        })();
});