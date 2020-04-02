/**
 * [

        [1,  2,  3,  4,  5,  6],

        [11, 23, 35, 345],

        [34,  4,  65]

    ]

// 1,2,11,3,23, 34，4, 。。。。


00
01 10
02 11 20
03 12 21 30
04 13
 */

const printAngle = arr => {
    let max = arr.length;

    arr.forEach((v, index) => {
        max = Math.max(max, index + v.length);
    });
    const resultArr = [];

    for (let i = 0; i < max; i++) {
        for (let j = 0; j <= i; j++) {
            if (arr[j] && arr[j][i - j]) {
                resultArr.push(arr[j][i - j]);
            }
        }
    }

    console.log(resultArr);
};

const arr = [

    [1],

    [11, 23, 35, 345],

    [34, 4, 65]

];
printAngle(arr);

