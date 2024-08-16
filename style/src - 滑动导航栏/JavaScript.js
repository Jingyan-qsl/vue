import './jq-3.4.1.min.js'
$(document).ready(function () {
    $("#nav-1 a").on("click", function () {
        var position = $(this)
            .parent().position();
        var width = $(this)
            .parent().width();
        $("#nav-1 .slide1").css({ opacity: 1, left: +position.left, width: width });
    });

    $("#nav-1 a").on("mouseover", function () {
        var position = $(this)
            .parent().position();
        var width = $(this)
            .parent().width();
        $("#nav-1 .slide2").css({
            opacity: 1, left: +position.left, width: width
        })
            .addClass("squeeze");
    });

    $("#nav-1 a").on("mouseout", function () {
        $("#nav-1 .slide2").css({ opacity: 0 }).removeClass("squeeze");
    });


    /* var current = $("#nav-1 li:nth-of-type(3) a").offset();
    console.log(current);
    $("#nav-1 .slide1").css({
        left: +current.left,
        width: currentWidth
    }); */

    var currentWidth = $("#nav-1")
        .find("li:nth-of-type(3) a")
        .parent("li")
        .width();
    var current = $("li:nth-of-type(3) a").position();
    console.log(current);
    if (current) {
        console.log("current.left:" + current.left);
        console.log(currentWidth);
        $("#nav-1 .slide1").css({
            left: +current.left,
            width: currentWidth
        });
    } else {
        console.error("Element not found");
    }
});
