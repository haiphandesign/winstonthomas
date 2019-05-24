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


$('.header--menu-item a').click(function () {
    $('.header--menu-item').removeClass('is-active');
    $(this).parent().addClass('is-active');
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



heroCarousel = $('.hai .hero--carousel');

window.setTimeout(function () {
    heroCarousel.flickity({
        cellSelector: '.hero--carousel-item',
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: false,
        pauseAutoPlayOnHover: false,
        prevNextButtons: false,
        // pageDots: false,
        // fade: true,
    });
}, 200);

// heroCarousel.mouseleave(function () {
//     heroCarousel.flickity('playPlayer');
// })

heroPeterCarousel = $('.peter .hero--carousel');

window.setTimeout(function () {
    heroPeterCarousel.flickity({
        cellSelector: '.hero--carousel-item',
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: false,
        // pauseAutoPlayOnHover: false,
        // prevNextButtons: false,
        // pageDots: false,
        // fade: true,
    });
}, 200);

heroPeterCarousel.mouseleave(function () {
    heroPeterCarousel.flickity('playPlayer');
})



testimonialCarousel = $('.testimonial--carousel');

window.setTimeout(function () {
    testimonialCarousel.flickity({
        cellSelector: '.testimonial--carousel-item',
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 5000,
        // prevNextButtons: false,
        // pageDots: false,
        // fade: true
    });
}, 200);

privateclubCarousel = $('.private-club-peter--carousel');

window.setTimeout(function () {
    privateclubCarousel.flickity({
        cellSelector: '.private-club-peter--carousel-item',
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        autoPlay: 2000,
        pauseAutoPlayOnHover: false,
        // prevNextButtons: false,
        // pageDots: false,
        // fade: true
        initialIndex: 2,
    });
}, 200);

privateclubCarousel.mouseleave(function () {
    privateclubCarousel.flickity('playPlayer');
})

// heroCarousel.mouseleave(function () {
//     testimonialCarousel.flickity('playPlayer');
// })

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

var typed = new Typed('.hero--carousel-typed', {
    strings: [
        "A Last minute get away? ^1000",
        "Or last second pick up? ^1000",
        "Breakfast for two? ^1000",
        "Or dinner for 200? ^1000",
        "Need a rare cigar? ^1000",
        "A tune up for your watch? ^1000",
        "Or your boat? ^1000",
        "Need a place in London? ^1000",
        "or Beijing? ^1000",
        "or San Francisco? ^1000",
        "or that last minute tee time? ^1000",
    ],
    typeSpeed: 70,
    backSpeed: 50,
    startDelay: 4000,
    loop: true,
    preStringTyped: (arrayPos, self) => {
        heroCarousel.flickity('next');
    },
});

ScrollReveal().reveal('.reveal', {
    reset: true,
});

setTimeout(function () {
    $('#redirect-peter').modal();
    return false;
}, 100);