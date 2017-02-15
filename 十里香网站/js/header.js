/**
 * Created by 季策 on 2016/12/21.
 */
$(function(){
    var oH_sy=$(".h_sy");
    var oLih=$(".lih");
    var oMainbody=$(".mainbody");
    var page=window.location.hash;
    page=page.replace(/[^0-9]+/g,'');
    oLih.removeClass("lidj").eq(page).addClass("lidj");
})