module.exports = function reverse (n) {
    var arr = Math.abs(n).toString().split("");
    var reversed = arr.reverse().join("");
    return +reversed;
}
