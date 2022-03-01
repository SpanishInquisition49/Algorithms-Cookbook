"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bogoSort = void 0;
var misc_1 = require("../_Miscellaneous/misc");
function bogoSort(a) {
    var sorted = false;
    while (!sorted) {
        var i = (0, misc_1.getRandomInt)(a.length);
        var j = (0, misc_1.getRandomInt)(a.length);
        (0, misc_1.swapInsideArray)(a, i, j);
        sorted = (0, misc_1.isSorted)(a);
    }
}
exports.bogoSort = bogoSort;
//# sourceMappingURL=BogoSort.js.map