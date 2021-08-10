import { App } from 'vue'
import type { SFCWithInstall } from '@baiyu-ui/utils/types'
import Main from './src/index.vue'

// 提供按需加载功能
Main.install = (app: App): void => {
  app.component(Main.name, Main)
}

const _Main: SFCWithInstall<typeof Main> = Main

export default _Main

