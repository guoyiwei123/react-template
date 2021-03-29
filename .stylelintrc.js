module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": [
        "stylelint-scss",
        "stylelint-order"
    ],
    "rules": {
        "color-hex-case": "lower",  // 指定十六进制颜色大小写
        "color-hex-length": "short",  // 指定十六进制颜色是否使用缩写
        "color-named": "never",  // 要求 (可能的情况下) 或 禁止使用命名的颜色
        "color-no-invalid-hex": true, // 禁止使用十六进制颜色
        "declaration-block-single-line-max-declarations": 3, // 限制单行声明块中声明的数量
        "function-calc-no-unspaced-operator": null, // 不允许在calc函数内使用空格运算符
        "declaration-block-no-shorthand-property-overrides": true, // 禁止缩写属性覆盖相关普通写法属性
        "no-duplicate-selectors": null, // 在一个样式表中禁止出现重复的选择器
        "no-descending-specificity": null, //  禁止较低特异性的选择器在覆盖较高特异性的选择器之后出现
        "string-quotes": "double", // 指定字符串使用单引号还是双引号
        "indentation": 4, // 缩进
        "length-zero-no-unit": true, // 长度为0时禁止使用单位
        "declaration-no-important": true, // 禁止声明中使用!important
        "declaration-block-no-duplicate-properties": [true, {
            "ignoreProperties": ["padding-bottom"]
        }], // 禁止在块中出现重复的属性
        "order/order": [
			"custom-properties",
			"declarations"
		],
        "selector-class-pattern": "^[a-z]{1}[a-z0-9]+(_[a-z0-9]+)*$",//类选择器命名模式
        "rule-empty-line-before": "never",//禁止选择器有空行
        "at-rule-empty-line-before": "never",//@规则之前禁止空行
        "property-no-vendor-prefix": null,//允许css属性的浏览器引擎前缀
        "order/properties-order": [
            //布局属性
            "position",
            "top",
            "left",
            "right",
            "bottom",
            "z-index",
            "float",
            "clear",
            "display",
            "overflow",
            "overflow-x",
            "overflow-y",
            "flex",
            //尺寸属性
			"width",
            "min-width",
            "max-width",
			"height",
            "min-height",
            "max-height",
            "box-sizing",
            "margin",
            "margin-top",
            "margin-left",
            "margin-right",
            "margin-bottom",
            "padding",
            "padding-top",
            "padding-left",
            "padding-right",
            "padding-bottom",
            "border",
            "border-width",
            "border-style",
            "border-color",
            "border-colors",
            "border-top",
            "border-top-width",
            "border-top-style",
            "border-top-color",
            "border-top-colors",
            "border-left",
            "border-left-width",
            "border-left-style",
            "border-left-color",
            "border-left-colors",
            "border-right",
            "border-right-width",
            "border-right-style",
            "border-right-color",
            "border-right-colors",
            "border-bottom",
            "border-bottom-width",
            "border-bottom-style",
            "border-bottom-color",
            "border-bottom-colors",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-image",
            "border-image-source",
            "border-image-slice",
            "border-image-width",
            "border-image-outset",
            "border-image-repeat",
            //文字属性
            "font",
            "font-family",
            "font-style",
            "font-stretch",
            "font-weight",
            "font-variant",
            "font-size",
            "color",
            "line-height",
            "line-clamp",
            "vertical-align",
            "writing-mode",
            "text-overflow",
            "text-decoration",
            "text-decoration-line",
            "text-decoration-style",
            "text-decoration-color",
            "text-decoration-skip",
            "text-underline-position",
            "text-align",
            "text-align-last",
            "text-justify",
            "text-indent",
            "text-stroke",
            "text-stroke-width",
            "text-stroke-color",
            "text-shadow",
            "text-transform",
            "text-size-adjust",
            //界面属性
            "appearance",
            "outline",
            "outline-width",
            "outline-style",
            "outline-color",
            "outline-offset",
            "outline-radius",
            "outline-radius-topleft",
            "outline-radius-topright",
            "outline-radius-bottomleft",
            "outline-radius-bottomright",
            "background",
            "background-color",
            "background-image",
            "background-repeat",
            "background-repeat-x",
            "background-repeat-y",
            "background-position",
            "background-position-x",
            "background-position-y",
            "background-size",
            "background-origin",
            "background-clip",
            "background-attachment",
            "bakground-composite",
        ], // 指定声明块中的属性顺序
        "selector-pseudo-element-colon-notation": "single",//指定伪元素适用单冒号表示法
       
    } 
}