$('.open-popup-client').click(function(e) {
    e.preventDefault();
    $('.pb').fadeIn(900);
    $('html').addClass('noScroll');
})

$(".fa-times").click(function(e){
    $('.pb').fadeOut(900);
    $('html').removeClass('noScroll')
})


