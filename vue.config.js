// vvue-cli3中需要添加配置，可以新建vue.config.js，该文件最终会与公共配置合并
module.exports = {
  configureWebpack: {
    resolve: {
      //配置别名
      alias: {
        //公共配置中已经将src配置别名为@
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}