"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countingSort = void 0;
var misc_js_1 = require("../_Miscellaneous/misc.js");
function countingSort(a) {
    var max = (0, misc_js_1.maxValue)(a);
    var min = (0, misc_js_1.minValue)(a);
    var counter = [];
    for (var i = 0; i <= max - min; i++)
        counter.push(0);
    for (var i = 0; i < a.length; i++)
        counter[a[i] - min] += 1;
    var index = 0;
    for (var countIndex = 0; countIndex < counter.length; countIndex++)
        for (var i = 0; i < counter[countIndex]; i++) {
            a[index] = countIndex + min;
            index++;
        }
}
exports.countingSort = countingSort;
//# sourceMappingURL=CountingSort.js.map