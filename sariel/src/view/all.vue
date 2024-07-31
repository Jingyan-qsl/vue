<template>
  <div class="allBox">
    <div id="allNav">
      <ul id="navUl">
        <li class="slide1"></li>
        <li class="slide2"></li>
        <li><router-link to="/introduce"><a href="#">介绍</a></router-link></li>
        <li><router-link to="/detail"><a href="#">详细</a></router-link></li>
        <li><router-link to="/write"><a href="#">文字</a></router-link></li>
        <li><router-link to="/index"><a href="#">宝宝</a></router-link></li>
        <li><router-link to="/card"><a href="#">卡面</a></router-link></li>
        <li><router-link to="/video"><a href="#">视频</a></router-link></li>
        <li><router-link to="/creation"><a href="#">二创</a></router-link></li>
      </ul>
    </div>
  </div>
  <div class="mainBox">
      <h1 data-spotlight="跨越时间的牵绊">跨越时间的牵绊</h1>
      <div>
        <div class="play">
          <img src="../image/index2.png" width="150px" height="150px" alt="">
          <img src="../image/1.jpg " class="play-pic" alt="">
        </div>
      </div>
      <div class="play-b">
        <img src="../image/button.png" width="100%" alt="">
      </div>
      <video id="myMusic" src="..\image\齐司礼- 跨越时间的牵绊.mp3"look></video>
    </div>
  <div class="view">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import '../jquery-3.4.1.min.js'
import '../router.js'
onMounted(() => {
  $("#navUl a").on("click", function () {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $("#allNav .slide1").css({
      opacity: 1,
      left: +position.left,
      width: width
    })
  });
  $("#navUl a").on("mouseover", function () {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $("#navUl .slide2").css({
      opacity: 1,
      left: +position.left,
      width: width
    }).addClass("squeeze");
  });
  $("#navUl a").on("mouseout", function () {
    $("#navUl .slide2").css({
      opacity: 0
    }).removeClass("squeeze")
  });

  var currentWidth = $("li:nth-of-type(3) a").parent("li").width();
  var current = $("#navUl li:nth-of-type(3) a").position();
  if (current) {
    $("#navUl .slide1").css({
      left: +current.left,
      width: currentWidth
    });
  }
  //旋转JS代码
  $(document).ready(function () {
    var mark = true;
    var deg = 0;
    var flag = false;
    var myMusic = document.getElementById("myMusic");
    // console.log(myMusic)
    $(".play-b").eq(0).click(function () {
      $(".play").addClass("rotate");
      if (mark) {
        if (flag) {
          $(".play-b").eq(0).removeClass("buttonRot_back");
          flag = false;
        }

        $(".play-b").eq(0).addClass("buttonRot");
        $(".play").css({
          "animation-play-state": "running",
          " -webkit-animation-play-state": "running"
        });
        myMusic.play();
        mark = false;
      }
      else {
        $(".play-b").eq(0).removeClass("buttonRot");
        $(".play-b").eq(0).addClass("buttonRot_back");
        flag = true;
        deg = cAngle() + 'deg';
        console.log(deg);
        myMusic.pause();
        $(".play").css({
          "animation-play-state": "paused",
          " -webkit-animation-play-state": "paused"
        });


        mark = true;
      }
    });

    $(".play").eq(0).click(function () {
      $(this).addClass("rotate");
      if (mark) {
        if (flag) {
          $(".play-b").eq(0).removeClass("buttonRot_back");
          flag = false;
        }

        $(".play-b").eq(0).addClass("buttonRot");
        $(this).css({
          "animation-play-state": "running",
          " -webkit-animation-play-state": "running"
        });
        myMusic.play();

        mark = false;
      }
      else {
        $(".play-b").eq(0).removeClass("buttonRot");
        $(".play-b").eq(0).addClass("buttonRot_back");
        flag = true;
        deg = cAngle() + 'deg';
        console.log(deg);
        myMusic.pause();
        $(this).css({
          "animation-play-state": "paused",
          " -webkit-animation-play-state": "paused"
        });


        mark = true;
      }
    });

    function cAngle() {
      // var el = document.getElementById("id1");
      var btn = document.getElementsByClassName("play")[0];
      var st = window.getComputedStyle(btn, null);
      var tr = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("transform") || "FAIL";
      var values = tr.split('(')[1].split(')')[0].split(',');
      var a = values[0];
      var b = values[1];
      var c = values[2];
      var d = values[3];
      var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
      return angle
    }
  });
})

</script>
