// 模拟实现 lodash 的 curry 方法

const myCurry = (fn) => {
  const fnLen = fn.length;
  return function (...args) {
    if (args.length >= fnLen) {
      return fn(...args);
    } else {
    }
    console.log();
  };
};





const getSum = (a, b, c) => a + b + c;
const carriedGetSum = myCurry(getSum);
console.log(carriedGetSum(1, 2, 3));

// 01 curry的参数是纯函数 根据curry的语法 ，如果参数数量满足 直接执行纯函数 ； 不满足 则返回一个函数 ，准备接受剩余参数
// 02 实际传递参数的个数 和 形参个数对比 fn.length 形参数量 ； args 实参数量
// 03 
