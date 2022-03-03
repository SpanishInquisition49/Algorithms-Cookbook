"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pidgeonHoleSort = void 0;
var misc_1 = require("../_Miscellaneous/misc");
function pidgeonHoleSort(a) {
    var max = (0, misc_1.maxValue)(a);
    var min = (0, misc_1.minValue)(a);
    var holes = [];
    for (var i_1 = 0; i_1 < max - min; i_1++)
        holes.push([]);
    for (var i_2 = 0; i_2 < a.length; i_2++) {
        if (holes[a[i_2] - min] == undefined)
            holes[a[i_2] - min] = [];
        holes[a[i_2] - min].push(a[i_2]);
    }
    var i = 0;
    for (var _i = 0, holes_1 = holes; _i < holes_1.length; _i++) {
        var hole = holes_1[_i];
        for (var _a = 0, hole_1 = hole; _a < hole_1.length; _a++) {
            var x = hole_1[_a];
            a[i] = x;
            i++;
        }
    }
}
exports.pidgeonHoleSort = pidgeonHoleSort;
//# sourceMappingURL=PidgeonHoleSort.js.map