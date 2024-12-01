const names = ['Abigail', 'John', 'John', 'John'] // never类型

// 应用场景：
/**
 * 1. 函数返回值类型为never
 * 不会返回任何值，就是never类型 ，例如：
 */
function foo(): never {
    while (true) {}
}
function foo2() {
    return []
}
