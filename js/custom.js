$(document).ready(function () {
    $('.main-box-col-1').hover(function () {
        $('.read-more').css("color", "white");
        $('#col1-heading').css("color", "white");
        $('#col1-p').css("color", "white");
        $('#famessage-1').css("background-color", "#ffff")
    }, function () {
        $('.read-more').css("color", "#2db6fa");
        $('#col1-heading').css("color", "#444444");
        $('#col1-p').css("color", "#444444");
        $('#famessage-1').css("background-color", "#dbf3fe")
    });

})
$(document).ready(function () {
    $('.main-box-col-2').hover(function () {
        $('.read-more-2').css("color", "white");
        $('#col1-heading-2').css("color", "white");
        $('#col1-p2').css("color", "white");
        $('#famessage2').css("background-color", "#ffff")
    }, function () {
        $('.read-more-2').css("color", "#f68c09");
        $('#col1-heading-2').css("color", "#444444");
        $('#col1-p2').css("color", "#444444");
        $('#famessage2').css("background-color", "#fde3c4 ")
    });

})
$(document).ready(function () {
    $('.main-box-col-3').hover(function () {
        $('.read-more-3').css("color", "white");
        $('#col1-heading-3').css("color", "white");
        $('#col1-p3').css("color", "white");
        $('#famessage3').css("background-color", "#ffff")
    }, function () {
        $('.read-more-3').css("color", "#08da4e");
        $('#col1-heading-3').css("color", "#444444");
        $('#col1-p3').css("color", "#444444");
        $('#famessage3').css("background-color", "#cffddf ")
    });

})
$(document).ready(function () {
    $('.main-box-col-4').hover(function () {
        $('#readmore').css("color", "white");
        $('#col1-heading4').css("color", "white");
        $('#col1-p4').css("color", "white");
        $('#famessage-4').css("background-color", "#ffff")
    }, function () {
        $('#readmore').css("color", " #e9222c");
        $('#col1-heading4').css("color", "#444444");
        $('#col1-p4').css("color", "#444444");
        $('#famessage-4').css("background-color", "#fae4e7")
    });

})
$(document).ready(function () {
    $('.main-box-col-5').hover(function () {
        $('#readmore5').css("color", "white");
        $('#col1-heading5').css("color", "white");
        $('#col1-p5').css("color", "white");
        $('#famessage5').css("background-color", "#ffff")
    }, function () {
        $('#readmore5').css("color", " #b50edf");
        $('#col1-heading5').css("color", "#444444");
        $('#col1-p5').css("color", "#444444");
        $('#famessage5').css("background-color", "#f8e4fd")
    });

})
$(document).ready(function () {
    $('.main-box-col-6').hover(function () {
        $('#readmore6').css("color", "white");
        $('#col1-heading6').css("color", "white");
        $('#col1-p6').css("color", "white");
        $('#famessage6').css("background-color", "#ffff")
    }, function () {
        $('#readmore6').css("color", "#f51f9c");
        $('#col1-heading6').css("color", "#444444");
        $('#col1-p6').css("color", "#444444");
        $('#famessage6').css("background-color", "#feecf7")
    });

})

$(document).ready(function () {
    $('#price-1').css("color", "#65c600");
    $('#price-2').css("color", "#ff901c");
    $('#price-3').css("color", "##ff0071");
    $('#Check').css(" font-weight", "700");
})
$(document).ready(function () {
    $('#slide-down').click(function () {
        $('#hide').slideDown();
        $('#heading-cl').css('color', ' #4154f1');
        $('#slide-down').hide();
        $('#slide-up').show();
    })
    $('#slide-up').click(function () {
        $('#hide').slideUp();
        $('#slide-down').show();
        $('#slide-up').hide();
        $('#heading-cl').css('color', '#444444');
    })
})
$(document).ready(function () {
    $('#slide-down2').click(function () {
        $('#hide2').slideDown();
        $('#heading-cl2').css('color', ' #4154f1');
        $('#slide-down2').hide();
        $('#slide-up2').show();
        $('.hr1').hide()
    })
    $('#slide-up2').click(function () {
        $('#hide2').slideUp();
        $('#slide-down2').show();
        $('#slide-up2').hide();
        $('#heading-cl2').css('color', ' #444444');
        $('.hr1').hide()
    })
})
$(document).ready(function () {
    $('#slide-down3').click(function () {
        $('#hide3').slideDown();
        $('#heading-cl3').css('color', ' #4154f1');
        $('#slide-down3').hide();
        $('#slide-up3').show();
        $('.hr1').hide()
    })
    $('#slide-up3').click(function () {
        $('#hide3').slideUp();
        $('#slide-down3').show();
        $('#slide-up3').hide();
        $('#heading-cl3').css('color', ' #444444');
        $('.hr1').hide()
    })
})
$(document).ready(function () {
    $('#slide-down4').click(function () {
        $('#hide4').slideDown();
        $('#heading-cl4').css('color', ' #4154f1');
        $('#slide-down4').hide();
        $('#slide-up4').show();
        $('.hr1').hide();
    })
    $('#slide-up4').click(function () {
        $('#hide4').slideUp();
        $('#slide-down4').show();
        $('#slide-up4').hide();
        $('#heading-cl4').css('color', ' #444444');
        $('.hr1').hide()
    })
})
$(document).ready(function () {
    $('#slide-down5').click(function () {
        $('#hide5').slideDown();
        $('#heading-cl5').css('color', ' #4154f1');
        $('#slide-down5').hide();
        $('#slide-up5').show();
        $('.hr1').hide();
    })
    $('#slide-up5').click(function () {
        $('#hide5').slideUp();
        $('#slide-down5').show();
        $('#slide-up5').hide();
        $('#heading-cl5').css('color', ' #444444');
        $('.hr1').hide()
    })
})
$(document).ready(function () {
    $('#slide-down6').click(function () {
        $('#hide6').slideDown();
        $('#heading-cl6').css('color', ' #4154f1');
        $('#slide-down6').hide();
        $('#slide-up6').show();
        $('.hr1').hide();
    })
    $('#slide-up6').click(function () {
        $('#hide6').slideUp();
        $('#slide-down6').show();
        $('#slide-up6').hide();
        $('#heading-cl6').css('color', ' #444444');
        $('.hr1').hide();
    })
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        center: true,
        autoplayTimeout: 2000,
        autoplay: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('#heading-size').css('font-size', '1.5rem');

    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('.header-area');
        if (window.pageYOffset > 100) {
            navbar.classList.add('sticky');
        }
        else {
            navbar.classList.remove('sticky');
            navbar.classList.add('sticky-out');
        }
    });

    $('#mobile-nav-menu').click(function () {
        $('.nav-bar').addClass("active");
    })
    $('#mobile-nav-close').click(function () {
        $('.nav-bar').removeClass("active");
    })
   
})






