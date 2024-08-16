<template>
  <div class="img">
  </div>
</template>
<style>
.img {
  width: 50px;
  height: 50px;
  background: url(./assets/玉桂狗77动图.gif);
  background-size: 100% 100%;
  position: absolute;
  background-size: cover;
}
</style>
<script setup>
import { onMounted } from 'vue';
import './jq-3.4.1.min.js';

onMounted(() => {
  let img = document.querySelector('.img');
  // 定义小图片的旋转角度
  let deg = 0;
  // 定义小图片位于网页左侧的位置
  let imgx = 0;
  // 定义小图片位于网页顶部的位置
  let imgy = 0;
  // 定义小图片x轴的位置
  let imgl = 0;
  // 定义小图片y轴的位置
  let imgt = 0;
  // 定义小图片翻转的角度
  let y = 0;
  // 定义一个计数器
  let index = 0;

  window.addEventListener('mousemove', function (xyz) {
    // 获取网页左侧距离的图片位置
    imgx = xyz.x - img.offselLeft - img.offsetWidth / 2;
    // 多去网页顶部距离的图片位置
    imgy = xyz.y - img.offsetTop - img.offsetHeight / 2;
    // 套入公式，定义小图片的旋转角度
    deg = 360 * Math.atan(imgy / imgx) / (2 * Math.PI);
    // 每当鼠标移动的时候重置index
    index = 0;
    // 定义当前鼠标的位置
    $('img').mousemove(function (e) {
      let x = e.clientX;
      // 当鼠标的x轴大于图片的时候，图片就会对着鼠标，所以需要将图片翻转过来
      // 否则就不用翻转
      if (img.offselLeft < x) {
        y = -180;
      } else {
        y = 0;
      }
    });
  });

  setInterval(() => {
    // 设置小图片的旋转和翻转
    img.style.transform = 'rotateZ(' + deg + 'deg) rotateY(' + y + 'deg)';
    index++;
    // 在这里设置小图片的位置和速度，并判断小图片到达鼠标位置的时候停止移动
    if (index < 50) {
      imgl = imgx / 50;
      imgt = imgy / 50;
    }
    // 将图片的位置赋值给小图片
    img.style.left = imgl + 'px';
    img.style.top = imgt + 'px';
  }, 10);
});
</script>
