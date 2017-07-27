$('.burger img').click(function() {
    var src = ($(this).attr('src') === 'img/menu.png')
        ? 'img/cancel.png'
        : 'img/menu.png';
    $(this).attr('src', src);

    var header = $('.header');
    header.hasClass('openmenu')
    ? header.removeClass('openmenu')
    : header.addClass('openmenu');
});

var $document = $(document),
    $element = $('.header'),
    className = 'hasScrolled';

$document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 250);
});

$(document).ready(function() {
    $('.navLink').on('click', function() { 
        var page = $(this).attr('href');
        var speed = 750;
        var top = 0;
        if (page != '#news') {
            top = $(page).offset().top - 100;
        }
        $('html, body').animate( { scrollTop: top }, speed );


        $('.burger img').attr('src', 'img/menu.png');
        $('.header').removeClass('openmenu')
        return false;
    });
});