/*global window, document, tizen, setTimeout,$,localStorage */
/*jslint plusplus: true*/

var fgColor, bgColor, backColorTrans;

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

    $(".datetable *").css("color",bgColor);
    $(".datetable").css("background",backColorTrans);

    switch(day){
    case 1:
    case 21:
    case 31:
        $(".d01").css("color",fgColor);break;
    case 2:
    case 22:
        $(".d02").css("color",fgColor);break;
    case 3:
    case 23:
        $(".d03").css("color",fgColor);break;
    case 4:
    case 24:
        $(".d04").css("color",fgColor);break;
    case 5:
    case 25:
        $(".d05").css("color",fgColor);break;
    case 6:
    case 26:
        $(".d06").css("color",fgColor);break;
    case 7:
    case 27:
        $(".d07").css("color",fgColor);break;
    case 8:
    case 28:
        $(".d08").css("color",fgColor);break;
    case 9:
    case 29:
        $(".d09").css("color",fgColor);break;
    case 10:
        $(".d10").css("color",fgColor);break;
    case 11:
        $(".d11").css("color",fgColor);break;
    case 12:
        $(".d12").css("color",fgColor);break;
    case 13:
        $(".d13").css("color",fgColor);break;
    case 14:
        $(".d14").css("color",fgColor);break;
    case 15:
        $(".d15").css("color",fgColor);break;
    case 16:
        $(".d16").css("color",fgColor);break;
    case 17:
        $(".d17").css("color",fgColor);break;
    case 18:
        $(".d18").css("color",fgColor);break;
    case 19:
        $(".d19").css("color",fgColor);break;
    case 20:
        $(".d20").css("color",fgColor);break;
    case 30:
        $(".d30").css("color",fgColor);break;
    }
    if(day===31){
        $(".d3x").css("color",fgColor);
    }else if(day>20 && day <30){
        $(".d2x").css("color",fgColor);
    }

    switch(month){
        case 0:
            $(".jan").css("color",fgColor);break;
        case 1:
            $(".feb").css("color",fgColor);break;
        case 2:
            $(".mar").css("color",fgColor);break;
        case 3:
            $(".apr").css("color",fgColor);break;
        case 4:
            $(".may").css("color",fgColor);break;
        case 5:
            $(".jun").css("color",fgColor);break;
        case 6:
            $(".jul").css("color",fgColor);break;
        case 7:
            $(".aug").css("color",fgColor);break;
        case 8:
            $(".sep").css("color",fgColor);break;
        case 9:
            $(".oct").css("color",fgColor);break;
        case 10:
            $(".nov").css("color",fgColor);break;
        case 11:
            $(".dec").css("color",fgColor);break;
    }

    setTimeout(function () {
        window.location.href="time.html";
    }, 3000);
}

window.onload = function () {
    'use strict';

    var multiTouch;
    $(".contents").on('touchstart', function(e) {
        multiTouch = !(e.originalEvent.touches.length < 2);
    });
    $(".contents").on('touchend', function() {
        if(multiTouch){
            window.location.href="settings.html";
        } else {
            window.location.href="time.html";
        }
    });

    fgColor = localStorage.getItem("fgColor");
    if(fgColor === null){
        fgColor = "#fff";
    }
    bgColor = localStorage.getItem("bgColor");
    if(bgColor === null){
        bgColor = "#444";
    }
    backColorTrans = localStorage.getItem("backColorTrans");
    if(backColorTrans === null){
        backColorTrans = "rgba(4,4,4,0.2)";
    }

    window.requestAnimationFrame(calendar);
};
