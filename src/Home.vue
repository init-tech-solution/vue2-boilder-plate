<template>
  <div style="margin-top: 30%">
    <h1 class="text-center">{{ msg }}</h1>
    <div class="text-center">
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
</template>

<script>
export default {
  name: "p-home",
  data() {
    return {
      msg: "welcome to @duongital blog"
    };
  }
};
</script>
