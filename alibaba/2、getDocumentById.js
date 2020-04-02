// 2. 实现一个 getByElementId 方法
// 给定一个 document 节点，找到其子节点中符合目标 ID 的节点
// 允许用递归实现
// function getByElementId(el: HTMLElement, id: strirng): HTMLElement | null {
//   // write your code
// }

const getByElementId = (el, id) => {

    if (!el) {
        return;
    }

    const targetElement = el && el.getElementById(id);
    if (targetElement) {
        return targetElement;
    }

    const children = el.children;

    if (children) {
        for (let node of children) {
            const result = getByElementId(node, id);

            if (result) {
                return result;
            }
        }
    }
}