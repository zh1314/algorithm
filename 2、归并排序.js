const sort = datas => {
    const centerIndex = Math.round(datas.length / 2);
    const leftArr = datas.slice(0, centerIndex - 1);
    const rightArr = datas.slice(centerIndex, datas.length);
    guibingSort(leftArr, rightArr);
};

const guibingSort = arr => {
    const centerIndex = Math.round(datas.length / 2);
    let i = 0;
    let j = 0;
    let k = centerIndex;

    guibingSort(arr.slice(j, k));
    guibingSort(arr.slice(k));

    const result = [];
    while (j < centerIndex && k < arr.length) {
        if (arr[j] < arr[k]) {
            result[i] = arr[j];
            j ++;
        } else {
            arr[i] = arr[k];
            k ++;
        }
        i ++;
    }

    if (j == centerIndex) {
        result = result.concat(arr.slice(k));
    }

    if (k == rightArr.length) {
        result = result.concat(arr.slice(j, centerIndex));
    }

    return result;
}
