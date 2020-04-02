// 1. 请手动实现一个简单版本的 JSON.stringify 方法
// function stringify(target: object, indent: number): string {
//   // write your code
// }

const stringify = target => {
    if (target instanceof Array) {
        let result = target.map(v => stringify(v));
        return `[${result.join(',')}]`
    } 
    if (target instanceof Object) {
        let result = Object.keys(target).map(key => `${key}: ${stringify(target[key])}`)
        return `{${result.join(',')}}`
    }

    return target;
}

const datas = {a: '1', b: [1,2]};
console.log(stringify(datas));