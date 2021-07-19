<template>
  <transition>
    <div
      class="bai-backtop"
      :style="{
        'right': styleRight,
        'bottom': styleBottom
      }"
      @click.stop="handleClick"
    >
      <slot>
        <i class="bai-icon-caret-top"></i>
      </slot>
    </div>
  </transition>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
interface IBaiBacktopProps {
  right: number
  bottom: number
}
export default defineComponent({
  name: 'BaiBacktop',
  props: {
    right: {
      type: Number,
      default: 40,
    },
    bottom: {
      type: Number,
      default: 40,
    },
  },
  emits: ['click'],
  setup(props: IBaiBacktopProps, ctx) {
    const styleRight = computed(() => `${props.right}px`)
    const styleBottom = computed(() => `${props.bottom}px`)
    const handleClick = event => {
      console.log('click backtop')
      ctx.emit('click', event)
    }
    return {
      styleRight,
      styleBottom,
      handleClick,
    }
  },
})
</script>
