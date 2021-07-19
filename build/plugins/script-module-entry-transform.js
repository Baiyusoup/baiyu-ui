// 这是抄 naive-ui 的 
const transformIndexHtml = (code) => {
  switch(process.env.NODE_ENV) {
    case 'production':
      return code.replace(/__ENTRY__/, './index.prod.ts')
    default:
      return code.replace(/__ENTRY__/, './index.dev.ts')
  }
}
const moduleEntryTransformPlugin = {
  name: 'entry-transform',
  enforce: 'pre',
  transform(code, id) {
    if (id.endsWith('.html')) {
      return { code: transformIndexHtml(code), map: null }
    }
  },
  transformIndexHtml
}

export default moduleEntryTransformPlugin;