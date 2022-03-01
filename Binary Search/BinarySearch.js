"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
function binarySearch(a, key, i, end) {
    if (i === void 0) { i = 0; }
    if (end === void 0) { end = a.length - 1; }
    if (i >= end)
        return a[end] == key ? i : -1;
    var half = Math.floor((i + end) / 2);
    if (a[half] == key)
        return half;
    if (a[half] > key)
        return binarySearch(a, key, 0, half);
    else
        return binarySearch(a, key, half + 1, end);
}
exports.binarySearch = binarySearch;
//# sourceMappingURL=BinarySearch.js.map