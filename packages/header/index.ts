import { App } from 'vue'
import type { SFCWithInstall } from '@baiyu-ui/utils/types'
import Header from './src/index.vue'

// 提供按需加载功能
Header.install = (app: App): void => {
  app.component(Header.name, Header)
}

const _Header: SFCWithInstall<typeof Header> = Header

export default _Header

