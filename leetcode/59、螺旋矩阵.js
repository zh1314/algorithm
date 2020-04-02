// 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

// 示例:

// 输入: 3
// 输出:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]


// [0,0],[0,1][,0,2]
// [1,0],[1,1],[1,2]
// [2,0],[2,1],[2,2]

//[1,2,3,4]
//[12,13,14,5]
//[11,16,15,6]
//[10,9,8,7]

// [0,0][0,1][0,2][0,3]
// [1,0][1,1][1,2][1,3]
// [2,0][2,1][2,2][2,3]
// [3,0][3,1][3,2][3,3]

//[1,2,3,4,5]
//[16,17,18,19,6]
//[15,24,25,20,7]
//[14,23,22,21,8]
//[13,12,11,10,9]


//round1 [0,1]
//round2 [1,2]

console.log(Math.pow(3, 2));

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const result = [];
    let x = 0;
    let y = 0;
    let round = 0;
    for (let v = 0; v < Math.pow(n, 2); v++) {
        if (!result[x]) {
            result[x] = [];
        }
        result[x][y] = v + 1;
        //左 -》 右
        if ((y!=n-1-round) && (x===round)) {
            y++;
        }
        //上 -》下
        else if (y === n-1-round && (x !== n-1-round)) {
            x++;
        }
        //右 -》左
        else if (x === n-1-round && y !== round) {
            y--;
        }
        //下 -》上
        else if (y==round && x!=round+1) {
            x--;
        }

        if (y === round && x === round +1) {
            round++;
        }
    }
    return result;
};

const result = generateMatrix(3);
console.log(result);