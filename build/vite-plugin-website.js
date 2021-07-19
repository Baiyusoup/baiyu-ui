import createVuePlugin  from '@vitejs/plugin-vue'
import moduleEntryTransformPlugin from './plugins/script-module-entry-transform'

const vuePlugin = createVuePlugin();

const createWebsitePlugin = () => {
  return [
    moduleEntryTransformPlugin,
    vuePlugin
  ]
}

export default createWebsitePlugin;