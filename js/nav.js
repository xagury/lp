$(function () {

    jQuery.jqtab = function (button, content, affair)
    {
        $(content).find("div:first").show();

        $(button).find("li:first").children().addClass("active");
        $(button).find("li").bind(affair, function () {
            $('.rightTitle').show();
            var active = $(button).find("li").index(this);
            $(content).children().eq(active).show().siblings().hide();
            return false;
        });
    };

    jQuery.jqtabTitle = function (button, content, affair)
    {
        $(content).find("div:first").show();
        $(button).find("li:first").children().addClass("active");
        $(button).find("li").bind(affair,function () {
            $('.rightTitle').show();
            $(content).find("div:first").show();
            $(content).show().siblings().hide();
            $(this).children().addClass("active").parent().siblings("li").children().removeClass("active");
            var active = $(button).find("li").index(this);
            $(content).children('div').eq(active).show().siblings().hide();
            return false;
        });
    };

    jQuery.jqtabTitle1 = function (button, content, affair)
    {

        $(button).find("li:first").children().addClass("active");
        $(button).find("li").bind(affair,function () {
            $('.rightTitle').show();
            $(content).find("div:first").show();
            $(content).show().siblings().hide();
            $(this).children().addClass("active").parent().siblings("li").children().removeClass("active");
            var active = $(button).find("li").index(this);
            $(content).children('div').eq(active).show().siblings().hide();
            return false;
        });
    };
    jQuery.jqtabContent = function (button, content, affair)
    {


        $(button).find("li").bind(affair,function () {
            $('.rightTitle').hide();
            $(content).find("div:first").show();
            $(content).show().siblings().hide();
            var active = $(button).find("li").index(this);
            $(content).children('div').eq(active).show().siblings().hide();
            return false;
        });
    };


    $('#theme .kind .Title').each(function () {
        $('.all .themeUl').show();
        $(this).click(
            function (){
                $(this).next().toggle().parent().siblings().children('ol').hide();
            })
    })


    $('.theme  ol li').each(function () {
        $('.theme ol li').eq(0).css({'background':'#fff'});
        $('.theme ol li').eq(0).children().css({'color':'#BF1E40'});
        $(this).click(function () {
            $(this).css({'background':'#fff'}).siblings().css({'background':'#BF1E40'});
            $(this).children().css({'color':'#BF1E40'}).parent().siblings().children().css({'color':'#fff'});
        })
    })

    $.jqtab(".theme ol", ".rightTitle", "click");
    $.jqtabContent(".color .themeUl", ".content7", "click");
    $.jqtabContent(".know .themeUl", ".content8", "click");

    $.jqtabTitle(".title1", ".content1", "click");
    $.jqtabTitle1(".title2", ".content2", "click");
    $.jqtabTitle1(".title3", ".content3", "click");
    $.jqtabTitle1(".title4", ".content4", "click");
    $.jqtabTitle1(".title5", ".content5", "click");
    $.jqtabTitle1(".title6", ".content6", "click");
    var aTrue = 'false';
    $('#help').on({

        "click" : function () {
            $(this).children('#navHelp').toggle({display:"block"});
        },
        'mouseover' :function () {
            $(this).children('#navHelp').show();
        },
        'mouseout' :function () {
            $(this).children('#navHelp').hide();
        }

    })
    $('#theme').children('#allTheme').hide();
    aTrue = 'false';
    $('#theme').on({
        'click':function () {
            $(this).children('#allTheme').show();
            aTrue='true';
            $('#exit1').show();
        },

    })

    $('#exit1').click(function () {
        if (aTrue=='true') {
            $('#theme').children('#allTheme').hide();
            aTrue='false';
            $('#exit1').hide();
        }
    });


})

