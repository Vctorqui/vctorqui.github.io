/*---------------------------------Header------------------------------------*/

function headerAlt() {
    const scroll = $(window).scrollTop();
    const header = $("header");
    if(scroll > header.height()) {
        header.addClass("nav-down");
    } else {
        header.removeClass("nav-down")
    }
}

$(window).on("scroll", function () {
    headerAlt()
})

