function f1() {
  var n = 999;
  nAdd = function () {
    n += 1;
  };
  function f2() {
    alert(n);
  }
  return f2;
}
var result = f1();
result(); // 999
nAdd();
result(); // 1000

var x = 1;
function test() {
  console.log(this.x);
}
test();  // 1

var x = 1;
const test = () => {
  console.log(this.x);
}
test();  // 1


class myStack {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  push(element) {
    this.length++;
    this.items.push(element);
  }
  pop() {
    if (this.length > 0) this.length--;
    return this.items.pop();
  }
  peek() {
    return this.items[this.length - 1];
  }
  isEmpty() {
    return !this.length;
  }
  size() {
    return this.length;
  }
  clear() {
    this.length = 0;
    this.items = [];
  }
  toString() {
    let result = '';
    for (let i = 0; i < this.items.length; i++) {
      let sign = i === this.items.length - 1 ? '' : ',';
      result += this.items[i] + sign
    }
    return result;
  }
  print() {
    console.log(this.toString());
  }
}
Promise.resolve().then(function promise1() {
  console.log('promise1');
})
setTimeout(function setTimeout1() {
  console.log('setTimeout1')
  Promise.resolve().then(function promise2() {
    console.log('promise2');
  })
}, 0)

setTimeout(function setTimeout2() {
  console.log('setTimeout2')
}, 0)

作者：追风筝的人er
链接：https://juejin.cn/post/6844903606466904078
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。