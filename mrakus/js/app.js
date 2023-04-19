; (function ($) {
  "use strict";

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  var themesflatTheme = {

    // Main init function
    init: function () {
      this.config();
      this.events();
    },

    // Define vars for caching
    config: function () {
      this.config = {
        $window: $(window),
        $document: $(document),
      };
    },

    // Events
    events: function () {
      var self = this;

      // Run on document ready
      self.config.$document.on('ready', function () {


        // Retina Logos
        self.retinaLogo();


      });

      // Run on Window Load
      self.config.$window.on('load', function () {

      });
    },


    // Retina Logos

  }; // end themesflatTheme

  // Start things up
  themesflatTheme.init();

  var ajaxContactForm = function () {
    $('#contactform,#commentform').each(function () {
      $(this).validate({
        submitHandler: function (form) {
          var $form = $(form),
            str = $form.serialize(),
            loading = $('<div />', { 'class': 'loading' });

          $.ajax({
            type: "POST",
            url: $form.attr('action'),
            data: str,
            beforeSend: function () {
              $form.find('.form-submit,comment-form').append(loading);
            },
            success: function (msg) {
              var result, cls;
              if (msg === 'Success') {
                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                cls = 'msg-success';
              } else {
                result = 'Error sending email.';
                cls = 'msg-error';
              }

              $form.prepend(
                $('<div />', {
                  'class': 'flat-alert ' + cls,
                  'text': result
                }).append(
                  $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                )
              );

              $form.find(':input').not('.submit').val('');
            },
            complete: function (xhr, status, error_thrown) {
              $form.find('.loading').remove();
            }
          });
        }
      });
    }); // each contactform
  };

  var retinaLogos = function () {
    var retina = window.devicePixelRatio > 1 ? true : false;
    if (retina) {
      $('.header__logo').find('img').attr({ src: '../img/logo@2x.png', width: '185', height: '41' });
      $('.header__logo.style2').find('img').attr({ src: '../img/logo3@2.png', width: '184', height: '42' });

      $('.footer__logo').find('img').attr({ src: '../img/logo2@2x.png', width: '184', height: '42' });
    }
  };


  // Header Fixed
  var headerFixed = function () {
    if ($('body').hasClass('header-fixed')) {
      var nav = $('#header_main');
      if (nav.length) {
        var offsetTop = nav.offset().top,
          headerHeight = nav.height(),
          injectSpace = $('<div />', {
            height: headerHeight
          }).insertAfter(nav);
        $(window).on('load scroll', function () {
          if ($(window).scrollTop() > 200) {
            nav.addClass('is-fixed');
            injectSpace.show();
          } else {
            nav.removeClass('is-fixed');
            injectSpace.hide();
          }

          if ($(window).scrollTop() > 300) {
            nav.addClass('is-small');
          } else {
            nav.removeClass('is-small');
          }
        })
      }
    }
  };

  var headerFixed2 = function () {
    if ($('body').hasClass('header-fixed2')) {
      var nav = $('#header_main');
      if (nav.length) {
        var offsetTop = nav.offset().top,
          // headerHeight = nav.height(),
          injectSpace = $('<div />', {
            // height: headerHeight
          }).insertAfter(nav);
        $(window).on('load scroll', function () {
          if ($(window).scrollTop() > 200) {
            nav.addClass('is-fixed');
            injectSpace.show();
          } else {
            nav.removeClass('is-fixed');
            injectSpace.hide();
          }

          if ($(window).scrollTop() > 300) {
            nav.addClass('is-small');
          } else {
            nav.removeClass('is-small');
          }
        })
      }
    }
  };

  // Mobile Navigation
  var mobileNav = function () {
    var mobile = window.matchMedia("(max-width: 991px)");
    var wrapMenu = $("#header-inner");
    var navExtw = $(".nav-extend.active");
    var navExt = $(".nav-extend.active").children();

    responsivemenu(mobile);

    mobile.addListener(responsivemenu);

    function responsivemenu(mobile) {
      if (mobile.matches) {
        $("#main-nav")
          .attr("id", "main-nav-mobi")
          .appendTo("#header_main")
          .hide()
          .children(".menu")
          .append(navExt)
          .find("li:has(ul)")
          .children("ul")
          .removeAttr("style")
          .hide()
          .before('<span class="arrow"></span>');
      } else {
        $("#main-nav-mobi")
          .attr("id", "main-nav")
          .removeAttr("style")
          .prependTo(wrapMenu)
          .find(".ext")
          .appendTo(navExtw)
          .parent()
          .siblings("#main-nav")
          .find(".sub-menu")
          .removeAttr("style")
          .prev()
          .remove();

        $(".mobile-button").removeClass("active");
        $(".sub-menu").css({ display: "block" });
      }
    }
    $(document).on("click", ".mobile-button", function () {
      $(this).toggleClass("active");
      $("#main-nav-mobi").slideToggle();
    });
    $(document).on("click", "#main-nav-mobi .arrow", function () {
      $(this).toggleClass("active").next().slideToggle();
    });
  };
  var ajaxSubscribe = {
    obj: {
      subscribeEmail: $('#subscribe-email'),
      subscribeButton: $('#subscribe-button'),
      subscribeMsg: $('#subscribe-msg'),
      subscribeContent: $("#subscribe-content"),
      dataMailchimp: $('#subscribe-form').attr('data-mailchimp'),
      success_message: '<div class="notification_ok">Thank you for joining our mailing list! Please check your email for a confirmation link.</div>',
      failure_message: '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
      noticeError: '<div class="notification_error">{msg}</div>',
      noticeInfo: '<div class="notification_error">{msg}</div>',
      basicAction: 'mail/subscribe.php',
      mailChimpAction: 'mail/subscribe-mailchimp.php'
    },

    eventLoad: function () {
      var objUse = ajaxSubscribe.obj;

      $(objUse.subscribeButton).on('click', function () {
        if (window.ajaxCalling) return;
        var isMailchimp = objUse.dataMailchimp === 'true';

        if (isMailchimp) {
          ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
        } else {
          ajaxSubscribe.ajaxCall(objUse.basicAction);
        }
      });
    },

    ajaxCall: function (action) {
      window.ajaxCalling = true;
      var objUse = ajaxSubscribe.obj;
      var messageDiv = objUse.subscribeMsg.html('').hide();
      $.ajax({
        url: action,
        type: 'POST',
        dataType: 'json',
        data: {
          subscribeEmail: objUse.subscribeEmail.val()
        },
        success: function (responseData, textStatus, jqXHR) {
          if (responseData.status) {
            objUse.subscribeContent.fadeOut(500, function () {
              messageDiv.html(objUse.success_message).fadeIn(500);
            });
          } else {
            switch (responseData.msg) {
              case "email-required":
                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email is required.</strong>'));
                break;
              case "email-err":
                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email invalid.</strong>'));
                break;
              case "duplicate":
                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email is duplicate.</strong>'));
                break;
              case "filewrite":
                messageDiv.html(objUse.noticeInfo.replace('{msg}', 'Error! <strong>Mail list file is open.</strong>'));
                break;
              case "undefined":
                messageDiv.html(objUse.noticeInfo.replace('{msg}', 'Error! <strong>undefined error.</strong>'));
                break;
              case "api-error":
                objUse.subscribeContent.fadeOut(500, function () {
                  messageDiv.html(objUse.failure_message);
                });
            }
            messageDiv.fadeIn(500);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          alert('Connection error');
        },
        complete: function (data) {
          window.ajaxCalling = false;
        }
      });
    }
  };

  var alertBox = function () {
    $(document).on('click', '.close', function (e) {
      $(this).closest('.flat-alert').remove();
      e.preventDefault();
    })

  };

  var flatAccordion = function () {
    var args = { duration: 600 };
    $('.flat-toggle .toggle-title.active').siblings('.toggle-content').show();

    $('.flat-toggle.enable .toggle-title').on('click', function () {
      $(this).closest('.flat-toggle').find('.toggle-content').slideToggle(args);
      $(this).toggleClass('active');
    }); // toggle 

    $('.flat-accordion .toggle-title').on('click', function () {
      if (!$(this).is('.active')) {
        $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
        $(this).toggleClass('active');
        $(this).next().slideToggle(args);
      } else {
        $(this).toggleClass('active');
        $(this).next().slideToggle(args);
      }
    }); // accordion
  };

  var parallax = function () {
    if ($().parallax && isMobile.any() == null) {
      $(".parallax").parallax("50%", 0.2);
    }
  };
  var goTop = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
        $('#scroll-top').addClass('show');
      } else {
        $('#scroll-top').removeClass('show');
      }
    });

    $('#scroll-top').on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, 200, 'easeInOutExpo');
      return false;
    });
  };

  var popupVideo = function () {
    if ($().magnificPopup) {
      $(".popup-youtube").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }
  };

  var tabs = function () {
    $('.flat-tabs').each(function () {
      $(this).find('.content-tab').children().hide();
      $(this).find('.content-tab').children().first().show();
      $(this).find('.menu-tab').children('li').on('click', function () {
        var liActive = $(this).index();
        var contentActive = $(this).siblings().removeClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive);
        contentActive.addClass('active').fadeIn("slow");
        contentActive.siblings().removeClass('active');
        $(this).addClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive).siblings().hide();
      });
    });
  };

  var flatCounter = function () {
    if ($(document.body).hasClass("counter-scroll")) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(".counter").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          if ($().countTo) {
            $(".counter")
              .find(".count-number")
              .each(function () {
                var to = $(this).data("to"),
                  speed = $(this).data("speed"),
                  formatter = $(this).data('formatter');
                $(this).countTo({
                  to: to,
                  speed: speed,
                  formatter: formatter,
                });
              });
          }
          a = 1;
        }
      });
    }
  };

  var topSearch = function () {
    $(document).on('click', function (e) {
      var clickID = e.target.id;
      if ((clickID !== 's')) {
        $('.top-search').removeClass('show');
      }
    });

    $('.show-search').on('click', function (event) {
      event.stopPropagation();
    });

    $('.search-form').on('click', function (event) {
      event.stopPropagation();
    });

    $('.show-search').on('click', function (event) {
      if (!$('.top-search').hasClass("show")) {
        $('.top-search').addClass('show');
        event.preventDefault();
      }

      else
        $('.top-search').removeClass('show');
      event.preventDefault();

      if (!$('.show-search').hasClass("active"))
        $('.show-search').addClass('active');
      else
        $('.show-search').removeClass('active');
    });
  }

  var clearcheckbox = function () {
    $('.clear-checkbox').on('click', function () {
      $('.form-checkbox').find('input').prop('checked', false);
    });

    $('a.clear-checkbox').on('click', function (e) {
      e.preventDefault();
    });
  };


  var Preloader = function () {
    setTimeout(function () {
      $(".preload").fadeOut("slow", function () {
        $(this).remove();
      });
    }, 1000);
  };

  var parallax = function () {
    if ($().parallax && isMobile.any() == null) {
      $(".parallax").parallax("50%", 0.2);
    }
  };


  // Dom Ready
  $(function () {
    headerFixed();
    headerFixed2();
    $(window).on('load resize', function () {
      parallax();
      retinaLogos();
    });
    mobileNav();
    ajaxSubscribe.eventLoad();
    ajaxContactForm();
    alertBox();
    flatAccordion()
    goTop();
    popupVideo();
    tabs();
    flatCounter();
    topSearch();
    clearcheckbox();
    Preloader();
  });

})(jQuery);