<template>
  <div style="margin-top: 30%">
    <router-link to="/"> go home </router-link>
    <h1 class="text-center">{{ msg }}</h1>
    <div class="text-center">
      <h2 class="text-cyan">to do:</h2>
      <ul>
        <li>cv</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "p-cv",
  data() {
    return {
      msg: "welcome to CV"
    };
  }
};
</script>
