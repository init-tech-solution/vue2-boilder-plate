<template>
  <div>
    <h1 class="text-right m-20">sound mixer</h1>
    <c-sound />
  </div>
</template>

<script>
import anime from "animejs";
import Sound from "../components/Sound.vue";

export default {
  name: "p-home",
  components: { [Sound.name]: Sound },
  data() {
    return {
      msg: "abc",
    };
  },
};
</script>

<style scoped>
</style>
