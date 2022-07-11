设计稿 [Link](https://js.design/f/88_KC7?p=R5DKFfbG_E)

## javascript
Date对象在解析时间时，在safari和chrome上，时间格式不同，结果会有差别。safari上不能正确识别`2022-1-1`这样短横线连接的时间, 但是对/连接的时间可以正确解析， 而chrome则都可以正确解析。同样ios上的safari也有同样的问题，因此兼容写法，日期格式最好是以/连接。如： `2022/7/11 12:12:12`