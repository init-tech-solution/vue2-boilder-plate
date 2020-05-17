<template>
  <div class="container mx-auto mt-12 p-4">
    <router-link to="/">
      <a class="text-left">go home</a>
    </router-link>
    <div class="h-4"></div>
    <h1 class="text-left">A little bit about myself</h1>
    <div class="h-4"></div>
    <div class="pattern-dots-sm slategray h-5"></div>
    <div class="text-left mt-8 sm:w-full md:w-1/2">
      <div v-if="loading">
        <p>serverless running...</p>
      </div>
      <div v-else>
        <p class="mt-4" v-for="(cv, index) in cvList" :key="index">
          {{ cv }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "p-about",
  data() {
    return {
      cvList: [],
      loading: true,
    };
  },
  created() {
    this.loading = true;
    axios
      .get(
        "https://us-central1-duongital-test.cloudfunctions.net/appgoogledocs"
      )
      .then((res) => {
        this.cvList = res.data;
        this.loading = false;
      });
  },
};
</script>
