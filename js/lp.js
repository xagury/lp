function cookieUser() {
    let xU=document.querySelector('#auser');
    xU.innerHTML = readCookie('name');

}



//单击jq
function indexMain() {
    $(document).ready(function(){
        jQuery.jqtab = function(button,content,affair)
        {
            $(content).find("div:first").show();

            $(button).find("div:first").addClass("active");

            $(button).find("div").bind(affair,function()
            {
                $(this).addClass("active").siblings("div").removeClass("active");
                var active =$(button).find("div").index(this);

                $(content).children().eq(active).show().siblings().hide();
                return false;
            });
        }

        $.jqtab(".tabhead",".tabbody","click");

    });
}



