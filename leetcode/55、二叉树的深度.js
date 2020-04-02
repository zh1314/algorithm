// 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

// 例如：

// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//  const tree = {val: 3, left: {val: 9, left: null, right: null}, right: {val: 20, left: {val: 15}, right: {val: 7}}};

/**
 * @param {TreeNode} root
 * @return {number}
 */
// let result = 0;
// const maxDepth = (root, depth) => {
//     root.val && (depth++);
//     depth > result && (result = depth);
//     root.left && maxDepth(root.left, depth);
//     root.right && maxDepth(root.right, depth);
// };

// maxDepth(tree, 0);
// console.log(result);

const tree = {val: null, left: {val: null}, right: {val: null}};

let result = 0;
var maxDepth = function(root) {
    getMaxDepth(root, 0);
    return result;
};

const getMaxDepth = (root, depth) => {
    if (!root) {
        return;
    }
    root.val && (depth++);
    depth > result && (result = depth);
    root.left && getMaxDepth(root.left, depth);
    root.right && getMaxDepth(root.right, depth);
}

maxDepth(tree);
console.log(result);