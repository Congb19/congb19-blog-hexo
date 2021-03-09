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