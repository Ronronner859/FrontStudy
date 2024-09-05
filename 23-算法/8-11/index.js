console.log('hello world')

const arr = [2, 3, 1, 134, 2, 4]
/**
 *
 * @param arr 数组
 */
function sort(arr) {
    arr.forEach((item, index) => {

    })
}

function sort_v2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            let temp = null
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

const newArr = sort_v2(arr)
console.log(newArr)


// [1,[2,3]]  --- [1,2,3]
const arr2 = [1, [2, 3],
    [32, 2], 3, [323, 33]
]
let newArr2 = []

function arrLeave(arr) {
    arr.forEach((item, index) => {
        if (!Array.isArray(item)) {
            newArr2.push(item)
        }
        if (Array.isArray(item)) {
            item.forEach((item, index) => {
                console.log(item)
                newArr2.push(item)
            })
        }
        // newArr2.push(item)
    })
}

arrLeave(arr2)
console.log(arr2)
console.log(newArr2)

console.log(arr2.toString().split(',').map(item => +item))

/**
 * find
 */
let arrs = [2, 2, 3]
console.log(arrs.find(item => item === 2))

/**
 * Json.parse 
 *
 */
let numArr = [1, 3, 4]

function last(arr) {
    if (!arr.length) {
        return -1
    }
    return arr[arr.length - 1]
}
console.log(last(numArr));

console.log('last');
Array.prototype.last = function () {
    if (!this.length) {
        return -1
    }
    return this[this.length - 1]
}
console.log(Array.prototype.last());


var createCounter = function (n) {
    n++
    return function () {
        return n++;
    };
};
console.log(createCounter(1)());
console.log(createCounter(2)());