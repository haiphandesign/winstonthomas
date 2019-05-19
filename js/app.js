//  ________  ___       ________  ________  ________  ___          
// |\   ____\|\  \     |\   __  \|\   __  \|\   __  \|\  \         
// \ \  \___|\ \  \    \ \  \|\  \ \  \|\ /\ \  \|\  \ \  \        
//  \ \  \  __\ \  \    \ \  \\\  \ \   __  \ \   __  \ \  \       
//   \ \  \|\  \ \  \____\ \  \\\  \ \  \|\  \ \  \ \  \ \  \____  
//    \ \_______\ \_______\ \_______\ \_______\ \__\ \__\ \_______\
//     \|_______|\|_______|\|_______|\|_______|\|__|\|__|\|_______|



// Global: Load Page Header & Footer

// $('#header').load('./inc/header.html');
// $('#footer').load('./inc/footer.html');


// Global: Fixed Header

$(document).ready(function () {
    'use strict';
    var currentScrollPositionNew,
        currentScrollTop = 0,
        headerHeight = $('#header .header--menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 10) {
            $("#header").addClass("is-scroll");
        } else {
            $("#header").removeClass("is-scroll");
        }
    });

    $(window).scroll(function () {
        var currentScrollPosition = $(window).scrollTop();
        var headerHeight = $('#header .header--menu').height();

        currentScrollTop = currentScrollPosition;

        if (currentScrollPositionNew < currentScrollTop && currentScrollPosition > headerHeight + headerHeight) {
            $('#header').removeClass("is-scroll-up");
        } else if (currentScrollPositionNew > currentScrollTop && !(currentScrollPosition <= headerHeight)) {
            $('#header').addClass("is-scroll-up");
        }
        currentScrollPositionNew = currentScrollTop;
    });

});