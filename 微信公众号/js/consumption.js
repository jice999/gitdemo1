/**
 * Created by 季策 on 2017/2/14.
 */
$(function(){
    //事件委托
    $(".input_warp").delegate("input","focus",function(){
        $(this).parent().find("span").addClass("bg_circle")
    });
    $(".input_warp").delegate("input","blur",function(){
        $(this).parent().find("span").removeClass("bg_circle")
    })


})

