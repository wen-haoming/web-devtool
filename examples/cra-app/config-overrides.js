const { override, addWebpackPlugin } = require('customize-cra')
const path = require('path')
// const WebpackDevToolPLugin = require('visual-dev/webpack').default
const WebpackDevToolPLugin = require('../../packages/visual-dev/plugins/webpack').default

module.exports = override(addWebpackPlugin(new WebpackDevToolPLugin({
    resolve:{
        includes:[path.resolve(__dirname,'./components')]
    },
    injectFile:false
})))
