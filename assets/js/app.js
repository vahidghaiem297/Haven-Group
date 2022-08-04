function OpenNav(element) {
    var Menu = document.getElementById("mymenu");
    if (Menu.className === "menu") {
        Menu.className += " responsive";
     
      $('#mobile-menu').addClass('fa-x');
      $('#mobile-menu').removeClass('fa-bars');

    } else {
        Menu.className = "menu";
        $('#mobile-menu').addClass('fa-bars');
        $('#mobile-menu').removeClass('fa-x');
    }
}
$(document).ready(function(){
$(window).scroll(function(){
if (window.scrollY > 100) {
    $('#header').addClass("sticky");
}else{
    $('#header').removeClass("sticky");
}
});
});



$(document).ready(function () {
    $('.responsive').slick({
        arrows:true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint:600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});
$(document).ready(function () {
    $('.responsive-2').slick({
        arrows:true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint:600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});
$(document).ready(function () {
    $('.responsive-3').slick({
        arrows:true,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint:600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});