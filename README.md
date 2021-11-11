# Algorithms Cookbook
A collection of algorithms studied for University

## Table of contents
* [Binary Search](#binary-search)
* [Fun With Trees](#fun-with-trees)
* [Hanoi Tower](#hanoi-tower)
* [Insertion Sort](#insertion-sort)
* [Linear Search](#linear-search)
* [Merge Sort](#merge-sort)
* [MinMax Algorithm](#minmax-algorithm)
* [Permutations](#permutations)
* [Quick Sort](#quick-sort)
* [Selection Sort](#selection-sort)

## Binary Search O(log(n))
The Binary Search is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.
## Fun With Trees
tree.js is a collection of common function used for tree manipulation:
* Map(t,f): apply a function (f) to every node of the tree (t) Return nothing
* Reduce(t,f): The method executes a user-supplied “reducer” callback function (f) on each node of the tree perhaps the easiest-to-understand case for reduce() is to return the sum of all the values of nodes in a tree.
* Max(t): Return the greatest value helded by a node inside the tree (t)
* Min(t): Return the least value helded by a node inside the tree (t)
* Search(t,v): Return true if the value v is helded by at least a node inside the tree (t) false otherwise
* PathFromRootToValue(t, v): Return an array containing the path from the root to the node that is holding the value v or an empty array if the value v isn't in the tree
* PathFromXtoY(t,x,y): Return an array containing the path from two generic node (x,y) inside the tree or an empty array if x or y aren't inside the tree
* PrintPath(path): Print the path-array generated by the PathFromRootToValue or PathFromXtoY
## Hanoi Tower
The Tower of Hanoi is a mathematical game or puzzle consisting of three rods and a number of disks of various diameters, which can slide onto any rod. The puzzle begins with the disks stacked on one rod in order of decreasing size, the smallest at the top, thus approximating a conical shape. The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:

Only one disk may be moved at a time.
Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
No disk may be placed on top of a disk that is smaller than it.
With 3 disks, the puzzle can be solved in 7 moves. The minimal number of moves required to solve a Tower of Hanoi puzzle is 2^n − 1, where n is the number of disks.

## Insertion Sort O(n^2)
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

## Linear Search O(n)
A linear search sequentially checks each element of the list until it finds an element that matches the target value. If the algorithm reaches the end of the list, the search terminates unsuccessfully.
### Correctness of Linear Search
#### Loop Invariant:
For each index *k* in the subarray A' [0..i) => A'[k] != *v*
Informally: the subarray A' [0..i) doesn't contain the element *v*
#### Intialization:
*i* = 0 => A'[0..0) => ⍉ => for each *k* index A'[k] != *v* and it's true because the empty array does not contain any elements
#### Maintenance:
For each index *k* in the subarray A' [0..i) A'[k] != *v* and A[i] != *v* <==> for each *k* in the subarray A'[0..i+1) A'[k] != *v*
#### Termination:
The for loop may end for two reasons:
* Return *i* if A[i] == *v*
* *i* = A.length (last iteration of the for loop), the loop invariant is:
for each index *k* in the subarray A' [0..A.length) A[k] != *v*, but the subarray A'[0..A.length) is the entire array A, so the value *v* is not contained in the array and the value nil is returned.   
## Merge Sort 𝚯(nlog(n))
Conceptually, a merge sort works as follows:

* Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
* Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
## MinMax Algorithm
is a decision rule used in artificial intelligence, decision theory, game theory, statistics, and philosophy for minimizing the possible loss for a worst case (maximum loss) scenario. When dealing with gains, it is referred to as "maximin"—to maximize the minimum gain. Originally formulated for n-player zero-sum game theory, covering both the cases where players take alternate moves and those where they make simultaneous moves, it has also been extended to more complex games and to general decision-making in the presence of uncertainty.
## Permutations
Permutations.js contains some functions wich use permutations or used to produce permutations:
* isPermutation(firstString, secondString): Return true if the secondString is a possible permutation of firstString, false otherwise
* findPermutations(s): Return an array containing all possible permutations of the string s
* isVampire(n): Return true if the number n is a "[vampire number](https://en.wikipedia.org/wiki/Vampire_number)", false otherwise
## Quick Sort 𝚯(n^2)
### expected cost: 𝚯(nlog(n)), worst case cost: 𝚯(n^2)
Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort. The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting.

Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined. Efficient implementations of Quicksort are not a stable sort, meaning that the relative order of equal sort items is not preserved.
## Selection Sort O(n^2)
Selection sort divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.


