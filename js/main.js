// -------all-----------------------------------------------------------------

AOS.init();

lazyload();
// -------nav-----------------------------------------------------------------     


$(window).on("scroll", function() {
        let scrollPosition = $(this).scrollTop()
        console.log(scrollPosition)
        if (scrollPosition > 0) {
            $("nav").addClass("active")
            $(".main-list").addClass("active")
            $(".main-logo").addClass("active")

        } else {
            $("nav").removeClass("active")
            $(".main-list").removeClass("active")
            $(".main-logo").removeClass("active")

        }

        if (scrollPosition > 1900) {
            $(".draw1").addClass("active")
        }

    })
    // -------sandWitch-list-----------------------------------------------------------------  
$(".sandWitch").click(function() {
    $(".sandWitch-list").removeClass("active")
})
$(".sandWitch-list ul li").click(function() {
    $(".sandWitch-list").addClass("active")
})

// -------top-slider-img----------------------------------------------------------------- 

let index = 0
let sliderCount = $(".slider-img li").length
    // console.log(sliderCount)
$(".slider-img").css("width", sliderCount * 100 + "%")
$(".point li").eq(0).css("background", "#f49298")


$(".point li").mouseenter(function() {
        let index = $(this).index()
        console.log(index)
        let sliderMove = (0 - index * 100 + "%")
        $(".slider-img").css("left", sliderMove)
        $(this).css("background", "#f49298")
            .siblings().css("background", "#b2dac7")
    })
    // -------top-slider-img-time----------------------------------------------------------------- 

var autoSlide = setInterval(slideTimer, 3000);

function slideTimer() {
    index = index >= (sliderCount - 1) ? 0 : index + 1;


    let sliderMove = (0 - index * 100 + "%")
    $(".slider-img").css("left", sliderMove)

    $(".point li").eq(index).css("background", "#f49298")
        .siblings().css("background", "#b2dac7")

}
// ------scroll----------------------------------------------------------------- 
// $(".scroll").click(function() {
//     //$(window).scrollTop(0);
//     $("html,body").animate({ scrollTop: 960 }, 700);
// });

$('.scroll').click(function() {
    $('html,body').animate({ scrollTop: $('#news').offset().top }, 800);
});


// ------news----------------------------------------------------------------- 
var news1 = ["#news1", "#news2", "#news3"]
var news2 = ["#news2", "#news3", "#news1"]
var news3 = ["#news3", "#news1", "#news2"]
var i = 0
console.log(news1)

$("#chooseRight").click(function() {
    let news11 = news1[i];
    let news22 = news2[i];
    let news33 = news3[i];

    i++;
    if (i >= 3) i = 0

    let style1 = {
        left: "0",
        bottom: 50,
        zIndex: 1
    }

    let size1 = {
        width: "320",
        height: "190"
    }

    let style2 = {
        left: "240px",
        bottom: "0",
        zIndex: 77
    }

    let size2 = {
        width: "600",
        height: "350"
    }
    let style3 = {
        left: "730px",
        bottom: 50,
        zIndex: 1
    }

    $(news11).css(style3)
    $(news22).css(style1).find("figure").css(size1)
    $(news33).css(style2)
        .find("figure").css(size2)
})
var news1l = ["#news1", "#news3", "#news2"]
var news2l = ["#news2", "#news1", "#news3"]
var news3l = ["#news3", "#news2", "#news1"]

$("#chooseLeft").click(function() {
    let news11 = news1l[i];
    let news22 = news2l[i];
    let news33 = news3l[i];

    i++;
    if (i >= 3) i = 0

    let style1 = {
        left: "0",
        bottom: 50,
        zIndex: 1
    }

    let size1 = {
        width: "320",
        height: "190"
    }

    let style2 = {
        left: "240px",
        bottom: "0",
        zIndex: 77
    }

    let size2 = {
        width: "600",
        height: "350"
    }
    let style3 = {
        left: "730px",
        bottom: 50,
        zIndex: 1
    }

    $(news11).css(style2)
        .find("figure").css(size2)
    $(news22).css(style3).find("figure").css(size1)
    $(news33).css(style1)

})

// ------news-mobile-----------------------------------------------------------------