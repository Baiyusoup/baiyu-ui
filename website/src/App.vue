<template>
  <BaiContainer>
    <BaiAside>
      侧边栏
    </BaiAside>
    <BaiContainer>
      <BaiHeader>
        头部
      </BaiHeader>
      <BaiMain>
        主体
      </BaiMain>
    </BaiContainer>
  </BaiContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
