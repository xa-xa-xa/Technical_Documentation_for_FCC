// universal scrool //
$(() => {
    //this will select everything with the class ".smoothScroll"
    $('.smoothScroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            console.log(this.hash);
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 75
                }, 1000); // speen in milliseconds
                return false;
            }
        }
    });
});

// hamburger menu 
// const hamburgerMenu = (x)=>{
//     x.classList.toggle("change");
// }

//menu
var windowWidth = window.innerWidth;



window.addEventListener("resize", function () {
    console.log("---" + this.innerWidth);
    if (innerWidth < 600) {
        console.log("resized to mobile!")
        $('#topics').click(function () {
            $('#topics').removeClass('nav-open');
            $('#hamburger').removeClass('change');
        });
    }
    if (innerWidth > 599) {
        console.log("resized to desktop!")
        $('#topics').removeClass('nav-open');
        $('#hamburger, main, code, footer').removeClass('change');
    }
});


$(function widthOnLoad() {
    $('.menu-btn').click(function () {
        $("#hamburger").toggleClass('change');
        $('#topics').toggleClass('nav-open');
    });

    console.log('with on load - ' + windowWidth)

    if (windowWidth < 600) { //menu functionality specific for mobile   
        console.log("it is moble!")
        $('#topics').click(function () {
            $('#topics').toggleClass('.nav-open');
            $('#hamburger').toggleClass('change');
        })
    }
    if (windowWidth > 599) { //menu functionality for desktop
        console.log("it is desktop!")
        $('.menu-btn').click(function () {
            $('main, code, footer').toggleClass('change');
        });
    };
});
// ***********************************************************//

//to show sub menu of 5.1
$('.arrow').click(function () {
    $('#sub').toggleClass('show-list');

})