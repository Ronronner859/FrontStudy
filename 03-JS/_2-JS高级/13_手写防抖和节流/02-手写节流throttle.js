/*
函数实现方式：
    1.需要接受什么参数
        1.1 回调函数fn
        1.2 延迟时间delay
    2.有什么返回值
        2.1 返回一个事件处理函数
    3.内部逻辑是什么
*/

function throttle(fn, interval, leading = true, trailing = false) {
    let startTime = 0;
    const _throttle = function (...args) {
        let nowTime = new Date().getTime();

        if (!leading && startTime === 0) {
            startTime = nowTime;
        }

        const waitTime = interval - (nowTime - startTime);
        if (waitTime <= 0) {
            fn.apply(this, args);
            startTime = nowTime;
        }
    }
    return _throttle;
}