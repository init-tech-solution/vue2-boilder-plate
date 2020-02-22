<template>
  <div
    style="width: 100vw; height: 100vh; positioin: relative"
  >
    <div style="position: absolute; width: 500px; height: 100px; top: 0; left: 0; right: 0; bottom: 0; margin: auto">
      <h1 class="text-center">{{ msg }}</h1>
      <p>không code nữa, Dương mệt rồi...</p>
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

      ctx.fillStyle = "coral";
      ctx.fillRect(20, 20, 150, 100);
  }

};
</script>
