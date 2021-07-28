<template>
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <BaiBacktop />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
  }
})
</script>

<style>
.box {
  height: 400px;
  margin: 20px 0;
  border: 1px solid #eee;
}
body {
  background-color: #2c3e50;
}
</style>
