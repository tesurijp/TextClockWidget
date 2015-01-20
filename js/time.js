/*global window, document, tizen, setTimeout, $ ,localStorage */
/*jslint plusplus: true*/

var five, ten, quarter, twenty, half,  to, past, 
    t1, t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,
    am, pm, oclock,fgColor, bgColor, backColorTrans,alwaysOn,
    state;

function watch() {
    'use strict';

    //Import the current time
    //noinspection JSUnusedAssignment
    var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes();

    $(".timetable *").css("color",bgColor);
    $(".itis").css("color",fgColor);
    $(".timetable").css("background",backColorTrans);

    switch(true){
    case (minutes > 57 ):
        oclock.css("color",fgColor);
        hours++;
        break;
    case ( minutes > 52 ):
        to.css("color",fgColor);
        five.css("color",fgColor);
        hours++;
        break;
    case ( minutes > 47 ):
        to.css("color",fgColor);
        ten.css("color",fgColor);
        hours++;
        break;
    case ( minutes > 42 ):
        to.css("color",fgColor);
        quarter.css("color",fgColor);
        hours++;
        break;
    case ( minutes > 37):
        to.css("color",fgColor);
        twenty.css("color",fgColor);
        hours++;
        break;
    case ( minutes > 32):
        to.css("color",fgColor);
        twenty.css("color",fgColor);
        five.css("color",fgColor);
        hours++;
        break;
    case ( minutes > 27):
        past.css("color",fgColor);
        half.css("color",fgColor);
        break;
    case ( minutes > 22):
        past.css("color",fgColor);
        twenty.css("color",fgColor);
        five.css("color",fgColor);
        break;
    case ( minutes > 17):
        past.css("color",fgColor);
        twenty.css("color",fgColor);
        break;
    case ( minutes > 12):
        quarter.css("color",fgColor);
        past.css("color",fgColor);
        break;
    case ( minutes > 7):
        ten.css("color",fgColor);
        past.css("color",fgColor);
        break;
    case ( minutes > 2):
        five.css("color",fgColor);
        past.css("color",fgColor);
        break;
    default:
        oclock.css("color",fgColor);
        break;
    }
    if(hours === 24) {
        hours = hours - 12;
        am.css("color",fgColor);
    } if( hours > 11 ) {
        hours = hours - 12;
        pm.css("color",fgColor);
    } else {
        am.css("color",fgColor);
    }

    switch(hours){
        case 0:
        case 12:
            t12.css("color",fgColor);break;
        case 1:
            t1.css("color",fgColor);break;
        case 2:
            t2.css("color",fgColor);break;
        case 3:
            t3.css("color",fgColor);break;
        case 4:
            t4.css("color",fgColor);break;
        case 5:
            t5.css("color",fgColor);break;
        case 6:
            t6.css("color",fgColor);break;
        case 7:
            t7.css("color",fgColor);break;
        case 8:
            t8.css("color",fgColor);break;
        case 9:
            t9.css("color",fgColor);break;
        case 10:
            t10.css("color",fgColor);break;
        case 11:
            t11.css("color",fgColor);break;
    }

    setTimeout(function () { watch();}, 10000);
    
    
    if(state === 1){
        state = 2;
        setTimeout(function () {
                fgColor = '#444';
                bgColor = '#000';
                backColorTrans = "rgba(0,0,0,1)";
                watch();
                state = 0;
                var manager = webapis.motion;
                manager.start("WRIST_UP", function() {
                    loadColor();
                    manager.stop("WRIST_UP")
                })
            }, 15000
        )
    }
}

function loadColor(){
    fgColor = localStorage.getItem("fgColor");
    if(fgColor === null){
        fgColor = "#fff";
    }
    bgColor = localStorage.getItem("bgColor");
    if(bgColor === null){
        bgColor = "#444";
    }
    
    $(".timetable").css("background","rgba(0,0,0,0)");
    backColorTrans = localStorage.getItem("backColorTrans");
    if(backColorTrans === null){
        backColorTrans = "rgba(4,4,4,0.2)";
    }
    state = 1;
    watch();
}

window.onload = function () {
    'use strict';

    var multiTouch;
    $(".contents").on('touchstart', function(e) {
        multiTouch = !(e.originalEvent.touches.length < 2);
    });

    $(".contents").on('touchend', function() {
        if(state !== 0){
            if(multiTouch){
                window.location.href="settings.html";
            } else {
                window.location.href="date.html";
            }
        }
    });
    
    alwaysOn = localStorage.getItem("alwaysOn");
    if(alwaysOn ==='true'){
        tizen.power.request("SCREEN", "SCREEN_NORMAL");
    }
    document.addEventListener("visibilitychange", function() {
        if(alwaysOn === 'true'){
            if (document.hidden) {
                tizen.power.release("SCREEN");
            } else  {
                tizen.power.request("SCREEN", "SCREEN_NORMAL");
                watch();
            }
        }
    }, false);   

    tizen.power.setScreenStateChangeListener(
        function(previousState, changedState) {
            if(alwaysOn ==='true'){
                var currentDeviceMode = changedState;
                switch(currentDeviceMode){
                case 'SCREEN_OFF':
                    break;
                default:
                    watch();
                    break;
                }
            }
        }
    );
    
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

    loadColor();
    watch();
};
