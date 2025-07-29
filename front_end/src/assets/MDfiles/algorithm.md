# Sorting

## Note:

-   `Quick Sort` thường nhanh nhất trong thực tế (do hằng số nhỏ).
-   `Merge Sort` phù hợp cho dữ liệu lớn và cần ổn định.
-   `Insertion Sort` hiệu quả khi dữ liệu gần như đã sắp xếp hoặc kích thước nhỏ.
-   `Heap Sort` không cần thêm bộ nhớ phụ, phù hợp cho hệ thống nhúng.

| Thuật toán    | Time (Best) | Time (Worst) | Space     | Ổn định? | In-place? |
| ------------- | ----------- | ------------ | --------- | -------- | --------- |
| **Bubble**    | O(n)        | O(n^2)       | O(1)      | Có       | Có        |
| **Selection** | O(n^2)      | O(n^2)       | O(1)      | Không    | Có        |
| **Insertion** | O(n)        | O(n^2)       | O(1)      | Có       | Có        |
| **Merge**     | O(nlog n)   | O(nlog n)    | O(n)      | Có       | Không     |
| **Quick**     | O(nlog n)   | O(n^2)       | O(\log n) | Không    | Có        |
| **Heap**      | O(nlog n)   | O(nlog n)    | O(1)      | Không    | Có        |

### Bubble Sort

> Ideal: Perform nested loop, in each loop, swap the current element with the target element in the nested loop if greater.

-   Time complexity:
    -   Best case: O(n) - Sorted array
    -   Worst case: O(n^2)

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

```

### Selection sort

> Ideal: Perform nested loop, in each loop, find the minimum element in the rest of the array and swap it with the current element.

-   Time complexity: O(n^2) - All cases

```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

```

### Insertion Sort

> Ideal: Perform nested loop, in each loop, shift the current element to the correct position before it.

-   Time complexity:
    -   Best case: O(n) - Sorted array
    -   Worst case: O(n^2)

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr
```

### Merge Sort

> Ideal: Divide and Conquer, split array into two halves and sort them recursively. Then merge them.

-   Time complexity: O(nlogn)

```python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]
        merge_sort(L) # The left part of array will be sorted
        merge_sort(R) # The right part of array will be sorted

        # Merge the two sorted halves
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    return arr

```

### Quick Sort

> Ideal: Divide and Conquer, pick a pivot and split array into two halves based on the pivot. Then call each halve recursively.

-   Time complexity:
    -   Best case: O(nlogn)
    -   Worst case: O(n^2) - the pivot is the smallest or largest element in the array.

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr)//2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
```
