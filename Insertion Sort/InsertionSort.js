"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = void 0;
function insertionSort(a) {
    for (var j = 1; j < a.length; j++) {
        var key = a[j];
        var i = j - 1;
        while (i >= 0 && a[i] > key) {
            a[i + 1] = a[i];
            i--;
        }
        a[i + 1] = key;
    }
}
exports.insertionSort = insertionSort;
//# sourceMappingURL=InsertionSort.js.map