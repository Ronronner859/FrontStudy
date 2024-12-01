//  映射类型
interface Person {
    name: string
    age: number
}
// 拷贝
interface PersonCopy {
    name?: string
    age?: number
}

// 映射类型 不能直接使用interface
type MapPerson<type> = {
    [key in keyof type]: type[key]
}
