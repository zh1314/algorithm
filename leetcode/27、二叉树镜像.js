// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

// 例如输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 镜像输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const tree = {val: 4, left: {val: 7, left: {val: 9}, right: 6}, right: {val: 2, left: {val: 3}, right: {val: 1}}};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// var mirrorTree = function(root) {
//     if (!root) {
//         return root;
//     }
//     const leftNode = mirrorTree(root.left);
//     const rightNode = mirrorTree(root.right);
//     root.right = leftNode;
//     root.left = rightNode;
//     return root;
// };

// mirrorTree(tree);

// console.log(tree);


var mirrorTree = function(root) {
    while (root.left || root.right) {
        const temp = root.left;
        root.left = root.right;
        root.right = temp;

    }
};

mirrorTree(tree);

console.log(tree);