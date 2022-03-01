"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = exports.mergeSort = void 0;
function mergeSort(array) {
    var half = Math.floor(array.length / 2);
    if (array.length < 2)
        return array;
    var left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}
exports.mergeSort = mergeSort;
function merge(left, right) {
    var arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0])
            arr.push(left.shift());
        else
            arr.push(right.shift());
    }
    return __spreadArray(__spreadArray(__spreadArray([], arr, true), left, true), right, true);
}
exports.merge = merge;
//# sourceMappingURL=MergeSort.js.map