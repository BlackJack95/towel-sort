
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const arr = [];
    if(!matrix) return arr;
    matrix.forEach((element, i) => {
        if(i % 2 == 0) {
            arr.push(...element);
        } else {
            arr.push(...(element.reverse()));
        }
    });
    return arr;
}
