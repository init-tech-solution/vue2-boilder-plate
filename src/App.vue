<template>
  <div>
    <h1 class="text-center">{{ msg }}</h1>
    <div class="text-center">
      <h2 class="text-cyan">to do:</h2>
      <ul>
        <li>home with canvas background</li>
        <li>blogs: hook with firebase store</li>
        <li>cv</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "welcome to @duongital blog"
    };
  }
};
</script>
