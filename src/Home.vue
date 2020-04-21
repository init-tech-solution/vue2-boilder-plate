<template>
  <div
    style="width: 100vw; height: 100vh; position: relative; overflow: hidden"
  >
    <div
      style="padding: 20px; position: absolute; max-width: 500px; height: 100px; top: 0; left: 0; right: 0; bottom: 0; margin: auto;"
    >
      <div class="pattern-horizontal-lines-sm gray-lighter" style="width: 200px; height: 200px; position: absolute; left: 100px; top: -150px; opacity: 20%"></div>
      <h1 class="group1">DUONG NGUYEN</h1>
      <p class="group1">Frontend Engineer</p>
      <p class="mb-8 group1">m: 0902.622.618</p>
      <div class="pattern-dots-sm slategray h-5"></div>
      <h1 class="text-right mt-8">{{ msg }}</h1>
      <div class="text-right" style="font-size: 8px">
        <ul>
          <li>home with canvas background</li>
          <router-link to="/blog">
            <li class="underline">blogs: hook with firebase store</li>
          </router-link>
          <router-link to="/cv">
            <li class="underline">cv</li>
          </router-link>
        </ul>
      </div>
    </div>
    <canvas id="canvas" style="width: 100vw; height: 100vh"></canvas>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "p-home",
  data() {
    return {
      msg: "welcome to @duongital blog",
    };
  },
  mounted() {
    // group texts
    // anime({
    //   targets: ".group1",
    //   translateX: 270,
    //   direction: "alternate",
    //   loop: 2,
    //   delay: function(el, i, l) {
    //     return i * 100;
    //   },
    //   endDelay: function(el, i, l) {
    //     return (l - i) * 100;
    //   }
    // });

    // anime({
    //   targets: ".animate-svg path",
    //   strokeDashoffset: [anime.setDashoffset, 0],
    //   easing: "easeInOutSine",
    //   duration: 1500,
    //   delay: function(el, i) {
    //     return i * 250;
    //   },
    //   direction: "alternate",
    //   loop: true
    // });

    // this.randomValues();

    // const canvas = document.getElementById("canvas");
    // const ctx = canvas.getContext("2d");

    // let height = canvas.height * 0.4;
    // let width = 50 + this.getRandomNumber(0, 100);

    // ctx.fillStyle = this.getRandomColor();
    // ctx.fillRect(width, 20, 100, height);

    // var x = 30;
    // var d = 1;
    // window.requestAnimationFrame(function loop() {
    //   if (x == 333) {
    //     d = -1;
    //   }

    //   if (x == 0) {
    //     d = 1;
    //   }

    //   x = x + d;

    //   ctx.clearRect(0, 0, canvas.width, canvas.height)
    //   ctx.fillStyle = "lightblue";
    //   ctx.fillRect(x, 20, 50, 90);
    //   window.requestAnimationFrame(loop)
    // })
  },
  methods: {
    getRandomColor: function() {
      let colorArray = ["#E3B89D", "#004D46", "#128278", "#51948A", "#B9C5C9"];
      return colorArray[this.getRandomNumber(0, colorArray.length - 1)];
    },
    getRandomNumber: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomValues: function() {
      anime({
        targets: ".round-group",
        translateX: function() {
          return anime.random(0, 270);
        },
        easing: "easeInOutQuad",
        duration: 750,
        complete: this.randomValues,
      });
    },
  },
};
</script>

<style scoped>
.round-group {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  position: absolute;
  opacity: 0.4;
}
</style>
