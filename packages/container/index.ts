import { App } from 'vue'
import type { SFCWithInstall } from '@baiyu-ui/utils/types'
import Container from './src/index.vue'

// 提供按需加载功能
Container.install = (app: App): void => {
  app.component(Container.name, Container)
}

const _Container: SFCWithInstall<typeof Container> = Container

export default _Container

