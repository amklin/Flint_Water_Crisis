$(document).ready(function () {
    /*Title fades out on index.html when scrolling down to main content*/
    $(window).scroll(() => {
        /*Gets height of title and amount scrolled*/
        var scrollTop = $(window).scrollTop();
        var height = $('.title').height();
        var height2 = $('.title-2').height();

        /*Title gradually fades out and eventually fully disappears*/
        $('.title').css({
            'opacity': (((2.5 * height) - scrollTop) / (2.5 * height))
        });
        $('.title-2').css({
            'opacity': (((.7 * height) - scrollTop) / (.7 * height))
        });
    });

    /*Nav Bar Buttons*/

    /*All nav bar buttons/elements change styles on hover*/
    changeButtonOnHover('.time');
    changeButtonOnHover('.sol');
    changeButtonOnHover('.home');
    changeButtonOnHover('.bgl');
    changeButtonOnHover('.sor');
    changeButtonOnHover('.return');

    /*Function for changing button appearance on hover*/
    function changeButtonOnHover(button) {
        $(button).hover(() => {
            $(button).addClass('z-depth-3'); //Applies drop shadow
            $(button).css("background-color", "rgba(180, 189, 231, 0.7)");  //Lighter color background
            $(button).css("cursor", "pointer");  //Mouse cursor changes to pointer
        }, () => {
            //Styles reset to original when not hovering
            $(button).removeClass('z-depth-3');
            $(button).css("background-color", 'rgba(0, 0, 0, 0)');
        });
    }

    /*Return Back Button on Nav Bar*/

    /*Return link returns to previous page*/
    $('.return-link').on('click', () => {
        //Checks if there is a page to return to
        if (document.referrer.indexOf(window.location.hostname) != -1) {
            //If there is a page to return to, gets previous page link and links it to Return Back button
            var prevPage = document.referrer;
            $('.return-link').attr('href', prevPage);
        } else {
            //Displays error message if there is no page to return to
            alert('There is nowhere to return to.');
        }
    });

    /*Carousels*/

    /*Initialize carousel with Materialize function*/
    //$('.carousel').carousel();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

    /*Carousel Buttons Shift Carousels Left and Right*/

    /*All carousel buttons*/
    carouselButton('#left-1', '.mental-health', 'prev');  //Mental health carousel left button
    carouselButton('#right-1', '.mental-health', 'next');  //Mental health carousel right button
    carouselButton('#left-2', '.therapy-games', 'prev');  //Therapy games carousel left button
    carouselButton('#right-2', '.therapy-games', 'next');  //Therapy games carousel right button

    carouselButton('#left-3', '.solutions', 'prev');  //Therapy games carousel left button
    carouselButton('#right-3', '.solutions', 'next');  //Therapy games carousel right button

    carouselButton('#left-4', '.whyitmatters', 'prev');  //Therapy games carousel left button
    carouselButton('#right-4', '.whyitmatters', 'next');  //Therapy games carousel right button

    carouselButton('#left-5', '.background', 'prev');  //Therapy games carousel left button
    carouselButton('#right-5', '.background', 'next');  //Therapy games carousel right button

    /*Function for shifting carousel*/
    function carouselButton(button, carousel, movement) {
        $(button).on('click', () => {
            $(carousel).carousel(movement);
        });
    }
});