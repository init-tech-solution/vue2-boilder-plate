<template>
  <div>
    <h1 class="text-center">{{ msg }}</h1>
    <h2 class="text-cyan">to do:</h2>
    <ul>
        <li>add tailwind css</li>
        <li>home with canvas background</li>
        <li>blogs: hook with firebase store</li>
        <li>cv</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'welcome to @duongital blog'
    }
  }
}
</script>
