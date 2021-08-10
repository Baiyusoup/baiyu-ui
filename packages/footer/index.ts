import { App } from 'vue'
import type { SFCWithInstall } from '@baiyu-ui/utils/types'
import Footer from './src/index.vue'

// 提供按需加载功能
Footer.install = (app: App): void => {
  app.component(Footer.name, Footer)
}

const _Footer: SFCWithInstall<typeof Footer> = Footer

export default _Footer

