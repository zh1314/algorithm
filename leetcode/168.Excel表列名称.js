/**
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。

    例如，

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...

    示例 3:

    输入: 701
    输出: "ZY"
 * @param {*} n 
 */

var convertToTitle = function (n) {
    const toChar = num => String.fromCharCode(num + 64)
    let result = '';
    while (n > 0) {
        let temp = n % 26 || 26;
        result = toChar(temp) + result;
        n = (n-temp) / 26;
    }

    return result;
};

const v = convertToTitle(28);
console.log(v);