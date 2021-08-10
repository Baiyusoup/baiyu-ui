import { App } from 'vue'
import type { SFCWithInstall } from '@baiyu-ui/utils/types'
import Aside from './src/index.vue'

// 提供按需加载功能
Aside.install = (app: App): void => {
  app.component(Aside.name, Aside)
}

const _Aside: SFCWithInstall<typeof Aside> = Aside

export default _Aside

