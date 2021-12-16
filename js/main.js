$(document).ready(function () {
    /*Title fades out on index.html when scrolling down to main content*/
    $(window).scroll(() => {
        /*Gets height of title and amount scrolled*/
        var scrollTop = $(window).scrollTop();
        var height = $('#title').height();

        /*Title gradually fades out and eventually fully disappears*/
        $('#title').css({
            'opacity': (((1.5 * height) - scrollTop) / (1.5 * height))
        });
    });

    /*Nav Bar Buttons*/

    /*All nav bar buttons/elements change styles on hover*/
    changeButtonOnHover('.sign-in');
    changeButtonOnHover('.sign-up');
    changeButtonOnHover('.return');
    changeButtonOnHover('.title-links');
    changeButtonOnHover('.title-ment');
    changeButtonOnHover('.title-ther');
    changeButtonOnHover('.twenforate');
    changeButtonOnHover('.food-snake');
    changeButtonOnHover('.matching');
    changeButtonOnHover('.mood-tracker');
    changeButtonOnHover('.resources');
    changeButtonOnHover('.importance');
    changeButtonOnHover('.effects');

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

    /*Nav Bar Dropdowns*/

    /*Primary and secondary dropdowns initially hidden*/
    $('.primary').hide();  //Primary dropdown
    $('.secondary').hide();  //Secondary dropdown

    /*Primary dropdown is displayed if hovering over
      "Links" title, primary dropdown, and secondary dropdowns*/
    showGen('.title-links');
    showGen('.primary');
    showGen('.secondary');

    /*Function for displaying primary dropdown*/
    function showGen(element) {
        $(element).hover(() => {
            $('.primary').show();  //Primary dropdown is displayed
            $('.arrow-ud').html("&#11165;");  //Arrow in primary dropdown title is pointed up
        }, () => {
            $('.primary').hide();  //Primary dropdown is hidden
            $('.arrow-ud').html("&#11167;");  //Arrow in primary dropdown title is pointed down
        });
    }

    /*Secondary mental health dropdown is displayed if hovering over
      "Mental Health Resources" title and mental health secondary dropdown*/
    showSpec('.title-ment', '.ment', '.arrow-lr-1');
    showSpec('.ment', '.ment', '.arrow-lr-1');

    /*Secondary therapy games dropdown is displayed if hovering over
      "Therapy Games" title and therapy games secondary dropdown*/
    showSpec('.title-ther', '.ther', '.arrow-lr-2');
    showSpec('.ther', '.ther', '.arrow-lr-2');

    /*Function for displaying secondary dropdowns*/
    function showSpec(hovered, element, arrow) {
        $(hovered).hover(() => {
            $('.secondary').show();
            $(element).show();  //Selected secondary dropdown is shown 
            $(element).siblings().hide();  //Other secondary dropdown remains hidden
            $(arrow).html("&#11164;");  //Arrow in secondary dropdown title is pointed left
        }, () => {
            $('.secondary').hide();  //Secondary dropdown title is hidden
            $(arrow).html("&#11166;");  //Arrow in secondary dropdown title is pointed right
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
    $('.carousel').carousel();

    /*Carousel shifts automatically every 1000 milliseconds (10 seconds)*/
    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 10000);
    }

    /*Carousel Buttons Shift Carousels Left and Right*/

    /*All carousel buttons*/
    carouselButton('#left-1', '.mental-health', 'prev');  //Mental health carousel left button
    carouselButton('#right-1', '.mental-health', 'next');  //Mental health carousel right button
    carouselButton('#left-2', '.therapy-games', 'prev');  //Therapy games carousel left button
    carouselButton('#right-2', '.therapy-games', 'next');  //Therapy games carousel right button

    /*Function for shifting carousel*/
    function carouselButton(button, carousel, movement) {
        $(button).on('click', () => {
            $(carousel).carousel(movement);
        });
    }
});