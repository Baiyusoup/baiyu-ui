<template>
  <header class="bai-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaiHeader',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
})
</script>
