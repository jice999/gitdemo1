/**
 * Created by 季策 on 2016/12/21.
 */
$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    (function () {
        var oZt_lund = $(".zt_lund");
        var oPrev = $(".prev");
        var oNest = $(".nest");
        var arrZt_li = $(".zt_li");
        var oZt_lunx = $(".zt_lunx");
        var oZt_luno = $(".zt_luno");
        var Width=$(window).width();
        oZt_luno.css({"width":Width+"px"});
        oZt_lund.css({width:oZt_lunx.length*Width+"px"});
        oZt_lunx.css({"width":Width+"px"});
        var page=1;
        var timer;
        arrZt_li.click(function(){
            page=$(this).index(".zt_li")+1;
            arrZt_li.removeClass("zt_lidj").eq(page-1).addClass("zt_lidj");
            oZt_lund.stop(true,true).animate({"left":-page*Width+"px"},1000);
        });
        function next(){
            page++;
            if(page<oZt_lunx.size()-1){
                oZt_lund.stop(true,true).animate({"left":-page*Width+"px"},1000);

            }else {
                page=1;
                oZt_lund.stop(true,true).animate({"left":4*-Width+"px"},1000,function(){
                    oZt_lund.css("left",-Width+"px")
                });
            }
            arrZt_li.removeClass("zt_lidj").eq(page-1).addClass("zt_lidj");
        };
        oPrev.click(function(){
            page--;
            if(page>=1){
                oZt_lund.stop(true,true).animate({"left":-page*Width+"px"},1000);

            }else {
                page=3;
                oZt_lund.stop(true,true).animate({"left":0+"px"},1000,function(){
                    oZt_lund.css("left",page*-Width+"px")
                });
            }
            arrZt_li.removeClass("zt_lidj").eq(page-1).addClass("zt_lidj");
        });
        oNest.click(function() {next()});
        timer=setInterval(next,4000);
        oZt_luno.mouseover(function(){
            clearInterval(timer);
            timer=0;
        });
      oZt_luno.mouseout(function(){
          if(timer==0){
              timer=setInterval(next,4000);
          }
      })
    })();
    /*竖着的轮播开始*/
    (function(){
        var oSz_yo=$(".sz_yo");
        var oSz_yd=$(".sz_yd");
        var arrSz_yx=$(".sz_yx");
        var oSz_top=$(".sz_top");
        var oSz_btoom=$(".sz_btoom");
        var arrSz_zx=$(".sz_zx");
        var page=0;
        /*右边的选项卡开始*/
        oSz_btoom.click(function(){
            if(page<arrSz_yx.size()-1){
                page++;
            }

            $("body").css({"background":"url('img/shu"+page+".jpg') no-repeat center","background-attachment":"fixed"});
            xiaoguo();
        });
        oSz_top.click(function(){
            if(page>0){
                page--;
            }
            $("body").css({"background":"url('img/shu"+page+".jpg') no-repeat center","background-attachment":"fixed"});
            xiaoguo();
        });
        arrSz_yx.click(function(){
            page=$(this).index();
            $("body").css({"background":"url('img/shu"+page+".jpg') no-repeat center","background-attachment":"fixed"});
            xiaoguo();
        });
        function xiaoguo(){
            arrSz_zx.fadeOut(100).eq(page).fadeIn(100);
            arrSz_yx.removeClass("sz_yxdj").eq(page).addClass("sz_yxdj");
            if(page==0||page==1){
                oSz_yd.stop(true,true).animate({"top":0},1000)
            }else if(page==arrSz_yx.size()-1||page==arrSz_yx.size()-2||page==arrSz_yx.size()-3){
                oSz_yd.stop(true,true).animate({"top":(arrSz_yx.size()-5)*-100+"px"})
            }else {
                oSz_yd.stop(true,true).animate({"top":(page-2)*-100+"px"})
            }
            if(page>0){
                oSz_top.removeClass("sz_topdi")
            }else {
                oSz_top.addClass("sz_topdi")
            }if(page>=arrSz_yx.size()-1){
                oSz_btoom.addClass("sz_topdi")
            }else {
                oSz_btoom.removeClass("sz_topdi")
            }
        }
        /*右边的选项卡结束*/
    })();
/*竖着的轮播结束*/
    /*横向轮播开始*/
    (function(){
        var oHl_yo=$(".hl_yo");
        var oHl_yd=$(".hl_yd");
        var oHl_z=$(".hl_z");
        var oHl_y=$(".hl_y");
        var oHl_luno=$(".hl_luno");
        var oHl_lund=$(".hl_lund");
        var arrHl_n1=$(".hl_n1");
        var page=0;
        oHl_y.click(function(){
           oHl_yd.css("left","-410px")
        });
        oHl_z.click(function(){
            oHl_yd.css("left",0)
        });
        arrHl_n1.click(function(){
            page=$(this).index(".hl_n1");
            arrHl_n1.removeClass("hl_n1dj").eq(page).addClass("hl_n1dj");
            oHl_lund.stop(true,true).animate({"top":page*-415+"px"},500)
        })
    })();
   /*横向轮播年结束*/
    (function(){
      var oZt_jiao=$(".zt_jiao");
        oZt_jiao.click(function(){
           $(window).scrollTop(740);
            /*$("boby").animate({ scrollTop: 700 },"ease");*/
        })

    })()





})
