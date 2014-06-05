/*global window, document, tizen, setTimeout, $ */
/*jslint plusplus: true*/

var five, ten, quarter, twenty, half,  to, past, 
    t1, t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,
    am, pm, oclock;

window.requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        'use strict';
        window.setTimeout(callback, 1000 / 60);
    };
    
function initCSS(){
    t1.css("color","#444");
    t2.css("color","#444");
    t3.css("color","#444");
    t4.css("color","#444");
    t5.css("color","#444");
    t6.css("color","#444");
    t7.css("color","#444");
    t8.css("color","#444");
    t9.css("color","#444");
    t10.css("color","#444");
    t11.css("color","#444");
    t12.css("color","#444");
    five.css("color","#444");
    ten.css("color","#444");
    quarter.css("color","#444");
    twenty.css("color","#444");
    half.css("color","#444");
    to.css("color","#444");
    past.css("color","#444");
    am.css("color","#444");
    pm.css("color","#444");
    oclock.css("color","#444");
}

function watch() {
    'use strict';

    //Import the current time
    //noinspection JSUnusedAssignment
    var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        nextMove = 1000 - date.getMilliseconds();
    
    initCSS();
    
    switch(true){
    case (minutes > 57 ):
        oclock.css("color","#fff");
        hours++;
        break;
    case ( minutes > 52 ):
        to.css("color","#fff");
        five.css("color","#fff");
        hours++;
        break;
    case ( minutes > 47 ):
        to.css("color","#fff");
        ten.css("color","#fff");
        hours++;
        break;
    case ( minutes > 42 ):
        to.css("color","#fff");
        quarter.css("color","#fff");
        hours++;
        break;
    case ( minutes > 37):
        to.css("color","#fff");
        twenty.css("color","#fff");
        hours++;
        break;
    case ( minutes > 32):
        to.css("color","#fff");
        twenty.css("color","#fff");
        five.css("color","#fff");
        hours++;
        break;
    case ( minutes > 27):
        past.css("color","#fff");
        half.css("color","#fff");
        break;
    case ( minutes > 22):
        past.css("color","#fff");
        twenty.css("color","#fff");
        five.css("color","#fff");
        break;
    case ( minutes > 17):
        past.css("color","#fff");
        twenty.css("color","#fff");
        break;
    case ( minutes > 12):
        quarter.css("color","#fff");
        past.css("color","#fff");
        break;
    case ( minutes > 7):
        ten.css("color","#fff");
        past.css("color","#fff");
        break;
    case ( minutes > 2):
        five.css("color","#fff");
        past.css("color","#fff");
        break;
    default:
        oclock.css("color","#fff");
        break;
    }
    if(hours === 24) {
        hours = hours - 12;
        am.css("color","#fff");
    } if( hours > 11 ) {
        hours = hours - 12;
        pm.css("color","#fff");
    } else {
        am.css("color","#fff");
    }

    switch(hours){
        case 0:
        case 12:
            t12.css("color","#fff");break;
        case 1:
            t1.css("color","#fff");break;
        case 2:
            t2.css("color","#fff");break;
        case 3:
            t3.css("color","#fff");break;
        case 4:
            t4.css("color","#fff");break;
        case 5:
            t5.css("color","#fff");break;
        case 6:
            t6.css("color","#fff");break;
        case 7:
            t7.css("color","#fff");break;
        case 8:
            t8.css("color","#fff");break;
        case 9:
            t9.css("color","#fff");break;
        case 10:
            t10.css("color","#fff");break;
        case 11:
            t11.css("color","#fff");break;
    }

    setTimeout(function () {
        window.requestAnimationFrame(watch);
    }, nextMove);
}

window.onload = function () {
    'use strict';

    window.addEventListener('touchend', function () {
        window.location.href="date.html";
    },false);
    
    five = $(".five");
    ten = $(".ten");
    quarter= $(".quarter");
    twenty= $(".twenty");
    half = $(".half");
    to = $(".to");
    past = $(".past");

    t1 = $(".t1");
    t2 = $(".t2");
    t3 = $(".t3");
    t4 = $(".t4");
    t5 = $(".t5");
    t6 = $(".t6");
    t7 = $(".t7");
    t8 = $(".t8");
    t9 = $(".t9");
    t10 = $(".t10");
    t11 = $(".t11");
    t12 = $(".t12");
    am= $(".am");
    pm= $(".pm");
    oclock = $(".oclock");

    window.requestAnimationFrame(watch);
};
