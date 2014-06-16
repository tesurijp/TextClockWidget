/*global window, document, tizen, setTimeout,$ ,localStorage */
/*jslint plusplus: true*/

var fgColor, bgColor, backColor, backTrans;


window.requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        'use strict';
        window.setTimeout(callback, 1000 / 60);
    };

    
window.onload = function () {
    'use strict';

    fgColor = localStorage.getItem("fgColor");
    if(fgColor === null){
        fgColor = "#fff";
    }
    bgColor = localStorage.getItem("bgColor");
    if(bgColor === null){
        bgColor = "#444";
    }
    backColor = localStorage.getItem("backColor");
    if(backColor === null){
        backColor = "#000";
    }
    backTrans = localStorage.getItem("backTrans");
    if(backTrans === null){
        backTrans = "0.2";
    }

    $(".highlightselection *").css("width","40px");
    $(".highlightselection *").css("height","40px");
    $(".backtextselection *").css("width","40px");
    $(".backtextselection *").css("height","40px");
    $(".backgroundselection *").css("width","40px");
    $(".backgroundselection *").css("height","40px");
    $(".backtransparencyselection *").css("width","40px");
    $(".backtransparencyselection *").css("height","40px");

    $(".highlightselection").show();
    $(".backtextselection").show();
    $(".backgroundselection").show();
    $(".backtransparencyselection").show();

    $(".highlightcolor").css("color",fgColor);
    $(".highlightcolor").css("font-size","2em");
    $(".highlightcolor").on('touchend', function() {
        $(".highlightselection").show();
        $(".backtextselection").hide();
        $(".backgroundselection").hide();
        $(".backtransparencyselection").hide();
    });
    
    $(".backtextcolor").css("color",bgColor);
    $(".backtextcolor").css("font-size","2em");
    $(".backtextcolor").on('touchend', function() {
        $(".highlightselection").hide();
        $(".backtextselection").show();
        $(".backgroundselection").hide();
        $(".backtransparencyselection").hide();
    });

    $(".backgroundcolor").css("color",backColor);
    $(".backgroundcolor").css("font-size","2em");
    $(".backgroundcolor").on('touchend', function() {
        $(".highlightselection").hide();
        $(".backtextselection").hide();
        $(".backgroundselection").show();
        $(".backtransparencyselection").hide();
    });

    $(".backgroundtransparency").css("color",backColor);
    $(".backgroundtransparency").css("font-size","2em");
    $(".backgroundtransparency").on('touchend', function() {
        $(".highlightselection").hide();
        $(".backtextselection").hide();
        $(".backgroundselection").hide();
        $(".backtransparencyselection").show();
    });
    

    $(".highlightselection *").click(function(){
        fgColor = $(this).css("background-color");
        $(".highlightcolor").css("color",fgColor);
        $(".highlightselection").hide();
    });
    $(".backtextselection *").click( function(){
        bgColor = $(this).css("background-color");
        $(".backtextcolor").css("color",bgColor);
        $(".backtextselection").hide();
    });


    $(".apply").on('touchend',  function() {
        localStorage.setItem("fgColor",fgColor);
        localStorage.setItem("bgColor",bgColor);
        window.history.back();
    });
 };
