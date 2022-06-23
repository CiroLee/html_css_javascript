# keypoints    
设计稿 [Link](https://www.figma.com/file/MjpFBX1neGBlPg11vtfB0W/DAILY-UI-%2361-Redeem-Coupon-(Community))

## css     
1. border-image: 允许在元素的边框上绘制图像。这样就可以自定义边框样式，可以自定义图片，渐变色等。[More](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image);     
如果要实现单侧边框， 需要借助border-image-slice属性。它的作用是将引用的图像切片，共分为9个区域。       
![](../assets/images/border-image-slice.png)   
语法：     
```css
/* top | right | bottom | left */
border-image-slice: 1 10% 20px 0;

```  
单位默认为px;  每个值表示该区域显示图像的宽高。例如只想显示右侧，只需要设置：     
```css
border-image-slice: 0 100% 0 0;
```
右侧完全显示， 其他不显示。[More](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image-slice)      

2. 伪元素::after, ::before的运用。所谓伪元素就是dom结构中不存在的元素。伪元素的最大好处的是不占用dom节点， 可以使dom变得很简洁。::before, ::after顾名思义就是在标签子元素的**前**, **后**插入一个元素，通常::after和::before是没有交互的，因为js无法获取到伪元素。例如分割线，点状符号, 一些无交互的前缀图标等。     
值得注意的是， 一些单标签元素如img, input是没有子元素的，因此也不会有::before, ::after
      

## javascript
1. `animationend`和`transitionend`。这两个事件都和动画相关。transitionend 事件会在 CSS transition 结束后触发。同理，animationend 事件会在 CSS animationend 结束后触发。 常用的使用场景是在动画结束后做一些事情，如动画结束后alert一下。 利用setTimeout可以做同样的事情，但是他是有弊端的首先我们需要知道动画的过度时间，再者setTimeout可能会造成阻塞， 导致没有按照设置的时间来执行代码， 而`animationend`, `transitionend`就会完美规避这些问题。
