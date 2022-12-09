// import { useCallback } from 'react';
import { connect } from 'react-redux';

import * as countActions from './count_actions';
// import { luffy, zero } from '../assets/images';

// function App({ countStore, add, sub }) {
function App() {
    // const { count } = countStore;
    // const addHandler = useCallback(() => {
    //     add(count + 1);
    // }, [count]);
    //
    // const subHandler = useCallback(() => {
    //     sub(count - 1);
    // }, [count]);
    //
    // return (
    //     <div>
    //         <input type="text" disabled value={count} />
    //         <button type="button" onClick={addHandler}>+</button>
    //         <button type="button" onClick={subHandler}>-</button>
    //         <img src={luffy} alt="luffy" />
    //         <img src={zero} alt="zero" />
    //     </div>
    // );
    // 手写一个 compose 和 pipe 函数
    // function add(x) {
    //     return x + 10;
    // }
    // function multiply(x) {
    //     return x * 10;
    // }
    // const compose = (...args) => (x) => args.reduceRight((a, b) => b(a), x);
    // const res = compose(multiply, add)(10);
    // console.log(res);
    // function add(x) {
    //     return x + x;
    // }
    // function multiply(x) {
    //     return x * x;
    // }
    // function pipe() {
    //     const args = Array.prototype.slice.call(arguments);
    //     return function (x) {
    //         return args.reduce((a, b) => b(a), x);
    //     };
    // }
    // const res = pipe(add, multiply)(10);
    // console.log(res);
    // function add(x) {
    //     return x + x;
    // }
    // function multiply(x) {
    //     return x * x;
    // }
    // const pipe = (...args) => (x) => args.reduce((a, b) => b(a), x);
    // const res = pipe(add, multiply)(20);
    // console.log(res);
    // 数组扁平化
    // const arr = [1, 2, [3, 4], [5, 6, [7, 8, [9, 10]]]];
    // function flat(sourceArr, initialArr) {
    //     const prevArr = initialArr || [];
    //     sourceArr.forEach((item) => {
    //         if (Array.isArray(item)) flat(item, prevArr);
    //         else prevArr.push(item);
    //     });
    //     return prevArr;
    // }
    // const result = flat(arr);
    // console.log(result);
    // const arr = [1, 2, [3, 4], [5, 6, [7, 8, [9, 10]]]];
    // function flat(sourceArr, layers, initialArr) {
    //     const prevArr = initialArr || [];
    //     for (const value of sourceArr) {
    //         if (Array.isArray(value) && layers >= 1) flat(value, layers - 1, prevArr);
    //         else prevArr.push(value);
    //     }
    //     return prevArr;
    // }
    //
    // const result = flat(arr, 1);
    // console.log(result);
    // const arr = [1, 2, [3, 4], [5, 6, [7, 8, [9, 10]]]];
    // function flat(source, initial = []) {
    //     return source.reduce((a, b) => {
    //         if (Array.isArray(b)) {
    //             return flat(b, a);
    //         }
    //         return a.concat(b);
    //     }, initial);
    // }
    // const result = flat(arr);
    // console.log(result);
    // const arr = [1, 2, [3, 4], [5, 6, [7, 8, [9, 10, [11, 12]]]]];
    // function flat(source, layers = 1, initial = []) {
    //     return source.reduce((a, b) => {
    //         if (Array.isArray(b) && layers > 1) {
    //             return flat(b, layers - 1, a);
    //         }
    //         return a.concat(b);
    //     }, initial);
    // }
    // const result = flat(arr, 4);
    // console.log(result);
    // 斐波那契数列
    // function fibonacci(n) {
    //     if (n === 0 || n === 1) {
    //         return n;
    //     }
    //     return fibonacci(n - 1) + fibonacci(n - 2);
    // }
    // const result = fibonacci(30);
    // console.log(result);
    // 缓存的斐波那契数列
    // function memo(fn, hasher) {
    //     function memoFunc(...args) {
    //         const cache = memoFunc.cache;
    //         const hashKey = hasher ? hasher.apply(this, args) : args[0];
    //         if (!cache[hashKey]) {
    //             cache[hashKey] = fn.apply(this, args);
    //         }
    //         return cache[hashKey];
    //     }
    //
    //     memoFunc.cache = {};
    //     return memoFunc;
    // }
    //
    // function fabonacci(n) {
    //     if (n === 1 || n === 0) {
    //         return n;
    //     }
    //     return fabonacci(n - 1) + fabonacci(n - 2);
    // }
    // const memoFabonacci = memo(fabonacci);
    // console.time('first');
    // console.log(memoFabonacci(40));
    // console.timeEnd('first');
    // console.time('second');
    // console.log(memoFabonacci(40));
    // console.timeEnd('second');
    // 柯里化
    // const fun = (a, b, c) => [a, b, c];
    // function curry(fn) {
    //     const argsLength = fn.length;
    //     return function _curriedFun(...args) {
    //         if (args.length >= argsLength) {
    //             return fn(...args);
    //         }
    //         return (..._args) => _curriedFun(...args.concat(_args));
    //     };
    // }
    // const curriedFun = curry(fun);
    // console.log(curriedFun(1, 2, 3));
    // console.log(curriedFun(1, 2)(3));
    // console.log(curriedFun(1)(2, 3));
    // console.log(curriedFun(1)(2)(3));
    // 防抖
    // function debounce(fn, timer) {
    //     let timeout = null;
    //     return function (...args) {
    //         if (timeout) {
    //             clearTimeout(timeout);
    //             timeout = null;
    //         }
    //         timeout = setTimeout(() => {
    //             fn.apply(this, args);
    //         }, timer);
    //     };
    // }
    // 截流
    // function throttle(fn, timer) {
    //     let timeout = null;
    //     let isFirst = true;
    //     return function (...args) {
    //         if (timeout) {
    //             return false;
    //         }
    //         if (isFirst) {
    //             fn(...args);
    //             isFirst = false;
    //             return true;
    //         }
    //         timeout = setTimeout(() => {
    //             fn(...args);
    //             timeout = null;
    //             clearTimeout(timeout);
    //         });
    //     };
    // }
    // const shallowCopy = (o) => {
    //     const _o = Array.isArray(o) ? [] : {};
    //     for (const key in o) {
    //         // eslint-disable-next-line
    //         if (o.hasOwnProperty(key)) {
    //             _o[key] = o[key];
    //         }
    //     }
    //     return _o;
    // };
    // const person = {
    //     name: 'wtw',
    //     age: 28,
    //     hobby: {
    //         sports: 'basketball',
    //     },
    // };
    // const _person = shallowCopy(person);
    // _person.name = 'gary';
    // console.log(_person, person);
    // _person.hobby.sports = 'football';
    // console.log(_person, person);
    // function deepClone(o) {
    //     return JSON.parse(JSON.stringify(o));
    // }
    // const person = {
    //     name: 'wtw',
    //     age: 28,
    //     hobby: {
    //         sports: 'basketball',
    //     },
    //     homeland() {
    //
    //     },
    // };
    // const _person = deepClone(person);
    // _person.name = 'gary';
    // console.log(_person, person);
    // _person.hobby.sports = 'football';
    // console.log(_person, person);
    // function deepClone(o) {
    //     // eslint-disable-next-line
    //     const _o = Array.isArray(o) ? [] : {};
    //     for (const key in o) {
    //         // eslint-disable-next-line
    //         if (o.hasOwnProperty(key)) {
    //             if (o[key] && typeof o[key] === 'object') {
    //                 _o[key] = deepClone(o[key]);
    //             } else {
    //                 _o[key] = o[key];
    //             }
    //         }
    //     }
    //     return _o;
    // }
    // const person = {
    //     name: 'wtw',
    //     age: 28,
    //     hobby: {
    //         sports: 'basketball',
    //     },
    //     homeland() {
    //
    //     },
    // };
    // eslint-disable-next-line
    // const _person = deepClone(person);
    // _person.name = 'gary';
    // console.log(_person, person);
    // _person.hobby.sports = 'football';
    // console.log(_person, person);
    // function deepCloneContainer(source_o) {
    //     const mapCache = new WeakMap();
    //     function deepClone(o) {
    //         // eslint-disable-next-line
    //         const _o = Array.isArray(o) ? [] : {};
    //         const exit_o = mapCache.get(o);
    //         if (exit_o) {
    //             return exit_o;
    //         }
    //         mapCache.set(o, o);
    //         for (const key of Reflect.ownKeys(o)) {
    //             // eslint-disable-next-line
    //             if (o.hasOwnProperty(key)) {
    //                 if (o[key] && typeof o[key] === 'object') {
    //                     _o[key] = deepClone(o[key]);
    //                 } else {
    //                     _o[key] = o[key];
    //                 }
    //             }
    //         }
    //         return _o;
    //     }
    //     return deepClone(source_o);
    // }
    // const person = {
    //     name: 'wtw',
    //     age: 28,
    //     hobby: {
    //         sports: 'basketball',
    //     },
    //     homeland() {
    //
    //     },
    //     secret: Symbol.for('secret'),
    // };
    // person.me = person;
    // const _person = deepCloneContainer(person);
    // _person.name = 'gary';
    // console.log(_person, person);
    // _person.hobby.sports = 'football';
    // console.log(_person, person);
    // console.log(_person.me);
    // function pick(sourceObject, ...property) {
    //     const cacheMap = new WeakMap();
    //     function deepClone(o) {
    //         const _o = Array.isArray(o) ? [] : {};
    //         const existObj = cacheMap.get(o);
    //         if (existObj) {
    //             return existObj;
    //         }
    //         cacheMap.set(o, o);
    //         for (const key of Reflect.ownKeys(o)) {
    //             // eslint-disable-next-line
    //             if (o.hasOwnProperty(key) && property.includes(key)) {
    //                 if (o[key] && typeof o[key] === 'object') {
    //                     _o[key] = deepClone(o[key]);
    //                 } else {
    //                     _o[key] = o[key];
    //                 }
    //             }
    //         }
    //         return _o;
    //     }
    //     return deepClone(sourceObject);
    // }
    // const person = {
    //     name: 'wtw',
    //     age: 28,
    //     hobby: {
    //         sports: 'basketball',
    //     },
    //     homeland() {
    //
    //     },
    //     secret: Symbol.for('secret'),
    // };
    // person.me = person;
    // const _person = pick(person, 'name', 'age', 'me', 'hobby');
    // _person.name = 'gary';
    // console.log(_person, person);
    // _person.hobby.sports = 'football';
    // console.log(_person, person);
    // console.log(_person.me);
    // function deepClone(o) {
    //     const weakMap = new WeakMap();
    //     function deepCloneFunc(o) {
    //         const _o = Array.isArray(o) ? [] : {};
    //         const existObj = weakMap.get(o);
    //         if (existObj) return existObj;
    //         weakMap.set(o, o);
    //         for (const key of Reflect.ownKeys(o)) {
    //             if (o.hasOwnProperty(key)) {
    //                 if (o[key] && typeof o[key] === 'object') {
    //                     _o[key] = deepCloneFunc(o[key]);
    //                 } else {
    //                     _o[key] = o[key];
    //                 }
    //             }
    //         }
    //         return _o;
    //     }
    //     return deepCloneFunc(o);
    // }
    // const person = {
    //     name: 'wtw',
    //     age: 28,
    //     hobby: {
    //         sports: 'basketball',
    //     },
    //     homeland() {
    //
    //     },
    //     secret: Symbol.for('secret'),
    // };
    // const _person = deepClone(person);
    // _person.name = 'gary';
    // console.log(_person, person);
    // _person.hobby.sports = 'football';
    // console.log(_person, person);
    // const myNew = (fn, ...args) => {
    //     const obj = {};
    //     const result = fn.call(obj, ...args);
    //     const isObject = typeof result === 'object' && result !== null;
    //     const isFunction = typeof result === 'function';
    //     if (isObject || isFunction) {
    //         return result;
    //     }
    //     obj.__proto__ = fn.prototype;
    //     return obj;
    // };
    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }
    // Person.prototype.introduce = function () {
    //     console.log(`I'm ${this.name}, ${this.age} year's old~`);
    // };
    // const o = myNew(Person, 'Gary', 29);
    // console.log(o.name, o.age);
    // o.introduce();
    // const myInstanceof = (targetObj, targetClass) => {
    //     if (!targetObj || !targetClass || !targetObj.__proto__ || !targetClass.prototype) {
    //         return false;
    //     }
    //     let current = targetObj;
    //     while (current) {
    //         if (current.__proto__ === targetClass.prototype) {
    //             return true;
    //         }
    //         current = current.__proto__;
    //     }
    //     return false;
    // };
    // function Person() {}
    // function Children() {}
    // Children.prototype = new Person();
    // const children = new Children();
    // console.log(myInstanceof(children, Children));
    // console.log(myInstanceof(children, Person));
    // console.log(myInstanceof({}, Person));
    // console.log(children.__proto__ === Children.prototype);
    // console.log(children.__proto__.__proto__ === Person.prototype);
    // Function.prototype.mycall = function (o, ...args) {
    // if (typeof this !== 'function') {
    //     throw new Error('call 方法必须被函数调用');
    // }
    //     const symbolFunc = Symbol.for('func');
    //     o[symbolFunc] = this;
    //     return o[symbolFunc](...args);
    // };
    // const person = {
    //     name: 'Gary',
    //     homeland() {
    //         console.log(`I love ${this.name}`);
    //     },
    // };
    // const wtw = {
    //     name: 'wtw',
    // };
    // person.homeland();
    // person.homeland.call(wtw);
    // Function.prototype.myapply = function (o = window, args = []) {
    //     if (typeof this !== 'function') {
    //         throw new Error('call 方法必须被函数调用');
    //     }
    //     const symbolFunc = Symbol.for('func');
    //     o[symbolFunc] = this;
    //     const res = o[symbolFunc](...args);
    //     delete o[symbolFunc];
    //     return res;
    // };
    // const person = {
    //     name: 'Gary',
    //     homeland() {
    //         console.log(`I love ${this.name}`);
    //     },
    // };
    // const wtw = {
    //     name: 'wtw',
    // };
    // person.homeland();
    // person.homeland.myapply(wtw);
    // Function.prototype.myBind = function (context, ...args) {
    //     if (typeof this !== 'function') {
    //         throw new TypeError('bind 方法必须被一个函数调用!');
    //     }
    //     const self = this;
    //     const F = function () {
    //     };
    //     let fBind;
    //     fBind = function (...innerArgs) {
    //         return self.apply(this instanceof fBind ? this : context, [...args, ...innerArgs]);
    //     };
    //     F.prototype = self.prototype;
    //     Object.setPrototypeOf(fBind.prototype, F.prototype);
    //     return fBind;
    // };
    // const person = {
    //     name: 'Gary',
    //     homeland() {
    //         console.log(`I love ${this.name}`);
    //     },
    // };
    // const wtw = {
    //     name: 'wtw',
    // };
    // person.homeland();
    // person.homeland.bind(wtw)();
    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }
    // const wtw = { name: 'wtw', age: 29 };
    // const fBind = Person.myBind(wtw, 'Gary');
    // fBind(30);
    // console.log(wtw);
    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }
    // Person.prototype.introduce = function () {
    //     console.log(`I'm ${this.name},${this.age} year's old~`);
    // };
    // const wtw = { name: 'wtw', age: 29 };
    // const fBind = Person.myBind(wtw, 'white_than_wood');
    // const white = new fBind(31);
    // console.log(white, wtw);
    // white.introduce();
    // Function.prototype.softBind = function (context, ...args) {
    //     if (typeof this !== 'function') {
    //         throw new TypeError('softBind 方法必须被一个函数调用!');
    //     }
    //     const self = this;
    //     const F = function () {
    //     };
    //     const fBind = function (...innerArgs) {
    //         return self.apply((this === window || this === undefined) ? context : this, [...args, ...innerArgs]);
    //     };
    //     F.prototype = self.prototype;
    //     Object.setPrototypeOf(fBind.prototype, F.prototype);
    //     return fBind;
    // };
    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }
    // Person.prototype.introduce = function () {
    //     console.log(`I'm ${this.name},${this.age} year's old~`);
    // };
    // const wtw = { name: 'wtw', age: 29 };
    // const empty = {};
    // const fBind = Person.softBind(wtw, 'white_than_wood');
    // const white = new fBind(31);
    // console.log(white, wtw);
    // white.introduce();
    // fBind.call(empty, 40);
    // console.log(wtw, empty);

    return (
        // <div className="parent">
        //     <div className="children">
        //         居中!!!!
        //     </div>
        // </div>
        <>
            <div className="parent">
                <div className="left">
                    <p>left</p>
                </div>
                <div className="center">
                    <p>right</p>
                    <p>right</p>
                    <p>right</p>
                </div>
                <div className="right">
                    <p>right</p>
                    <p>right</p>
                    <p>right</p>
                </div>
            </div>
            <div className="box" />
        </>
        // <div className="parent">
        //     <div className="column">
        //         1
        //     </div>
        //     <div className="column">
        //         2
        //     </div>
        //     <div className="column">
        //         3
        //     </div>
        //     <div className="column">
        //         4
        //     </div>
        // </div>
    );
}

export default connect((state) => ({
    countStore: state.countStore,
}), (dispatch) => ({
    add(count) {
        dispatch(countActions.addCount({ count }));
    },
    sub(count) {
        dispatch(countActions.subCount({ count }));
    },
}))(App);
