$(document).ready(function () {

    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 700)
            $(".navbarnav").addClass("active");
    });


    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 180)
            $(".langage").addClass("active");
    });


    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() >= 700)
            $(".racp").addClass("active");
    });


    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() >= 950)
            $(".pvcp").addClass("active");
    });


    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() >= 1180)
            $(".cdvcf").addClass("active");
    });


    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() >= 1385)
            $(".cdvcc").addClass("active");
    });


    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() >= 1600)
            $(".pisami").addClass("active");
    });


    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() >= 2170)
            $(".fcda").addClass("active");
    });


    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() >= 2200)
            $(".fdwfs").addClass("active");
    });


    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() >= 2550)
            $(".tpecmvcm").addClass("active");
    });


    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() >= 2680)
            $(".cape").addClass("active");
    });

    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 700)
            $("#arrowup").addClass("active");
    });


});