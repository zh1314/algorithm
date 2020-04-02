const getSumArr = (arr, sum) => {
    let i = 0;
    let j = 1;
    while (i<j && j< arr.length) {
        if (arr[i] + arr[j] === sum) {
            break;
        }
        if (arr[i] + arr[j] > sum || ( j === (arr.length-1) )) {
            i++;
            j=i+1;
            continue;
        }
        j++;
    }
    console.log(arr[i], arr[j]);
}

getSumArr([1,2,3,4,6,8], 10);