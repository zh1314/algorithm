// var sortList = function(head) {

// };

const var1 = {val: 4, next: {val: 2, next: {val: 1, next: {val: 3, next: null}}}};

const sortList = head => {
    let result = null;
    while (head) {
        result = insertVal(result, head.val)
        head = head.next;
    }
    return result;
};

const insertVal = (node, v) => {
    if (!node || node.val > v) {
        return {val: v, next: node};
    }
    if (!node.next) {
        node.next = {val: v, next: null}
        return node;
    }
    if (node && node.val < v && node.next && node.next.val > v) {
        node.next = {val: v, next: node.next};
        return node;
    }
    node.next = insertVal(node.next, v);
    return node;
}

const result = sortList(var1);
console.log(JSON.stringify(result));
