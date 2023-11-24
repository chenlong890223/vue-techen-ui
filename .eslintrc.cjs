/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // eslint（https://eslint.bootcss.com/docs/rules/）
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', // 禁止空余的多行
    'no-useless-escape': 'off', // 禁止不必要的转义字符

    // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'off', // 禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/no-non-null-assertion': 'off', // '!'不允许使用后缀运算符的非空断言
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off', // 需要函数和类方法的显式返回类型
    '@typescript-eslint/no-var-requires': 'off', // 不允许使用 require 语句，除了在 import 语句中
    '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
    '@typescript-eslint/no-use-before-define': 'off', // 在定义之前禁止使用变量
    '@typescript-eslint/ban-ts-comment': 'off', // 禁止 @ts-<directive> 使用评论或在指令后要求描述
    '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 需要导出函数和类的公共类方法的显式返回和参数类型
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
        },
        singleline: {
          delimiter: 'comma',
        },
      },
    ],
    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
    'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
    /** 要求或禁止函数圆括号之前有一个空格 */
    'space-before-function-paren': 0,
    /** 禁止或强制在括号内使用空格 */
    'vue/array-bracket-spacing': 'error',
    /** 要求箭头函数的箭头之前或之后有空格 */
    'vue/arrow-spacing': 'error',
    /** 禁止或强制在代码块中开括号前和闭括号后有空格  */
    'vue/block-spacing': 'error',
    /** 大括号风格要求,用来描述大括号相对控制语句和代码块的位置 */
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    /** 要求或禁止使用拖尾逗号 */
    'vue/comma-dangle': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    /** 要求使用 === 和 !== */
    'vue/eqeqeq': 'error',
    /** 强制在对象字面量的键和值之间使用一致的空格 */
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    /** 强制在花括号中使用一致的空格 */
    'object-curly-spacing': ['error', 'always'], // 对象{} 两侧空格
    'vue/object-curly-spacing': ['error', 'always'], // template 对象{} 两侧空格
    'vue/no-multiple-template-root': 0, // 支持多个根元素
    // "vue/multi-word-component-names":"off",
    'vue/no-v-model-argument': 'off', // 'v-model' directives require no argument
    /** 要求或禁止使用分号代替 ASI,即禁用行位使用分号 */
    semi: ['error', 'never'],
    /** 强制分号之前和之后使用一致的空格 */
    'semi-spacing': ['error', { before: false, after: true }],
    /** 要求或禁止语句块之前的空格 */
    'space-before-blocks': ['error', 'always'],
    /** 禁止或强制圆括号内的空格 */
    'space-in-parens': ['error', 'never'],
    /** 确保中缀运算符周围有空格 */
    'space-infix-ops': ['error', { int32Hint: false }],
    /** 要求或禁止在一元操作符之前或之后存在空格 */
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    /** 要求或禁止在注释前有空白 */
    'spaced-comment': [
      'error',
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ',',
        ],
      },
    ],
    /** 强制模板字符串中空格的使用 */
    'template-curly-spacing': ['error', 'never'],
    /** 要求调用 isNaN()检查 NaN */
    'use-isnan': 'error',
    /** 强制 typeof 表达式与有效的字符串进行比较  */
    'valid-typeof': 'error',
    /** 需要把立即执行的函数包裹起来 */
    'wrap-iife': ['error', 'any'],
    /** 强制在 yield* 表达式中 * 周围使用空格 */
    'yield-star-spacing': ['error', 'after'],
    /** 强制 generator 函数中 * 号周围有空格 */
    'generator-star-spacing': ['error', 'after'],
    /** 要求或禁止块内填充 */
    'padded-blocks': ['error', 'never'],
    /** 强制操作符使用一致的换行符风格 */
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    /** 强制函数中的变量在一起声明或分开声明 */
    'one-var': ['error', 'never'],
    /** 要求构造函数首字母大写 */
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    /** 要求调用无参构造函数时带括号 */
    'new-parens': 'error',
    /** 强制关键字周围空格的一致性 */
    'keyword-spacing': ['error', { before: true, after: true }],
    /** 强制在 JSX 属性中使用一致的单引号或双引号 */
    'jsx-quotes': ['error', 'prefer-single'],
    /** 强制使用一致的缩进 */
    indent: ['error', 2, { SwitchCase: 1 }],
    /** 强制回调错误处理 */
    // 'handle-callback-err': ['error', '^(err|error)$'],
    /** 要求或禁止文件末尾保留一行空行 */
    // 'eol-last': ['error', 'always'],
    /** 强制在点号之前或之后换行 */
    'dot-location': ['error', 'property'],
    /** 要求遵循大括号约定 */
    curly: ['error', 'multi-line'],
    /** 验证构造函数中 super() 的调用 */
    'constructor-super': 'error',
    /** 逗号风格 (comma-style) */
    'comma-style': ['error', 'last'],
    /** 强制在逗号周围使用空格 */
    'comma-spacing': ['error', { before: false, after: true }],
    /** 要求或禁止在函数标识符和其调用之间有空格 */
    // 'func-call-spacing': ['error', 'never'],
    /** no 配置 */
    /** 禁止使用 Array 构造函数 */
    'no-array-constructor': 'error',
    /** 禁用 arguments.caller 或 arguments.callee */
    'no-caller': 'error',
    /** 禁止修改类声明的变量 */
    'no-class-assign': 'error',
    /** 禁止条件表达式中出现赋值操作符 */
    'no-cond-assign': ['error', 'always'],
    /** 禁止修改 const 声明的变量 */
    'no-const-assign': 'error',
    /** 禁止在正则表达式中使用控制字符 */
    'no-control-regex': 'error',
    /** 禁止删除变量 */
    'no-delete-var': 'error',
    /** 禁止 function 定义中出现重名参数 */
    'no-dupe-args': 'error',
    /** 禁止对象字面量中出现重复的 key */
    'no-dupe-keys': 'error',
    /** 禁止出现重复的 case 标签 */
    'no-duplicate-case': 'error',
    /** 禁止在正则表达式中出现空字符集 */
    'no-empty-character-class': 'error',
    /** 禁止使用空解构模式 */
    'no-empty-pattern': 'error',
    /** 禁止对 catch 子句的参数重新赋值 */
    'no-ex-assign': 'error',
    /** 禁止扩展原生对象 */
    'no-extend-native': 'error',
    /** 禁止不必要的函数绑定 */
    'no-extra-bind': 'error',
    /** 禁止不必要的布尔类型转换 */
    'no-extra-boolean-cast': 'error',
    /** 禁止冗余的括号 */
    'no-extra-parens': ['error', 'functions'],
    /** 禁止 case 语句落空 */
    'no-fallthrough': 'error',
    /** 禁止浮点小数 */
    'no-floating-decimal': 'error',
    /** 禁止对 function 声明重新赋值  */
    'no-func-assign': 'error',
    /** 禁止在嵌套的语句块中出现变量或 function 声明 */
    'no-inner-declarations': ['error', 'functions'],
    /** 禁止在 RegExp 构造函数中出现无效的正则表达式 */
    'no-invalid-regexp': 'error',
    /** 禁止不规则的空白 */
    'no-irregular-whitespace': 'error',
    /** 禁用迭代器 */
    'no-iterator': 'error',
    /** 禁用与变量同名的标签 */
    'no-label-var': 'error',
    /** 禁用标签语句 */
    'no-labels': ['error', { allowLoop: true, allowSwitch: false }],
    /** 禁用不必要的嵌套块 */
    'no-lone-blocks': 'error',
    /** 禁止使用 空格 和 tab 混合缩进 */
    'no-mixed-spaces-and-tabs': 'error',
    /** 禁止出现多个空格 */
    'no-multi-spaces': 'error',
    /** 禁止多行字符串 */
    'no-multi-str': 'error',
    /** 禁止对原生对象或只读的全局对象进行赋值 */
    'no-global-assign': 'error',
    /** 禁止对关系运算符的左操作数使用否定操作符 */
    'no-unsafe-negation': 'error',
    /** 禁止使用 Object 构造函数 */
    'no-new-object': 'error',
    /** 不允许 new require */
    'no-new-require': 'error',
    /** 禁止 Symbolnew 操作符和 new 一起使用 */
    'no-new-symbol': 'error',
    /** 禁止原始包装实例 */
    'no-new-wrappers': 'error',
    /** 禁止将全局对象当作函数进行调用 */
    'no-obj-calls': 'error',
    /** 禁用八进制字面量 */
    'no-octal': 'error',
    /** 禁止在字符串字面量中使用八进制转义序列 */
    'no-octal-escape': 'error',
    /** 当使用 _dirname 和 _filename 时不允许字符串拼接 */
    'no-path-concat': 'error',
    /** 禁用__proto__ */
    'no-proto': 'error',
    /** 禁止重新声明变量 */
    'no-redeclare': 'error',
    /** 禁止正则表达式字面量中出现多个空格 */
    'no-regex-spaces': 'error',
    /** 禁止在返回语句中赋值 */
    'no-return-assign': ['error', 'except-parens'],
    /** 禁止自身赋值 */
    'no-self-assign': 'error',
    /** 禁止自身比较 */
    'no-self-compare': 'error',
    /** 不允许使用逗号操作符 */
    'no-sequences': 'error',
    /** 关键字不能被遮蔽 */
    'no-shadow-restricted-names': 'error',
    /** 禁用稀疏数组 */
    'no-sparse-arrays': 'error',
    /** 在构造函数中禁止在调用super()之前使用this或super */
    'no-this-before-super': 'error',
    /** 限制可以被抛出的异常 */
    'no-throw-literal': 'error',
    /** 禁用行尾空格 */
    'no-trailing-spaces': 'error',
    /** 禁用未声明的变量 */
    // 'no-undef': 'error',
    /** 不允许初始化变量值为 undefined */
    'no-undef-init': 'error',
    /** 禁用一成不变的循环条件 */
    'no-unmodified-loop-condition': 'error',
    /** 禁止可以表达为更简单结构的三元操作符 */
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    /** 禁止在 return、throw、continue 和 break 语句之后出现不可达代码 */
    'no-unreachable': 'error',
    /** 禁止在 finally 语句块中出现控制流语句 */
    'no-unsafe-finally': 'error',
    /** 禁止未使用过的变量 */
    // 'no-unused-vars': ['error', {'vars': 'local','args': 'none'}],
    /** 禁用不必要的 .call() 和 .apply() */
    'no-useless-call': 'error',
    /** 禁止在对象中使用不必要的计算属性 */
    'no-useless-computed-key': 'error',
    /** 禁用不必要的构造函数 */
    'no-useless-constructor': 'error',
    /** 禁止属性前有空白 */
    'no-whitespace-before-property': 'error',
    /** 禁用 with 语句 */
    'no-with': 'error',
    // 不允许使用异步函数作为 Promise 执行器
    'no-async-promise-executor': 0,
    // 关闭
    'prettier/prettier': 'off',
  },
}
