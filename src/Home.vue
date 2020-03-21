<template>
  <div style="width: 100vw; height: 100vh; positioin: relative">
    <div
      style="padding: 20px; position: absolute; max-width: 500px; height: 100px; top: 0; left: 0; right: 0; bottom: 0; margin: auto"
    >
      <h1>NGUYỄN ĐẠI DƯƠNG</h1>
      <p>Frontend Engineer</p>
      <p class="mb-8">m: 0902.622.618</p>
      <hr/>
      <h1 class="text-center mt-8">{{ msg }}</h1>
      <div class="text-right">
        <h2 class="text-cyan">to do:</h2>
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
export default {
  name: "p-home",
  data() {
    return {
      msg: "welcome to @duongital blog"
    };
  },
  mounted() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    let height = canvas.height * 0.7;
    let width = 50 + this.getRandomNumber(50, 100);

    ctx.fillStyle = this.getRandomColor();
    ctx.fillRect(width, 20, 50, height);

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
    }
  }
};
</script>
