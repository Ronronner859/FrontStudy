import * as m from './hello.js'
console.log(m);


// ES6 模块化 引入模块 使用export 导出模块 使用import 引入模块 可以在script标签中使用type="module" 浏览器会自动使用模块化机制
// es6 是浏览器原生支持的模块化规范 不需要使用babel转换
// CommonJS 引入模块 使用require 导出模块 使用module.exports 导出模块 不能在script标签中使用type="module" 需要使用babel转换为浏览器能识别的语法
// commonjs 是nodejs的模块化规范 浏览器不识别 需要使用babel转换为浏览器能识别的语法 nodemon