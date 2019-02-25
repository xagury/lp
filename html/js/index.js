


$(function () {
    //menu 按钮
    $('.hint').children().hide();
    $('#menu').find('button').each(function () {

        $(this).on({
            'mouseover' :function () {
                var active = $(this).index();
                $('.hint').children('div').eq(active).fadeIn(500).siblings().fadeOut(300);
            },
            'mouseout' :function () {
                $('.hint').children().fadeOut(100);
            }
        })
    })


    $('#interHelp .btnHelp').on({
        'mouseenter' : function () {
            $(this).animate({left:0},1100,function () {
                $(this).next().slideDown('slow');
            });
        }
    })
    $('#interHelp .contentHelp').on({
        'mouseleave' :function () {
            $(this).slideUp('slow',function () {
                $(this).prev().animate({left:-330},1000);

            });

        }
    })
    var time=null;
    time = setInterval(function () {
        //$('#hint').fadeOut(500).fadeIn(500);
        $('#hint').animate({marginTop: 10,opacity:0.3},'slow')
        $('#hint').animate({marginTop: 0,opacity:1},'slow')
        $('.reminder').animate({opacity:0.3},'slow')
        $('.reminder').animate({opacity:1},'slow')
    },500)

})
