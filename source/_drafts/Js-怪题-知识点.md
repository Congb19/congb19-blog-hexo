---
title: Js 怪题\知识点
tags: []
id: '289'
categories:
  - - 未分类
---

持续更新

> 1\. 输出是什么？
> 
> 变量提升

```
function sayHi() {
  console.log(name)
  console.log(age)
  var name = 'Lydia'
  let age = 21
}
sayHi()
```

*   A: Lydia 和 undefined
*   B: Lydia 和 ReferenceError
*   C: ReferenceError 和 21
*   D: undefined 和 ReferenceError

**答案： D**

`首先通过 var 关键字声明了 name 变量。这意味着**变量被提升了（内存空间在创建阶段就被设置好了），直到程序运行到定义变量位置之前默认值都是 undefined**。因为当我们打印 name 变量时还没有执行到定义变量的位置，因此变量的值保持为 undefined。`  
`通过 let 和 const 关键字声明的变量也会提升，但是和 var 不同，**它们不会被初始化**。在我们声明（初始化）之前不能访问它们。这个行为被称之为**暂时性死区**。当我们试图在声明之前访问它们时，JavaScript 将会抛出一个 ReferenceError 错误。`

![](https://www.congb19.top/wordpress/wp-content/uploads/2021/02/image.png)

> 2\. 输出是什么？
> 
> this指向 闭包

```
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () => 2 * Math.PI * this.radius
}
shape.diameter()
shape.perimeter()
```

*   A: 20 and 62.83185307179586
*   B: 20 and NaN
*   C: 20 and 63
*   D: NaN and 63

**答案：B**

`在shape对象中，diameter 的值是一个**常规函数**，但是 perimeter 的值是一个**箭头函数**。`  
`**对于箭头函数，this 关键字指向的是它当前周围作用域**（简单来说是包含箭头函数的常规函数，如果没有常规函数的话就是全局对象），这个行为和常规函数不同。这意味着当我们调用 perimeter 时，this 不是指向 shape 对象，而是它的周围作用域（在例子中是 window）。`

![](https://www.congb19.top/wordpress/wp-content/uploads/2021/02/image-1.png)

> 3\. 类型
> 
> 基本类型、类型转换

![](http://www.congb19.top/wordpress/wp-content/uploads/2021/02/image-2.png)

![](http://www.congb19.top/wordpress/wp-content/uploads/2021/02/image-3.png)

`new Number() 是一个内建的函数构造器。虽然它看着像是一个 number，但它实际上并不是一个真实的 number：它有一堆额外的功能并且它是一个对象。`

> 4\. 输出是什么？
> 
> this指向 global

```
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
const lydia = new Person('Lydia', 'Hallie')
const sarah = Person('Sarah', 'Smith')
console.log(lydia)
console.log(sarah)
```

*   A: Person {firstName: "Lydia", lastName: "Hallie"} and undefined
*   B: Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}
*   C: Person {firstName: "Lydia", lastName: "Hallie"} and {}
*   D:Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError

**答案：A**

`对于 sarah，我们没有使用 new 关键字。当使用 new 时，this 引用我们创建的空对象。当未使用 new 时，this 引用的是全局对象（global object）。 我们说 this.firstName 等于 "Sarah"，并且 this.lastName 等于 "Smith"。实际上我们做的是，定义了 global.firstName = 'Sarah' 和 global.lastName = 'Smith'。而 sarah 本身是 undefined。`

> 5\. 输出是什么？
> 
> \`\`模版

```
function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}
const person = 'Lydia'
const age = 21
getPersonInfo`${person} is ${age} years old`
```

*   A: "Lydia" 21 \["", " is ", " years old"\]
*   B: \["", " is ", " years old"\] "Lydia" 21
*   C: "Lydia" \["", " is ", " years old"\] 21

**答案：B**

`如果使用标记模板字面量，第一个参数的值总是包含字符串的数组。其余的参数获取的是传递的表达式的值。`

![](http://www.congb19.top/wordpress/wp-content/uploads/2021/02/image-4.png)