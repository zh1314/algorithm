const chapterTree = {
    name: '总章节',
    children: [
    {
    name: '章节一',
    children: [
    {
    name: '第一节',
    children: [{ name: '第一小节' }, { name: '第二小节' }]
    },
    { name: '第二节' }
    ]
    },
    { name: '章节二', children: [{ name: '第三节' }, { name: '第四节' }] }
    ]
    };

// [
//     '总章节',
//     '(1)章节一',
//     '(1.1)第一节',
//     '(1.1.1)第一小节',
//     '(1.1.2)第二小节',
//     '(1.2)第二节',
//     '(2)章节二',
//     '(2.1)第三节',
//     '(2.2)第四节'
// ];

const result = [];
const series = (tree, prefix, index) => {
    if (!!index) {
        prefix = `${prefix}.${index}`;
    }
    if (prefix.startsWith('.')) {
        prefix = prefix.slice(1);
        prefix = `(${prefix}`;
    }
    if (prefix) {
        result.push(`${prefix})${tree.name}`);
    } else {
        result.push(`${tree.name}`);
    }

    if (tree.children) {
        for (let i = 0; i < tree.children.length; i++) {
            series(tree.children[i], prefix, i + 1);
        }
    }
};

series(chapterTree, '');
console.log(result);