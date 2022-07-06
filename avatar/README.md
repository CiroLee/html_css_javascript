设计稿:  [Link](https://js.design/f/ybYCi7?p=b8NsyRunUk)
# keypoints
## css
css变量函数
var(custom-property-name, value) 函数用于插入自定义的属性值，如果一个属性值在多处被使用，该方法就很有用。          
custom-property-name	必需。自定义属性的名称，必需以 -- 开头。    
value	可选。备用值，在属性不存在的时候使用。[More](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)

```css
/* 当--height不存在时, 会使用100px */
width: var(--height, 100px);

```    
css变量作用域    
css变量作用域分为局部作用域(定义在选择器内)和全局作用域(定义在根元素内，如:root)。 同样, css变量可以定义在style行内样式中， 为全局变量。

css单位    
em: 在 font-size 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小  [More](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units)