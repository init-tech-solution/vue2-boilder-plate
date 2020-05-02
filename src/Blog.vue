<template>
  <div style="margin-top: 10%">
    <router-link to="/">
      <p>go home</p>
    </router-link>
    <h1 class="text-center text-cyan">{{ msg }}</h1>
    <div class="text-center">
      <h2 class="text-cyan">to do:</h2>
      <ul>
        <li>blogs: hook with firebase</li>
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
  },
  mounted() {
    window['ga-disable-UA-161408823-1'] = true;
  }
};
</script>
