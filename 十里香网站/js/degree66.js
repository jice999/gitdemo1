/**
 * Created by 季策 on 2016/12/29.
 */
$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    var arrli = $(".li9");
    var oPrve = $(".prve");
    var oNext = $(".next");
    var page = 1;
    var ce = 0;
    oNext.click(function () {
        page++;
        if (page > 4) {
            page = 1;
        }
        ce = page;
        arrli.each(function (i) {
            if (ce > 4) {
                ce = 1;
            }
            arrli.eq(i).attr({"class": 'li9 p' + (ce++)});
        })
    });
    oPrve.click(function () {
        page--;
        if (page < 0) {
            page = 4;
        }
        ce = page;
        arrli.each(function (i) {
            if (ce < 0) {
                ce = 4;
            }
            arrli.eq(i).attr({"class": 'li9 p' + (ce--)});
        })
    });
    var pageTime = 0;
    $(".pb_d").html("");
    loadegree66Data();
    $(".pb_jz").click(function () {
        pageTime++;
        loadegree66Data();
    });
    function loadegree66Data() {
        (function(){
            dark();
            function light(){
                $(".down").stop().animate({"opacity":"1"},1000,"linear",function(){
                    dark();
                })
            }
            function dark(){
                $(".down").stop().animate({"opacity":"0"},1000,"linear",function(){
                    light();
                })
            }
        })();
        var degree66 = degree66Data["degree66Data0" + pageTime];
        if (!degree66 || !degree66.data.degree66.length) {
            return;
        }
        if (degree66.success == "成功") {
            var data = degree66.data;
            var arrDegree = data.degree66;
            for (var i = 0; i < arrDegree.length; i++) {
                var itemHtml = $("#itemHtml").html();
                itemHtml = itemHtml.replace("$articleId$", arrDegree[i].sysId)
                    .replace("$articleCover$", arrDegree[i].coverImg)
                    .replace("$articleTitle$", arrDegree[i].title)
                $(".pb_d").append(itemHtml)
            }
            var count = data.count;
            var pageSize = data.pageSize;
            var pageStart = data.pageStart;
            if (Math.floor(count / pageSize) == pageStart) {
                $(".pb_jz").css("opacity", "0.3");
            }
        }
    }
})