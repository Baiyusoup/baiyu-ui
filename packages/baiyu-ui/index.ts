import type { App } from 'vue'
import BaiAside from '@baiyu-ui/aside'
import BaiBacktop from '@baiyu-ui/backtop'
import BaiContainer from '@baiyu-ui/container'
import BaiFooter from '@baiyu-ui/footer'
import BaiHeader from '@baiyu-ui/header'
import BaiMain from '@baiyu-ui/main'

const components = [
  BaiAside,
  BaiBacktop,
  BaiContainer,
  BaiFooter,
  BaiHeader,
  BaiMain,
]

// 全局加载
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  BaiAside,
  BaiBacktop,
  BaiContainer,
  BaiFooter,
  BaiHeader,
  BaiMain,
}

export default {
  install,
}
