// 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
// 示例 1:

// 给定二叉树 [3,9,20,null,null,15,7]

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回 true 。

// 示例 2:

// 给定二叉树 [1,2,2,3,3,null,null,4,4]

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   5
// 返回 false 。

// 3 4 

var isBalanced = function(root) {
    let ifBalanced = {ifBalanced: true};
    getMaxDepth(root, ifBalanced);
    return ifBalanced.ifBalanced;
};

const getMaxDepth = (root, ifBalanced) => {
    if (!root) {
        return 0;
    }
    const left = getMaxDepth(root.left, ifBalanced);
    const right = getMaxDepth(root.right, ifBalanced);
    if (Math.abs(left - right) > 1) {
        ifBalanced.ifBalanced = false;
    }
    return Math.max(left, right) + 1;
}

