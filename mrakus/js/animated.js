(function( $ ) {
    "use strict";

    var themesflat_animation_fadeup = function (container, item) {
        $(window).scroll(function () {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(container).each(function (index, value) {
                var objectBottom = $(this).offset().top + $(this).outerHeight() * 0.1;
                
                if (objectBottom < windowBottom) { 
                    var seat = $(this).find(item);
                    for (var i = 0; i < seat.length; i++) {
                        (function (index) {
                            setTimeout(function () {
                                seat.eq(index).addClass('tfanimated');
                            }, 200 * index);
                        })(i);
                    }
                }
            });
        }).scroll();
    };
    var themesflat_animation_classes_fadeup = function () {
        themesflat_animation_fadeup(".tf-animated-fadeup", ".icon-box");
        themesflat_animation_fadeup(".tf-animated-fadeup", ".animated-effect");
        themesflat_animation_fadeup(".tf-animated-fadeup", ".title-section");
        themesflat_animation_fadeup(".tf-animated-fadeup", ".breadcrumbs");
        themesflat_animation_fadeup(".tf-animated-fadeup .image-faq", ".image");
        themesflat_animation_fadeup(".tf-animated-fadeup.img-box-service", ".content");
    };

    var themesflat_animation_mousemove = function (container, element) {
        $(container).mousemove(function(e){
            var amountMovedX = (e.pageX * 0.1 / 15);
            var amountMovedY = (e.pageY * 0.1 / 15);
            $(this).find(element).css({
              '-webkit-transform' : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
              '-moz-transform'    : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
              '-ms-transform'     : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
              '-o-transform'      : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
              'transform'         : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
            });
        });
    };
    var themesflat_animation_mousemove_classes = function () {
        themesflat_animation_mousemove(".tf-mousemove.image-about",".imgefect");
        themesflat_animation_mousemove(".tf-mousemove",".bg-about"); 
    };

    var themesflat_animation_fadeleft = function (container, item) {
        $(window).scroll(function () {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(container).each(function (index, value) {
                var objectBottom = $(this).offset().top + $(this).outerHeight() * 0.1;
                
                if (objectBottom < windowBottom) { 
                    var seat = $(this).find(item);
                    for (var i = 0; i < seat.length; i++) {
                        (function (index) {
                            setTimeout(function () {
                                seat.eq(index).addClass('tfanimated');
                            }, 200 * index);
                        })(i);
                    }
                }
            });
        }).scroll();
    };
    var themesflat_animation_classes_fadeleft = function () {
        themesflat_animation_fadeleft(".tf-animated-fadeleft", ".animated-effect");
        themesflat_animation_fadeleft(".tf-animated-fadeleft", ".boder-rd10");
        themesflat_animation_fadeleft(".tf-animated-fadeleft", ".box-left");
        themesflat_animation_fadeleft(".tf-animated-fadeleft.img-box-service", ".image");
    };

    var themesflat_animation_faderight = function (container, item) {
        $(window).scroll(function () {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(container).each(function (index, value) {
                var objectBottom = $(this).offset().top + $(this).outerHeight() * 0.1;
                
                if (objectBottom < windowBottom) { 
                    var seat = $(this).find(item);
                    for (var i = 0; i < seat.length; i++) {
                        (function (index) {
                            setTimeout(function () {
                                seat.eq(index).addClass('tfanimated');
                            }, 300 * index);
                        })(i);
                    }
                }
            });
        }).scroll();
    };
    var themesflat_animation_classes_faderight = function () {
        themesflat_animation_faderight(".tf-animated-faderight", ".animated-effect");
        themesflat_animation_faderight(".tf-animated-faderight", ".img-style");
        themesflat_animation_faderight(".tf-animated-faderight", ".bg-about");
        themesflat_animation_faderight(".tf-animated-faderight", ".box-right");
        themesflat_animation_faderight(".tf-animated-faderight .image-faq", ".image2");
        themesflat_animation_faderight(".tf-animated-faderight.img-box-service", ".image");
    };

    var themesflat_animation_fadedown = function (container, item) {
        $(window).scroll(function () {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(container).each(function (index, value) {
                var objectBottom = $(this).offset().top + $(this).outerHeight() * 0.1;
                
                if (objectBottom < windowBottom) { 
                    var seat = $(this).find(item);
                    for (var i = 0; i < seat.length; i++) {
                        (function (index) {
                            setTimeout(function () {
                                seat.eq(index).addClass('tfanimated');
                            }, 300 * index);
                        })(i);
                    }
                }
            });
        }).scroll();
    };
    var themesflat_animation_classes_fadedown = function () {
        themesflat_animation_fadedown(".tf-animated-fadedown", ".animated-effect");
    };

    $(function() {
        themesflat_animation_classes_fadeup();
        themesflat_animation_mousemove_classes();
        themesflat_animation_classes_fadeleft();
        themesflat_animation_classes_faderight();
        themesflat_animation_classes_fadedown();
    });

})(jQuery);