$(document).ready(function() {
    $(".sliderFixed").hide();
    $(".sliderFixed span.arrow").toggleClass("active");
    var a = false;
    $(".topmenuaction").click(function() {
        if (a) {
            return
        }
        a = true;
        $("#slider").slideToggle(function() {
            $(".sliderFixed").hide();
            a = false; /*$("body").css("overflow","auto")*/
        });
        return false
    });
    $(".fixedMenu a.down").click(function() {
        if (a) {
            return
        }
        a = true;
        $(".sliderFixed").fadeIn();
        $("#slider").slideToggle(function() {
            a = false; /*$("body").css("overflow","hidden")*/
        });
        return false
    })
    // auto open menu in mobile
    if($(window).width()<480 && window.location.pathname == '/') {
        a = true;
        $(".sliderFixed").fadeIn();
        $("#slider").slideToggle(function() {
            a = false; /*$("body").css("overflow","hidden")*/
        });
    }
});
