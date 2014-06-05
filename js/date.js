/*global window, document, tizen, setTimeout,$ */
/*jslint plusplus: true*/

window.requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        'use strict';
        window.setTimeout(callback, 1000 / 60);
    };
    
function calendar() {
    'use strict';

    //Import the current time
    //noinspection JSUnusedAssignment
    var date = new Date(),
        day = date.getDate(),
        month = date.getMonth();
    
    switch(day){
    case 1:
    case 21:
    case 31:
        $(".d01").css("color","#fff");break;
    case 2:
    case 22:
        $(".d02").css("color","#fff");break;
    case 3:
    case 23:
        $(".d03").css("color","#fff");break;
    case 4:
    case 24:
        $(".d04").css("color","#fff");break;
    case 5:
    case 25:
        $(".d05").css("color","#fff");break;
    case 6:
    case 26:
        $(".d06").css("color","#fff");break;
    case 7:
    case 27:
        $(".d07").css("color","#fff");break;
    case 8:
    case 28:
        $(".d08").css("color","#fff");break;
    case 9:
    case 29:
        $(".d09").css("color","#fff");break;
    case 10:
        $(".d10").css("color","#fff");break;
    case 11:
        $(".d11").css("color","#fff");break;
    case 12:
        $(".d12").css("color","#fff");break;
    case 13:
        $(".d13").css("color","#fff");break;
    case 14:
        $(".d14").css("color","#fff");break;
    case 15:
        $(".d15").css("color","#fff");break;
    case 16:
        $(".d16").css("color","#fff");break;
    case 17:
        $(".d17").css("color","#fff");break;
    case 18:
        $(".d18").css("color","#fff");break;
    case 19:
        $(".d19").css("color","#fff");break;
    case 20:
        $(".d20").css("color","#fff");break;
    case 30:
        $(".d20").css("color","#fff");break;
    }
    if(day===31){
    	$(".d3x").css("color","#fff");
    }else if(day>20 && day <30){
    	$(".d2x").css("color","#fff");
    }

    switch(month){
        case 0:
            $(".jan").css("color","#fff");break;
        case 1:
        	$(".feb").css("color","#fff");break;
        case 2:
        	$(".mar").css("color","#fff");break;
        case 3:
        	$(".apr").css("color","#fff");break;
        case 4:
        	$(".may").css("color","#fff");break;
        case 5:
        	$(".jun").css("color","#fff");break;
        case 6:
        	$(".jul").css("color","#fff");break;
        case 7:
        	$(".aug").css("color","#fff");break;
        case 8:
        	$(".sep").css("color","#fff");break;
        case 9:
        	$(".oct").css("color","#fff");break;
        case 10:
        	$(".nov").css("color","#fff");break;
        case 11:
        	$(".dec").css("color","#fff");break;
    }

}

window.onload = function () {
    'use strict';

    window.addEventListener('touchend', function() {
        window.location.href="time.html";
    },false);

    window.requestAnimationFrame(calendar);
};
