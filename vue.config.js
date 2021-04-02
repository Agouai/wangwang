// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
/* eslint-disable */
//import path from 'path'

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icon')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end()//只在这个icon这个目录下用这个规则
      .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({extract: false}).end()//不解析出文件
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir)//其他svg loader 不走icon这个目录
  }
}