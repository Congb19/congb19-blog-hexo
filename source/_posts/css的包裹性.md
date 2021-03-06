---
title: CSS的“包裹性”&文本换行问题
tags: []
id: '155'
categories: dev
date: 2020-03-28 16:30:21
---

最近读《CSS世界》 ，css真是太多太杂了，原理也打破了我原来的一些认知，在这里记录一些点

<!-- more -->

读到内部尺寸与流体特性这一节，读到一段：

> “ 所谓“自适应性”，指的是元素尺寸由内部元素决定，但永远小于“包含块”容器的尺寸（除非容器尺寸小于元素的“首选最小宽度”）。换句话说就是，“包裹性”元素冥冥中有个max-width:100%罩着的感觉（注意，此说法只是便于大家理解，实际上是有明显区别的）。”
> 
> “ 因此，对于一个元素，如果其display属性值是inline-block，那么即使其里面内容再多，只要是正常文本，宽度也不会超过容器。”
> 
> 《CSS世界》3.2

想来确实如此，外部为inline内部为block，内部的内容应该超不出去。但是实际测试的时候却长了出去，文本没有换行：

```css
.class2 {
  box-sizing: border-box;
  display: inline-block;
  width: 200px;
  height: 200px;
  padding: 20px;
  background-color: red;
}
```
```html
<div class="class2">
  <span>
    hellohellohellohellohellohellohellohellohellohellohellohello
  </span>
</div>
```

![](https://www.congb19.top/wordpress/wp-content/uploads/2020/03/QQ图片20200328162312.png)

后来询问大佬得知，这是由于文本的内容是一段连续的英文字母的原因。只要换成中文或者带空格的英文单词，就能正常换行了。。

![](https://www.congb19.top/wordpress/wp-content/uploads/2020/03/QQ截图20200328162544.png)

另外还有一种强制换行的办法，即给文本添加CSS3的word-wrap属性，可以达到英文文本强制换行的效果。语法：

```css
word-wrap: normalbreak-word;
```