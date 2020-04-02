const var1 = {val: 1, next: {val: 2, next: {val: 4}}};

// const reverseList = (head) => {
//     let result = null;
//     while (head) {
//         const temp = {val: head.val, next: result};
//         result = temp;
//         head = head.next;
//     }
//     return result;
// };

let result = {};
const reverseList = (head, node) => {
    const temp = {val: head.val, next: node}
    result = temp;
    if (head.next) {
        reverseList(head.next, temp);
    }
};

reverseList(var1, null);
console.log(result);