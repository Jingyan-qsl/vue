<template>
  <div class="Box">
  </div>
</template>
<style>
body {
  background-color: rgb(35, 35, 35);
}

span {
  /* 让弹出来的文字不被选中，影响操作体验 */
  user-select: none;
  cursor: default;
  font-size: 20px;
  color: blanchedalmond;
  position: absolute;
  transition: 1s;
}
</style>
<script>
// 设置随机出现的文字数组
var arr = ["在这披霜戴雪的冬日，一头扎进这沸腾的生命", 
"命运如同手中的掌纹，无论多么曲折，始终掌握在你的手里", 
"少言自寡，胜过千言万语", "千万不要在奋斗的年纪选择安逸", 
"除了你自己，没人会时刻在意你", 
"命运的每一个玩去，都是你走向成功的一个转折", 
"年少的期待，都会在日后被一一兑现，哪怕它们换了形态，且姗姗来迟", 
"当你不能拥有的时候，唯一能做的便是不能忘记", 
"如果命运是条孤独的河流，那么你就是你的灵魂摆渡人", 
"燃烧，使你获得最终的宁静", 
"生命的价值，在于始终坚持一个目标", 
"没办法，我喜欢她，我对得起自己的喜欢",
"不求苍天俯就我的美意，但求永远恣意挥洒", 
"每个人心底都有一座坟墓，是用来埋葬所爱的人",
"黑夜无论多么漫长，白昼总会到来",
"无论谁，领先一步，都是暂时的", 
"这是黄昏的太阳，我却当做是黎明的曙光", 
"人生处处有诱惑，贪欲者自上钩", 
"认知自己的无知是最大的智慧", 
"一路曲折，换来的是生命的成长",
"既然已经伤害了过去，就不要再辜负将来", 
"人类最大的勇气就是豁出去的心", 
"人成熟的标志在于，该动脑时，不在动情", 
"对美好的追求，对残缺的接纳", 
"青春时光转瞬即逝",
"生活不是一种刁难，而是一种雕刻", 
"永远不要在别人面前调侃你的理想，你为他付出的是生命",
"凡是都有偶然的凑巧，结果却如宿命般的必然",
 "总之岁月漫长，所有值得等待"]
document.onclick = function (x) {
  // 创建元素节点对象
  var span = document.createElement("span")
  // 获取当前鼠标的坐标
  span.style.left = x.clientX + "px"
  span.style.top = x.clientY + "px"
  // 让span的值为arr数组内随机的一个值
  // Math.floor 向下取整
  span.innerHTML = arr[Math.floor(Math.random() * arr.length)]
  // 设置span的动画效果
  setTimeout(function () {
    // Opacity 不透明度 0-1(透明-不透明)
    // transform 函数在二维平面上垂直重新定位元素
    span.style.opacity = "1"
    span.style.transform = "translateY(-100px)"
  }, 100)
  setTimeout(function () {
    span.style.opacity = "0"
    span.style.transform = "translateY(-230px)"
  }, 1500)
  // 清掉opacort为0的span
  var chi = document.getElementsByClassName("span")
  for (var i = 0; i < chi.length; i++) {
    if (chi[i].style.opacity === "0") {
      document.body.removeChild(chi[i])
    }
  }
  // 将span添加到body里
  document.body.appendChild(span)
}
</script>
