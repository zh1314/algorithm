// * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
//  *
//  *  示例1：
//  *
//  *  输入：1->2->4, 1->3->4
//  *  输出：1->1->2->3->4->4
//  *  限制：
//  *
//  *  0 <= 链表长度 <= 1000

// public class ListNode {
//     int val;
//     ListNode next;

//     ListNode(int x) {
//         val = x;
//     }
// }

const var1 = {val: 1, next: {val: 2, next: {val: 4}}};
const var2 = {val: 1, next: {val: 3, next: {val: 4}}};

// const var1 = null;
// const var2 = null;

const merge = (v1, v2) => {
    const result = {};
    let temp = result;
    while (v1 && v2 && v1.val && v2.val) {
        if (v1.val < v2.val) {
            temp.val = v1.val;
            v1 = v1.next || {};
        } else {
            temp.val = v2.val;
            v2 = v2.next || {};
        }
        temp.next = {};
        temp = temp.next;
    }
    if (v1 && v1.val != undefined) {
        temp.val = v1.val;
        temp.next = v1.next;
    }
    if (v2 && v2.val != undefined) {
        temp.val = v2.val;
        temp.next = v2.next;
    }

    return result;
}
const result = merge(var1, var2);
console.log(JSON.stringify(result));