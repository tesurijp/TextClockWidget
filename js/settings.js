/*global window, document, tizen, setTimeout,$ ,localStorage */
/*jslint plusplus: true*/

var fgColor, bgColor;


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
    if(fgColor === null){
    	fgColor = "#444";
    }
       
    $(".highlightselection").hide();
    $(".backgroundselection").hide();
    
    $(".highlightcolor").css("color",fgColor);
    $(".highlightcolor").css("font-size","2em");
    $(".highlightcolor").on('touchend', function() {
    	$(".highlightselection").show();
    	$(".backgroundselection").hide();
    });
    
    $(".backtextcolor").css("color",bgColor);
    $(".backtextcolor").css("font-size","2em");
    $(".backtextcolor").on('touchend', function() {
    	$(".highlightselection").hide();
    	$(".backgroundselection").show();

    });
    
    $(".highlightselection *").css("width","40px");
    $(".highlightselection *").css("height","40px");
    $(".backgroundselection *").css("width","40px");
    $(".backgroundselection *").css("height","40px");
    
    $(".highlightselection *").click(function(){
	   	fgColor = $(this).css("background-color");
	   	$(".highlightcolor").css("color",fgColor);    		
	   	$(".highlightselection").hide();
    });
    $(".backgroundselection *").click( function(){
    	bgColor = $(this).css("background-color");
	   	$(".backtextcolor").css("color",bgColor);    		
	   	$(".backgroundselection").hide();
    });
   
    $(".apply").on('touchend',  function() {
    	localStorage.setItem("fgColor",fgColor);
    	localStorage.setItem("bgColor",bgColor);
    	window.location.href="time.html";
    });
    
    
    
 };
