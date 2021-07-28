<template>
  <transition>
    <div
      v-if="visible"
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
import { computed, defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import { easeInOutCubic } from '@baiyu-ui/utils/animation'
import { throttle } from '@baiyu-ui/utils/lodash'
interface IBaiBacktopProps {
  right: number
  bottom: number
  visibilityHeight: number
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
    visibilityHeight: {
      type: Number,
      default: 20,
    },
  },
  emits: ['click'],
  setup(props: IBaiBacktopProps, ctx) {
    // backtop的显示与隐藏
    const visible = ref(false)
    const el = ref(null)
    // backtop的方位
    const styleRight = computed(() => `${props.right}px`)
    const styleBottom = computed(() => `${props.bottom}px`)

    // 返回动画函数
    const scrollToTop = () => {
      const beginTime = Date.now()
      const beginValue = el.value.scrollTop
      const rAF = window.requestAnimationFrame
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500
        if (progress < 1) {
          el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress))
          rAF(frameFunc)
        } else {
          el.value.scrollTop = 0
        }
      }
      rAF(frameFunc)
    }

    // 控制backtop显示和隐藏的时机
    const onScroll = () => {
      visible.value = el.value.scrollTop >= props.visibilityHeight
    }

    // backtop点击处理函数
    const handleClick = event => {
      scrollToTop()
      ctx.emit('click', event)
    }

    const throttleScrollHandler = throttle(onScroll, 300)

    onMounted(() => {
      el.value = document.documentElement
      window.addEventListener('scroll', throttleScrollHandler)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', throttleScrollHandler)
    })

    return {
      visible,
      styleRight,
      styleBottom,
      handleClick,
    }
  },
})
</script>
