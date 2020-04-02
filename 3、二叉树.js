// * 给定一棵二叉树，你需要计算它的最长路径。一棵二叉树的最长路径是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。
// *
// * 示例 :
// * 给定二叉树
// *
// *           1
// *          / \
// *         2   3
// *        / \
// *       4   5
// * 返回 4, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。


// int ans = 1;

// public int diameterOfBinaryTree(TreeNode root) {
//     depthMaxLength(root);
//     return ans;
// }

// private int depthMaxLength(TreeNode node) {
//     if (node == null) {
//         return 0;
//     }
//     int l_maxlength = depthMaxLength(node.left);
//     int r_maxlength = depthMaxLength(node.right);
//     ans = Math.max(ans, l_maxlength + r_maxlength + 1);
//     return Math.max(l_maxlength, r_maxlength) + 1;

// }

const treeNode = {
    val: 1,
    left: {left: {val: 4}, val: 2, right: {val: 5}},
    right: {val: 3}
};

let max = 0;
const getMaxRoute = tree => {
    let leftLength = 1;
    let rightLength = 1;
    if (tree.left) {
        leftLength = getMaxRoute(tree.left);
    }
    if (tree.right) {
        rightLength = getMaxRoute(tree.right);
    }

    let tempLength = leftLength + rightLength + 1;
    max = Math.max(max, tempLength);
    return Math.max(leftLength, rightLength) + 1;
}

console.log(getMaxRoute(treeNode));


const test = {a: 'test', b: {c: 'test', d: 'test'}};
const {a, b:{c, d}}= test