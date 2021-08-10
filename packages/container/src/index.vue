<template>
  <section class="bai-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script lang='ts'>
import { defineComponent, computed, VNode, Component } from 'vue'

interface IBaiContainerProps {
  direction: string
}
export default defineComponent({
  name: 'BaiContainer',
  setup(props: IBaiContainerProps, { slots }) {
    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true
      } else if (props.direction === 'horizontal') {
        return false
      }

      // 判断默认插槽，如果direction没有给值，那么就需要判断插槽的组件有没有header或footer组件
      // 如果有存在其中之一，那么就说明容器的主轴方向是垂直方向
      if (slots && slots.default) {
        const vNodes: VNode[] = slots.default()
        return vNodes.some(node => {
          const tag = (node.type as Component).name
          return tag === 'BaiHeader' || tag === 'BaiFooter'
        })
      } else {
        return false
      }
    })
    return {
      isVertical,
    }
  },
})
</script>
