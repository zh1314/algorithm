// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 示例:

// 输入:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 7
// 解释: 因为路径 1→3→1→1→1 的总和最小。



/**
 * @param {number[][]} grid
 * @return {number}
 */
// let value;
// const minPathSum = (grid) => {
//     calculateResult(grid, 0, 0, grid[0][0]);
//     return value;
// };

// const calculateResult = (grid, x, y, v) => {
//     if (!grid[x + 1] && !grid[y + 1]) {
//         if (!value) {
//             value = v;
//             return;
//         }
//         value = Math.min(value, v);
//         return;
//     }
//     if (!(grid[x] && grid[x][y])) {
//         return;
//     }
//     v += grid[x][y];
//     calculateResult(grid, x + 1, y, v);
//     calculateResult(grid, x, y + 1, v);
// }


const minPathSum = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 1; i < n; i++) grid[0][i] += grid[0][i - 1];
    for (let i = 1; i < m; i++) grid[i][0] += grid[i - 1][0];
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }
    return grid[m - 1][n - 1];
};

const data = [
      [1,3,1],
      [1,5,1],
      [4,2,1]
    ];
console.log(minPathSum(data));