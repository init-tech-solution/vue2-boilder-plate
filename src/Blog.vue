<template>
  <div style="margin-top: 30%">
    <router-link to="/"> go home </router-link>
    <h1 class="text-center text-cyan">{{ msg }}</h1>
    <div class="text-center">
      <h2 class="text-cyan">to do:</h2>
      <ul>
        <li>blogs: hook with firebase store</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "p-blog",
  data() {
    return {
      msg: "BLOG"
    };
  }
};
</script>
