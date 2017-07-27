$('.burger img').click(function() {
    var src = ($(this).attr('src') === 'img/menu.png')
        ? 'img/cancel.png'
        : 'img/menu.png';
    $(this).attr('src', src);

    var header = $('.header');
    var className = (header.attr('class') === 'header')
        ? 'header openmenu'
        : 'header';
    header.attr('class', className);
});

var $document = $(document),
    $element = $('.header'),
    className = 'hasScrolled';

$document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 250);
});

$(document).ready(function() {
    $('.navLink').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        var top = 0;
        if (page != '#news') {
            top = $(page).offset().top - 100;
        }
        $('html, body').animate( { scrollTop: top }, speed ); // Go

        return false;
    });
});