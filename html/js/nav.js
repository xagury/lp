$(function () {

    jQuery.jqtab = function (button, content, affair,affair1)
    {

        $(button).find("h3").bind(affair, function () {
            var active = $(button).find("h3").index(this);
            $(content).children().eq(active).css('visibility','visible').siblings().css('visibility','hidden');
            return false;
        });
        $(content).bind(affair1, function () {
            $(content).children().css('visibility','hidden');
            $(button).css('visibility','hidden');
            return false;
        },function () {
            $(button).bind('mouseout', function () {
                $(content).children().css('visibility','hidden');
                return false;
            });
        });

    };

    jQuery.jqtab1 = function (button, content, affair,affair1)
    {

        $(button).find("li").bind(affair, function () {
            var active = $(button).find("li").index(this);
            $(content).children().eq(active).css('visibility','visible').siblings().css('visibility','hidden');
            return false;
        });
        $(button).bind(affair1, function () {
            $(button).css('visibility','hidden');
            $(content).children().css('visibility','hidden');
            return false;
        });
    };


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

    $('#allTheme').hide();
    $('#theme').on({
        'click' : function(){
            console.log(1)  ;
            $(this).children('#allTheme').show();
        },
        'mouseenter' : function(){
            console.log(1);
            $(this).children('#allTheme').show();
        },
        'mouseleave' : function () {
            $(this).children('#allTheme').hide();
        }
    })
    $.jqtab("#allTheme", "#con", "mouseover",'mouseleave');
    $.jqtab1("#con ol.ol1", "#allCon", "mouseover",'mouseleave');
    $.jqtab1("#con ol.ol2", "#allCon1", "mouseover",'mouseleave');
    $.jqtab1("#con ol.ol3", "#allCon2", "mouseover",'mouseleave');
    $.jqtab1("#con ol.ol4", "#allCon3", "mouseover",'mouseleave');





})

