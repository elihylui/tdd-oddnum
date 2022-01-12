const checkOddNum = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            count++;
        }
    }
    return count;
};

module.exports = { checkOddNum };