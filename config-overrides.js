// 如果没有cusomize-cra的话，就像下面这样配置就可以
// module.exports = (config, env) => {
//     // do stuff with the webpack config...
//     return config
// }


// 如果有customize-cra的话，像下面这样配置
const {
    override,
    addDecoratorsLegacy
} = require('customize-cra')

module.exports = override(
    addDecoratorsLegacy()
)
