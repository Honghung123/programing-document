# Some common approach to solve problems

## Two pointers

> Use two pointers, one at the beginning of the array, one at the end of the array.

=> Kỹ thuật này thường được áp dụng trong các bài toán sắp xếp, tìm kiếm, hoặc xử lý các mảng `đã được sắp xếp`. Kỹ thuật này thường có độ phức tạp **O(n)**.

#### Some typical problems

1. Check palindrome (mảng đối xứng)
2. Two sum elements with given target sum, in a `sorted array`(`O(n)`), if unsorted array, **sort** array first(final will be `O(nlogn)`)
   Idea: if sum > target, decrease the right pointer. Otherwise, increase the left pointer.
3. Remove duplicates from a sorted array
4. Sort binary array (sắp xếp mảng chỉ 0 và 1 sao cho toàn bộ 0 đứng trước 1)
    - Idea: swap value and shift the pointer.
5. Find the max area of two columns.
    - Idea: shift the pointer which is less than the other pointer.

## Sliding Window

> Like two pointers, using two pointers but both are at the beginning of the array. For each iteration of the outer loop, using while loop to move the right pointer to the right if it still meets the condition.

=> Kỹ thuật này thường được sử dụng để tối ưu hóa độ phức tạp từ O(n²) xuống O(n), khi chúng ta chỉ cần duyệt qua mảng hoặc chuỗi một lần bằng cách sử dụng hai con trỏ tạo thành một "cửa sổ trượt" (sliding window).

#### Some typical problems

1. Find the largest/smallest sum of a subarray of size k
    - Idea: Calcute the sum of the first k elements, then add the next element and subtract the first element of the window.
2. Find the longest substring without repeating characters
    - Idea: Use set to store elements in the window, using while loop to remove the current element if it is in the set and increase the left pointer.
3. Find the shortest subarray with sum at least k.
    - Idea: For each iteration of the outer loop, sum the current element, use while loop with condition sum > k to store the shortest subarray, subtract the left element and increase the left pointer.
4. Find the longest substring with at most k distinct characters
    - Idea: Use map to store the frequency of each character in the window, using while loop with condition map.size() > k to increase the left pointer and increase the element at left index still the frequency of the current element is zero, than remove it;
