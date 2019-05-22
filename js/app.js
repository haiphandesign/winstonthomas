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
        if ($(this).scrollTop() >= 150) {
            $("#header").addClass("is-scroll");
        } else {
            $("#header").removeClass("is-scroll");
        }
    });

    // $(window).scroll(function () {
    //     var currentScrollPosition = $(window).scrollTop();

    //     currentScrollTop = currentScrollPosition;

    //     if (currentScrollPositionNew < currentScrollTop) {
    //         $('#header').removeClass("is-scroll-up");
    //     } else if (currentScrollPositionNew > currentScrollTop) {
    //         $('#header').addClass("is-scroll-up");
    //     }
    //     currentScrollPositionNew = currentScrollTop;
    // });

});


function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
        let context = this,
            args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

let scrollPos = 0;
const nav = document.querySelector('#header');

function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
        // Scrolling UP
        nav.classList.add('is-scroll-up');
    } else {
        // Scrolling DOWN
        nav.classList.remove('is-scroll-up');
    }
    scrollPos = windowY;
}

// window.addEventListener('scroll', checkPosition);
window.addEventListener('scroll', debounce(checkPosition));





// Global: Header Spacer

function headerspacing() {
    headerspacer = $('#header').outerHeight(true);
    heroheight = 90 * $(window).height() / 100 - headerspacer;
    $('.header--spacer').css('height', headerspacer);
    $('#hero').css('height', heroheight);
    $('.hero--carousel-item').css('height', heroheight);
    $('.hero--carousel-item img').css('height', heroheight);
};

window.setTimeout(headerspacing, 100);




window.setTimeout(function () {
    $('.hero--carousel').flickity({
        cellSelector: '.hero--carousel-item',
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 3000,
        prevNextButtons: false,
        // fade: true
    });
}, 200);

$('.header--menu-toggle').click(function () {
    $('.header--menu-wrapper').addClass('is-active');
    $('html').css('overflow', 'hidden');
    $('body').css('overflow', 'hidden');
});

$('.header--menu-close').click(function () {
    $('.header--menu-wrapper').removeClass('is-active');
    $('html').css('overflow', 'auto');
    $('body').css('overflow', 'auto');
});