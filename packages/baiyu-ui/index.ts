import type { App } from 'vue'
import BaiBacktop from '@baiyu-ui/backtop';

const components = [
  BaiBacktop
]

// 全局加载
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  })
}

export {
  BaiBacktop
}

export default {
  install
}