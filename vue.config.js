const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports={
  devServer:{
    proxy: 'https://quaint-ray-woolens.cyclic.app',
  }
}