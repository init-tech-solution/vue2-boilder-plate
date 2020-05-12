<template>
  <div style="margin-top: 10%">
    <router-link to="/">
      <p>go home</p>
    </router-link>
    <h1 class="text-center text-cyan">{{ msg }}</h1>
    <div class="text-center">
      <h2 class="text-cyan">to do:</h2>
      <ul>
        <li>getting data from firebase cloudfunctions</li>
        <li>{{ data }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "p-blog",
  data() {
    return {
      msg: "BLOG",
      data: "",
    };
  },
  created() {
    this.data = "waiting...";
    axios
      .get(
        "https://us-central1-duongital-test.cloudfunctions.net/appgoogledocs"
      )
      .then((res) => {
        console.log(res);
        this.data = res.data;
      });
  },
  mounted() {
    window["ga-disable-UA-161408823-1"] = true;
  },
};
</script>
