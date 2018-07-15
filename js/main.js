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

$('.menu-btn').click(function () {
    $('#topics').toggleClass('nav-open');
    $('#hamburger, main, code, footer').toggleClass('change');
});
$('.arrow').click(function () {
    $('#sub').toggleClass('show-list');

})


$(window).resize(function() {
    if ($(window).width() <= 600) {
        $('.smoothScroll').click(function () {
            $('#topics').removeClass('nav-open');
            $('#hamburger').removeClass('change');
        });   

    }
});