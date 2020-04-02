/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const temp = {};
    for (let num of nums) {
        temp[num] = (temp[num] || 0) + 1;

        if (temp[num] > nums.length / 2) {
            return num;
        }
    }
};

var majorityElement1 = function (nums) {
    nums = nums.sort();
    return nums[parseInt(nums.length / 2, 10)];
};

const value = majorityElement1([3,2,3,3,1]);
console.log(value);