var slidesToShow=4
$(document).ready(function ($) {

    new WOW().init();

    getWindowWidth()

    $("#pickUp").click( function() {
        $(window).scrollTop(0);
      });
   
});

window.addEventListener("scroll", function (event) {

    let top = this.scrollY;

    if (top > 1300) {
        document.getElementById("pickUp").style.display = 'block';
    } else {
        document.getElementById("pickUp").style.display = 'none';
    }
});
window.addEventListener("orientationchange", function (event) {
    console.log('hi')
    $('.slider').slick('unslick');
    getWindowWidth()
});
window.addEventListener("resize", function (event) {
    $('.slider').slick('unslick');
    getWindowWidth()
});

function initSlick(){
    console.log(slidesToShow)
    $('.slider').slick({
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        ]
    });
}

function getWindowWidth(){
    let wid = document.body.offsetWidth
    if ( wid<= 769 && wid>425) {
           slidesToShow = 2;
            reInit();
        }else if(wid<= 426){
            slidesToShow = 1;
            reInit();
        }else{
        slidesToShow = 4;
        reInit();
    }
}
function reInit() {
            initSlick()
            document.querySelector(".slick-next") ? document.querySelector(".slick-next").innerHTML = "<span class='mdi mdi-chevron-right'></span>" : '';
            document.querySelector(".slick-next") ? document.querySelector(".slick-prev").innerHTML = "<span class='mdi mdi-chevron-left'></span>" : '';
       
    }

function favourite(el) {
    if (el.classList.contains("mdi-heart")) {
        el.classList.remove("mdi-heart");
        el.classList.add("mdi-heart-outline");
    } else if (el.classList.contains("mdi-heart-outline")) {
        el.classList.remove("mdi-heart-outline");
        el.classList.add("mdi-heart");
    }
}


