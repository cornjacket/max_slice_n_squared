# max_slice_n_squared
Find the max sum slice of an array. Simple algorithm with Big O of n squared to improve on previous n cubed algorithm.

Try it out at https://jsbin.com/zakopa/1/edit?js,console

Write a max_slice function that takes an array of integers as input and returns the slice with the largest sum of elements.

# some examples:
[1,2,3] => [1,2,3]
[1,-2,3] => [3]
[1,-2,3, 4] => [3, 4]
[-1,-2,-3] => [-1]

Walk-thru

The algorithm uses a brute force double iteration in order to visit every starting element of the input array and every potential slice end point and calculates the max sum for every possible slice.

The algorithm starts by setting the max_sum to be the first element of the input array.

The outer loop visits each element of the input array as a starting point for a potential slice. The inner loop visits each starting point as well as all the elements following the starting point as an ending point for a potential slice. This creates all possible slices. 

Where as the n cubed algoritm simply calculates the max sum by iterating from the starting point to the ending point of the slice, this algorithm takes advantage of the fact that the sum of the next inner slice can be calculated by adding the next new element to the previous slice sum. This prevents a lot of duplication of addition. 

Then the algoritm compares sum of the new slice (running_max_sum) with the current max_sum.

The outer and inner loops create an n squared timing function, and since each slice sum is determined by a running sum, the entire algorithm also run at n squared. This is still not an efficient algorithm.