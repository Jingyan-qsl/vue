import './jq.js'
//旋转JS代码
$(document).ready(function(){
    var mark = true;
    var deg=0;
    var flag=false;
    var myMusic = document.getElementById("myMusic");
    // console.log(myMusic)
    $(".play-b").eq(0).click(function(){
        $(".play").addClass("rotate");
        if(mark){
            if(flag){
                $(".play-b").eq(0).removeClass("buttonRot_back");
                flag=false;
            }
            
            $(".play-b").eq(0).addClass("buttonRot");
            $(".play").css({"animation-play-state":"running",
               " -webkit-animation-play-state":"running" });
            myMusic.play();   
            mark=false;
        }
        else{
            $(".play-b").eq(0).removeClass("buttonRot");
            $(".play-b").eq(0).addClass("buttonRot_back");
            flag=true;
            deg=cAngle()+'deg';
            console.log(deg);   
            myMusic.pause();
            $(".play").css({"animation-play-state":"paused",
               " -webkit-animation-play-state":"paused" });
               
            
            mark=true;
        }
    });
    
    $(".play").eq(0).click(function(){
        $(this).addClass("rotate");
        if(mark){
            if(flag){
                $(".play-b").eq(0).removeClass("buttonRot_back");
                flag=false;
            }
            
            $(".play-b").eq(0).addClass("buttonRot");
            $(this).css({"animation-play-state":"running",
               " -webkit-animation-play-state":"running" });
            myMusic.play();
            
            mark=false;
        }
        else{
            $(".play-b").eq(0).removeClass("buttonRot");
            $(".play-b").eq(0).addClass("buttonRot_back");
            flag=true;
            deg=cAngle()+'deg';
            console.log(deg);   
            myMusic.pause();
            $(this).css({"animation-play-state":"paused",
               " -webkit-animation-play-state":"paused" });
               
            
            mark=true;
        }
    });
    
    function cAngle(){
        // var el = document.getElementById("id1");
        var btn = document.getElementsByClassName("play")[0];
         var st = window.getComputedStyle(btn, null);
         var tr = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("transform") ||  "FAIL";
         var values = tr.split('(')[1].split(')')[0].split(',');
         var a = values[0];
         var b = values[1];
         var c = values[2];
         var d = values[3];
         var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        return angle   
        }
});


//心形鼠标
window.onload = (function (window, document, undefined) {

    var hearts = [];

    window.requestAnimationFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                setTimeout(callback, 1000 / 60);
            }
    })();

    init();

    function init() {
        css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
        attachEvent();
        gameloop();
    }

    function gameloop() {
        for (var i = 0; i < hearts.length; i++) {
            if (hearts[i].alpha <= 0) {
                document.body.removeChild(hearts[i].el);
                hearts.splice(i, 1);
                continue;
            }

            hearts[i].y--;
            hearts[i].scale += 0.004;
            hearts[i].alpha -= 0.013;
            hearts[i].el.style.cssText = "left:" + hearts[i].x + "px;top:" + hearts[i].y + "px;opacity:" + hearts[i].alpha + ";transform:scale(" + hearts[i].scale + "," + hearts[i].scale + ") rotate(45deg);background:" + hearts[i].color;
        }

        requestAnimationFrame(gameloop);
    }

    function attachEvent() {
        var old = typeof window.onclick === "function" && window.onclick;
        window.onclick = function (event) {
            old && old();
            createHeart(event);
        }
    }

    function createHeart(event) {
        var d = document.createElement("div");
        d.className = "heart";
        hearts.push({
            el: d,
            x: event.clientX - 5,
            y: event.clientY - 5,
            scale: 1,
            alpha: 1,
            color: randomColor()
        });

        document.body.appendChild(d);
    }

    function css(css) {
        var style = document.createElement("style");
        style.type = "text/css";
        try {
            style.appendChild(document.createTextNode(css));
        }
        catch (ex) {
            style.styleSheet.cssText = css;
        }

        document.getElementsByTagName('head')[0].appendChild(style);
    }

    function randomColor() {
        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
    }

})(window, document);