/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * 
 * @param {*} l1 
 * @param {*} l2 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    const addSingleNode = function (l1, l2, up = 0) {
        const l3 = {};
        const tempValue = (l1.val || 0) + (l2.val || 0) + up;
    
        l3.val = tempValue % 10;
        up = parseInt(tempValue / 10, 10);
    
        if (l1.next || l2.next) {
            l3.next = addSingleNode(l1.next || {}, l2.next || {}, up);
            return l3;
        }
    
        if (up > 0) {
            l3.next = {val: up, next: null};
        }
    
        return l3;
    };

    const l3 = addSingleNode(l1, l2);
    return l3;
};

const l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3
        }
    }
};

const l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4
        }
    }
};
const value = addTwoNumbers(l1, l2);
console.log(value);
