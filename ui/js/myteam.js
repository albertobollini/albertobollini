$(document).ready(function () {
    var a = $(".sponsors-container");
    $(".sponsors-container").hide();
    a.imagesLoaded(function () {
        $(".sponsors-container").fadeIn(1000);
        $(".sponsors-container .item").each(function () {
            var b = $("img", $(this)).height();
            $(".caption, .caption .inner", $(this)).height(b)
        })
    });
    $(".sponsors-container .item").hover(function () {
        var b = $(this).width();
        var c = $(this).height();
        $(".caption", $(this)).css("marginTop", -c).show().animate({
            marginTop: 0
        }, 200), "ease"
    }, function () {
        //$(".caption", $(this)).fadeOut("200")
    })


    $('a.boxvideo').fancybox({
        topRatio: 0.1,
        maxWidth: "85%",
        maxHeight: "85%",
        tpl: {
            wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
            closeBtn: '<a href="#"><span class="cr-close">close</span></a>',
        },
        helpers: {
        	media: {
                youtube: {
                    params: {
                        wmode: "opaque"
                    }
                }
            },
            overlay: {
                css: {
                    background: "rgba(0, 0, 0, 0.4)"
                }
            },
            title: {
                type: "inside"
            }
        }
    });

});
