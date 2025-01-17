$(document).ready(() => {
    $('.open-image').magnificPopup({
        type: 'image'
    });

    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $('#reviews-box').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    });

    $('.category').click((e) => {
        let currentElement = $(e.target);
        $('.products-container').hide();
        let id = currentElement.data('id');
        $('#' + id).show();

        $('.category').removeClass('active');
        currentElement.addClass('active');
    });

    $('.open-popup').click(() => {
        $('#popup-container').css('display', 'flex');
    });

    $('#popup-cancel, #popup-container').click((e) => {
        if (e.target.id === 'popup-container' || e.target.id === 'popup-cancel')
            $('#popup-container').hide();
    });

    $('#order-button').click(() => {
        let name = $('#name');
        let phone = $('#phone');
        let data = $('#data');

        let hasError = false;
        let input = $('.order-input');
        let error = $('.error-input');


        if (!name.val() || !phone.val() || !data.val()) {
            if (!name.val()) {
                name.siblings('.error-input').show();
                name.css('border-color', '#e94f4f');
                hasError = true;
            } else {
                name.siblings('.error-input').remove();
                name.css('border-color', 'rgb(39, 60, 17)');
            }
            if (!phone.val()) {
                phone.siblings('.error-input').show();
                phone.css('border-color', '#e94f4f');
                hasError = true;
            } else {
                phone.siblings('.error-input').remove();
                phone.css('border-color', 'rgb(39, 60, 17)');
            }
            if (!data.val()) {
                data.siblings('.error-input').show();
                data.css('border-color', '#e94f4f');
                hasError = true;
            } else {
                data.siblings('.error-input').remove();
                data.css('border-color', 'rgb(39, 60, 17)');
            }

        } else {
            if (name.val() && phone.val() && data.val()) {
                $('#popup-sent').show();
                $('#popup-content').hide();
            }
        }
        ;

    });

    $('#popup-sent-cancel, #popup-container').click((e) => {
        if (e.target.id === 'popup-container' || e.target.id === 'popup-sent-cancel')
            $('#popup-container').hide();
    });
    $('#popup-sent-action').click((e) => {
        $('#popup-container').hide();
        $('#product').show();
    });

    $('.callback-action').click(() => {
        $('#callback-container').css('display', 'flex')
    });

    $('#callback-container, #callback-cancel, #callback-sent-cancel').click((e) => {
        if (e.target.id === 'callback-container' || e.target.id === 'callback-cancel' || e.target.id === 'callback-sent-cancel')
            $('#callback-container').hide();
    });

    $('.call-me').click(() => {
        let number = $('#callback-phone');
        let hasError = false;
        let input = $('.order-input');
        let error = $('.error-input');

        if (!number.val()) {
            number.siblings('.error-input').show();
            number.css('border-color', '#e94f4f');
            hasError = true;
        } else {
            if (number.val()) {
                $('#callback-sent').show();
                $('#callback').hide();

            }
            ;
        }
    });

    let up = $('#up');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            up.css('display', 'block');
        }
        else {
            up.css('display', 'none');
        }
    });

    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    });
    $('#header-items, #header-items a').click(() => {
        $('#header').removeClass('menu-open');
    });



})