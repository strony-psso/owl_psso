AOS.init();


$(window).on("load", ()=> {
    $("#txt-move").addClass("animation");
    setTimeout(()=> {
        $(".flying").addClass("fly");
    },1000);
})

$(window).on("scroll", ()=> {
    if($(window).scrollTop() > 100) {
        $("#menu").addClass("active");
    } else {
        $("#menu").removeClass("active");
    }
})

$("#toggler").on("click", ()=> {
    $("#menu").toggleClass("visible");
    $("#toggler").toggleClass("active");
})