$(document).ready(function () {
    $('.burgerbtn').click(function(){
        $('.inmenu').slideToggle('slow ');
    });

    $('#home').click(function(){
        $('.inmenu').css({
            "display": "none"
        });
        $('.menu_home').css({
            "color": "rgb(49,49,49)",
        });
        $('.menu_int').css({
            "color": "gray"
        });
        $('.menu_hobby').css({
            "color": "gray"
        });
        $('.contents1').css({
            "display": "inline-block"
        });
        $('.contents2').css({
            "display": "none"
        });
        $('.contents3').css({
            "display": "none"
        });
       
    });

    $('#interests').click(function(){
        $('.inmenu').css({
            "display": "none"
        });
        $('.menu_int').css({
            "color": "rgb(49,49,49)",
        });
        $('.menu_home').css({
            "color": "gray"
        });
        $('.menu_hobby').css({
            "color": "gray"
        });
        $('.contents1').css({
            "display": "none"
        });
        $('.contents2').css({
            "display": "inline-block"
        });
        $('.contents3').css({
            "display": "none"
        });
    });

    $('#hobby').click(function(){
        $('.inmenu').css({
            "display": "none"
        });
        $('.menu_hobby').css({
            "color": "rgb(49,49,49)",
        });
        $('.menu_home').css({
            "color": "gray"
        });
        $('.menu_int').css({
            "color": "gray"
        });
        $('.contents1').css({
            "display": "none"
        });
        $('.contents2').css({
            "display": "none"
        });
        $('.contents3').css({
            "display": "inline-block"
        });
    });
});