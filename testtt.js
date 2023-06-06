// 生成器函数回顾
/* eslint-disable */

/*
function* foo() {
    console.log("start");

    try {
        const res = yield "foo";
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}

// 生成器函数不会立即调用，而是返回一个generator对象
const generator = foo();

// 再使用其对象的next()方法之后才会调用生成器函数中的内容
// 并且在第一个yield关键字下停下
const result = generator.next();
// 也就是说下面这句话生成的值应该是foo
console.log(result);
generator.next(123);
// 这里接着使用next方法，其中带有的参数"bar"就会作为yield语句的返回值传递给res，然后执行到下一个yield
// generator.next('bar')

// 这里也会继续执行，抛出一个异常，走catch
generator.throw(new Error("Generator error"));
*/

function* foo() {
    try {
        const res = yield "foo";
        console.log(res);
        const res1 = yield "foo1";
        console.log(res1)
    } catch (e) {
        console.error(e)
    }
}

const generator = foo();
const res1 = generator.next();
console.log(res1)
const res2 = generator.next({ value: '123' });
console.log(res2)
generator.next({ value: 321 })

