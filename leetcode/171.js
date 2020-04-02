/**
 * 给定一个Excel表格中的列名称，返回其相应的列序号。

例如，

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 

    ZY -> 701
    ...
 */

 /**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const charNum = s.charCodeAt(i) - 64;
        result += (charNum * Math.pow(26, s.length - 1 - i));
    }
    return result;
};

const v = titleToNumber('ZAZZ');
console.log(v);

var titleToNumber1 = function(s) {

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const charNum = s.charCodeAt(i) - 64;
        result = (result * 26 + charNum);
    }
    return result;
};

const v1 = titleToNumber1('ZAZZ');
console.log(v1);
