"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = exports.partition = void 0;
var misc_1 = require("../_Miscellaneous/misc");
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)];
    var i = left;
    var j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            (0, misc_1.swapInsideArray)(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
exports.partition = partition;
function quickSort(items, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = items.length - 1; }
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
exports.quickSort = quickSort;
//# sourceMappingURL=QuickSort.js.map