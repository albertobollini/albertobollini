function login() {
    if ($currentLike != null) {
        $currentLike.trigger("click")
    }
}

function logout() {}

function successLike() {}

function resetFancy() {
    setTimeout(function() {
        var e = $("#like-loading");
        e.find(".text").text(e.data("loading"))
    }, 500)
}(function(e, t) {
    t.transitions.dropIn = function() {
        var e = t._getPosition(true);
        e.top = parseInt(e.top, 10) - 200 + "px";
        e.opacity = 0;
        t.wrap.css(e).show().animate({
            top: "+=200px",
            opacity: 1
        }, {
            duration: t.current.openSpeed,
            complete: t._afterZoomIn
        })
    };
    t.transitions.dropOut = function() {
        t.wrap.removeClass("fancybox-opened").animate({
            top: "-=200px",
            opacity: 0
        }, {
            duration: t.current.closeSpeed,
            complete: t._afterZoomOut
        })
    };
    t.transitions.slideIn = function() {
        var e = t._getPosition(true);
        e.left = parseInt(e.left, 10) - 200 + "px";
        e.opacity = 0;
        t.wrap.css(e).show().animate({
            left: "+=200px",
            opacity: 1
        }, {
            duration: t.current.nextSpeed,
            complete: t._afterZoomIn
        })
    };
    t.transitions.slideOut = function() {
        t.wrap.removeClass("fancybox-opened").animate({
            left: "+=200px",
            opacity: 0
        }, {
            duration: t.current.prevSpeed,
            complete: function() {
                e(this).trigger("onReset").remove()
            }
        })
    }
})(jQuery, jQuery.fancybox);
var $currentLike = null;
var $opts = {
    padding: 0,
    margin: 0,
    closeClick: false,
    tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        closeBtn: false
    },
    helpers: {
        title: {
            type: "inside"
        }
    },
    openMethod: "dropIn",
    closeMethod: "dropOut",
    closeSpeed: 250
};
var $postid = "";
$(document).ready(function() {
    $(window).resize(function() { /*if($(window).width()<=480) $('.news-magazine img').attr('src','ui/images/download-magazine-mobile.jpg'); else $('.news-magazine img').attr('src','ui/images/download-magazine.jpg');*/ });
    $(window).trigger('resize');
    
    $(".news-container").css("opacity", 0);
    var e = $(".news-container");
    e.imagesLoaded(function() {
        var t = $(window).width() <= 768 ? e.width() / 2 : e.width() / 3;
        $(".news-container .item:not(.no-image)").each(function() {
            var e = 0;
            e = $("img", $(this)).height();
            $(".caption, .caption .inner", $(this)).height(e)
        });
        e.isotope({
            masonry: {
                itemSelector: ".item",
                isResizable: false
            },
            animationOptions: {
                easing: "swing"
            }
        });
        $(window).trigger("smartresize");
        $(".initial-loading").hide();
        $(window).smartresize(function() {
            var t = e.width() / 3;
            if ($(window).width() <= 480) t = e.width();
            else if ($(window).width() <= 768) t = e.width() / 2;
            e.isotope({
                masonry: {
                    columnWidth: t,
                    fitColumns: true
                }
            });
            $(".news-container .item:not(.no-image)").each(function() {
                var e = 0;
                e = $("img", $(this)).height();
                $(".caption, .caption .inner", $(this)).height(e)
            })
        });
        $(".news-container").animate({
            opacity: 1
        }, 1e3, function() {
            e.infinitescroll({
                navSelector: ".next-page",
                nextSelector: ".next-page a",
                itemSelector: ".item",
                path: function() {
                    return $(".next-page a").attr("href")
                },
                debug: false,
                bufferPx: 100,
                loading: {
                    finishedMsg: "No more pages to load.",
                    img: "ui/images/loading-news.gif"
                }
            }, function(t) {
                var n = $(t);
                n.css("opacity", 0);
                n.imagesLoaded(function() {
                    n.filter(":not(.no-image)").each(function() {
                        var e = 0;
                        e = $("img", $(this)).height();
                        $(".caption, .caption .inner", $(this)).height(e)
                    }).hover(function() {
                        $(".caption", $(this)).fadeIn()
                    }, function() {
                        $(".caption", $(this)).fadeOut()
                    });
                    n.filter(".no-image").hover(function() {
                        $(".inline.down", $(this)).fadeIn()
                    }, function() {
                        $(".inline.down", $(this)).fadeOut()
                    }).find(".caption");
                    n.css("opacity", .5);
                    e.isotope("appended", n);
                    var t = n.filter(":last").data("next");
                    $(".next-page a").attr("href", t)
                })
            })
        })
    });
    $(window).resize(function() {});
    $(".news-container .item:not(.no-image)").hover(function() {
        $(".caption", $(this)).fadeIn()
    }, function() {
        $(".caption", $(this)).fadeOut()
    });
    $(".news-container .item.no-image .caption").css("opacity", "1");
    $(".news-container .item.no-image").hover(function() {
        $(".caption", $(this)).animate({
            opacity: 1
        });
        $(".inline.down", $(this)).fadeIn()
    }, function() {
        $(".caption", $(this)).animate({
            opacity: 1
        });
        $(".inline.down", $(this)).fadeOut()
    });
    var t = 0;
    $(".facebook_fancybox").fancybox({
        maxWidth: "85%",
        maxHeight: "85%",
        tpl: {
            wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
            closeBtn: '<a href="#"><span class="cr-close">close</span></a>'
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
        },
        closeMethod: "dropOut",
        closeSpeed: 250
    })
})