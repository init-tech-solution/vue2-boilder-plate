<template>
  <div class="w-1/2 m-auto">
    <h1>sound ringing tone:</h1>
    <p>{{ monkey }}</p>
    <div class="h-20"></div>

    <div
      :class="{ 'is-playing': isPlaying }"
      class="music-box w-20 h-20 bg-red-200 flex items-center justify-center"
      style="border-radius: 50%"
    >
      <button class="text-white uppercase" @click="play()" v-show="isPlaying == false">Play</button>
      <button class="text-white uppercase" @click="pause()" v-show="isPlaying == true">Pause</button>
    </div>
  </div>
</template>

<script>
import { Howl, Howler } from "howler";
import axios from "axios";
import soundlink from "./tone.mp3";

var sound = new Howl({
  src: [soundlink],
});

export default {
  name: "c-sound",
  data() {
    return {
      monkey: "monkey",
      sound: sound,
      isPlaying: false,
    };
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    play() {
      this.sound.play();
      this.isPlaying = true;
    },
    pause() {
      this.sound.pause();
      this.isPlaying = false;
    },
  },
};
</script>

<style scoped>
.music-box {
  border: 4px solid transparent;
}

.is-playing {
  border: 4px solid pink;
  animation: fade 2s infinite;
}

@keyframes fade {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
