"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSearch = exports.runNotInPlaceSort = exports.runSort = exports.randomValueInsideArray = exports.randomArray = exports.getRandomInt = exports.minValue = exports.maxValue = exports.isSorted = exports.swapInsideArray = void 0;
function swapInsideArray(a, i, j) {
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}
exports.swapInsideArray = swapInsideArray;
function isSorted(a) {
    for (var i = 0; i < a.length - 1; i++)
        if (a[i] > a[i + 1])
            return false;
    return true;
}
exports.isSorted = isSorted;
function maxValue(a) {
    var max = a[0];
    for (var i = 1; i < a.length; i++)
        max = a[i] > max ? a[i] : max;
    return max;
}
exports.maxValue = maxValue;
function minValue(a) {
    var min = a[0];
    for (var i = 1; i < a.length; i++)
        min = a[i] < min ? a[i] : min;
    return min;
}
exports.minValue = minValue;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
exports.getRandomInt = getRandomInt;
function randomArray(n, m) {
    var res = [];
    for (var i = 0; i < n; i++)
        res.push(getRandomInt(m));
    return res;
}
exports.randomArray = randomArray;
function randomValueInsideArray(a) {
    return a[getRandomInt(a.length)];
}
exports.randomValueInsideArray = randomValueInsideArray;
function runSort(n, f, m, verbose) {
    if (m === void 0) { m = n; }
    if (verbose === void 0) { verbose = false; }
    var arr = randomArray(n, m);
    if (verbose)
        console.log(arr);
    var startDate = new Date();
    f(arr);
    var endDate = new Date();
    if (verbose)
        console.log(arr);
    var ms = endDate.getTime() - startDate.getTime();
    if (isSorted(arr)) {
        console.log("Sorted ".concat(n, " elements in ~").concat(ms, "ms"));
        return ms;
    }
    else
        console.log("Sort Failed");
    return -1;
}
exports.runSort = runSort;
function runNotInPlaceSort(n, f, m, verbose) {
    if (m === void 0) { m = n; }
    if (verbose === void 0) { verbose = false; }
    var arr = randomArray(n, m);
    if (verbose)
        console.log(arr);
    var startDate = new Date();
    arr = f(arr);
    var endDate = new Date();
    if (verbose)
        console.log(arr);
    var ms = endDate.getTime() - startDate.getTime();
    if (isSorted(arr)) {
        console.log("Sorted ".concat(n, " elements in ~").concat(ms, "ms"));
        return ms;
    }
    else
        console.log("Sort Failed");
    return -1;
}
exports.runNotInPlaceSort = runNotInPlaceSort;
function runSearch(a, k, f) {
    var startDate = new Date();
    var found = f(a, k);
    var endDate = new Date();
    var ms = endDate.getTime() - startDate.getTime();
    console.log("Searched for key:".concat(k, " inside ").concat(a.length, " elements in ~").concat(ms, " ms | key was ").concat(found ? "found in index:" + found : "not found"));
    return ms;
}
exports.runSearch = runSearch;
//# sourceMappingURL=misc.js.map