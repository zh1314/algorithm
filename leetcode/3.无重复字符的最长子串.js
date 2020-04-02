/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let strArr = [];
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const sameIndex = strArr.indexOf(s[i]);
        strArr.push(s[i]);
        if (sameIndex < 0) {
            maxLength = Math.max(strArr.length, maxLength);
            continue;
        }
        strArr = strArr.splice(sameIndex + 1);
    }

    return maxLength;
};

const value = lengthOfLongestSubstring('dvdf');
console.log(value);
