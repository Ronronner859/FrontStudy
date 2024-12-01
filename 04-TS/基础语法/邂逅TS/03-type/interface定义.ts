// 区别
// 1. 接口可以继承类
// type范围更广
type Mynumber = number | number | string

//接口类型可以生命对象
interface MyObject {
    id: number
    name: string
}
// type 不允许声明两次
type MyObject1 = {
    id: number
    name: string
}
