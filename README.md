# Algorithms Cookbook
A collection of algorithms studied for University

## Table of contents
* [Hanoi Tower](#hanoi-tower)
* [Insertion Sort](#insertion-sort)
* [Linear Search](#linear-search)
* [Selection Sort](#selection-sort)

## Hanoi Tower
The Tower of Hanoi is a mathematical game or puzzle consisting of three rods and a number of disks of various diameters, which can slide onto any rod. The puzzle begins with the disks stacked on one rod in order of decreasing size, the smallest at the top, thus approximating a conical shape. The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:

Only one disk may be moved at a time.
Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
No disk may be placed on top of a disk that is smaller than it.
With 3 disks, the puzzle can be solved in 7 moves. The minimal number of moves required to solve a Tower of Hanoi puzzle is 2^n − 1, where n is the number of disks.

## Insertion Sort
Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.
Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it. At each array-position, it checks the value there against the largest value in the sorted list (which happens to be next to it, in the previous array-position checked). If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position.
### Correctness of Insertion Sort
at the start of each iteration of the for loop, wich is indexed by j, the subarray A' [0..j-1] is sorted, and the remaining subarray A'' [j+1..n-1] is not sorted.
#### Loop invariant:
at the start of each iteration of the for loop the subarray A' [0..j-1] consists of the elements originally in A [0..j-1], but in sorted order.
#### Initialization:
When j = 1 (first iteration) the subarray A' [0..1] consists of just a single element A[0] and it is sorted.
#### Maintenance:
Informally , the body of the for loop works by moving A[j-1], A[j-2], A[j-3], and so on by one position to the right until it finds the proper position for A[j].
The subarray A' [0..j] then consists of the elements originally in A[0..j], but in sorted order. Incrementing j for the next iteration of the loop then preserves the loop invariant.
#### Termination:
The condition causing the for loop to terminate is that j > a.length (n-1). Because each loop iteration increases j by 1, we must have j = n at that time.
Sobstituting n for j in the wording of loop invariant , we have that the subarray A' [0..n-1] consists of the elements in A [0..n-1], but in sorted order.
Observing that the subarray A' [0..n-1] is the entire array , we conclude that the entire array is sorted, and the algorithm is correct.

## Linear Search
A linear search sequentially checks each element of the list until it finds an element that matches the target value. If the algorithm reaches the end of the list, the search terminates unsuccessfully.

## Selection Sort
Selection sort divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.


