// You should implement your task here.

module.exports = function towelSort(matrix) {
    const arr = [];
    if (arguments.length == 0 || matrix.length == 0) {
        return arr;
    }
    return matrix.reduce((acc, cur, i) => {
        cur.sort((a, b) => (!(i % 2) ? a - b : b - a)).map((e) => acc.push(e));
        return acc;
    }, []);
};
