const result = [];
const randomArr = (arr, m) => {
    let size = Math.ceil(arr.length / m)
    for (let i = 0; i < m; i++) {
        const temp = [];
        for (let j = 0; j < size; j++) {
            if (!arr.length) {
                return;
            }
            const index = getRandom(arr);
            console.log(index);
            temp.push(arr[index]);
            arr.splice(index, 1);

        }
        result.push(temp);
    }



    if (arr.length) {
        result[result.length - 1] = result[result.length - 1].concat(arr);
    }
}

const getRandom = arr => Math.floor(Math.random() * (arr.length - 1));;

randomArr([1,2,3,4,5], 2);

console.log(result);


//评测题目: 讲一个 [1,2,3...n] 的数组，随机、尽量平均的分成 m 组，m 跟一维数组为参数，
//输出为分好组的 2 维数组，
//举例：[1,2,3,4,5] 随机尽量平均的分成 2 组，那么其中一种可能的结果为 [[1,3],[2,4,5]]

const result = [];
const randomArr = (arr, m) => {
    let size = parseInt(arr.length / m, 10)
    for (let i = 0; i < m; i++) {
        const temp = [];
        for (let i = 0; i < size; i++) {
            const index = getRandom(arr);
            temp.push(arr[index]);
            arr.splice(index, 1);
        }
        result.push(temp);
    }

    if (arr.length) {
        result[result.length - 1] = result[result.length - 1].concat(arr);
    }
}

const getRandom = arr => Math.floor(Math.random() * (arr.length - 1));;

randomArr([1,2,3,4,5], 2);

console.log(result);