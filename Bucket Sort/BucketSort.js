"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucketSort = void 0;
var misc_js_1 = require("../_Miscellaneous/misc.js");
var InsertionSort_js_1 = require("../Insertion Sort/InsertionSort.js");
function bucketSort(a) {
    var n = Math.ceil((0, misc_js_1.maxValue)(a) / 10);
    var f = function (x) {
        return Math.ceil(x / 10);
    };
    var buckets = [];
    for (var i_1 = 0; i_1 < n; i_1++)
        buckets.push([]);
    for (var i_2 = 0; i_2 < a.length; i_2++) {
        if (buckets[f(a[i_2])] == undefined)
            buckets[f(a[i_2])] = [];
        buckets[f(a[i_2])].push(a[i_2]);
    }
    var i = 0;
    for (var _i = 0, buckets_1 = buckets; _i < buckets_1.length; _i++) {
        var bucket = buckets_1[_i];
        (0, InsertionSort_js_1.insertionSort)(bucket);
        for (var _a = 0, bucket_1 = bucket; _a < bucket_1.length; _a++) {
            var x = bucket_1[_a];
            a[i] = x;
            i++;
        }
    }
}
exports.bucketSort = bucketSort;
//# sourceMappingURL=BucketSort.js.map