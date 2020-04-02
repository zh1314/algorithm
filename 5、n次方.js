const getNum = num => {
    let i = 0;
    while (num > Math.pow(2, i)) {
        i++
    }
    return Math.pow(2, i);
}