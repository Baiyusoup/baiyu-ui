import { App } from 'vue';
import type { SFCWithInstall } from '@baiyu-ui/utils/types'
import Backtop from './src/index.vue'

// 提供按需加载功能
Backtop.install = (app: App): void => {
  app.component(Backtop.name, Backtop)
}

const _Backtop: SFCWithInstall<typeof Backtop> = Backtop

export default _Backtop

