# Concepts

-   **Data structure** is a way to **store** and **organize** data.\_
-   `Linear data structure:` Data structure in which data elements are **arranged sequentially** or **linearly**,(
    **array**, **stack**, **queue**, **linked list,** etc.)
    -   **Static data structure:** has a **fixed** memory **size**. It is **easier** to **access** the **elements** in a **static** data structure. _An example of this data structure is an array._
    -   **Dynamic data structure:** the **size** is **not fixed**. It can be **randomly updated** during the **runtime** which may be considered **efficient** concerning the **memory** (space) **complexity** of the code. _Examples of this data structure are queue, stack, etc._
-   `Non-linear data structure:` Data structures where data elements are **not placed sequentially** or **linearly** that we **can’t traverse** all the elements in a **single run only**.(trees and graphs)

## Java Collection Framework

> Là một tập hợp các class và interface dùng để hỗ trợ trong việc thao tác lưu trữ và quản lý nhóm đối tượng dữ liệu.

-   **Mục đính:**
    -   Lưu trữ và quản lý các đối tượng.
    -   Tối ưu hóa hiệu suất và tiết kiệm thời gian.
    -   Tăng khả năng tái sử dụng của mã nguồn.
-   **Có 2 loại cơ bản của Java Collections:**
    -   **Collection Interface**: List, Set, và Queue.
    -   **Map Interface**: hỗ trợ các tính năng như lưu trữ, truy xuất, xóa và tìm kiếm các phần tử theo key. TreeMap và HashMap và LinkedHashMap.
        <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2hgLstie4gxpXUUzgAkGgg.png">
-   `java.util.Collections` là một lớp tiện ích cung cấp các phương thức hỗ trợ thao tác trên các lớp Collection ( sắp xếp, đảo ngược, tìm kiếm, thay đổi, sao chép các phần tử)
-   `Iterator` hoặc `ListIterator` giúp duyệt và thao tác phần tử trên các lớp Collection.

### List interface

-   `ArrayList`: dễ get hoặc update value element. Kích thước tăng 50% so với trước đó nếu đầy.
    -   💔 Khi xóa/thêm phần tử sẽ dịch chuyển các phần tử
-   `LinkedList`: dễ insert/delete. Có thể thao tác 2 đầu do sử dụng Doubly Linked List.
    -   💔 Không tối ưu trong việc truy xuất phần tử, có thể gây ra vấn đề bộ nhớ cấp phát

### Set interface

> Cách hoạt động: dùng map để kiểm tra tần suất phần tử khi insert

-   `HashSet`: truy xuất phần tử nhanh, không duy trì thứ tự khi insert.
-   `LinkedHashSet`: duy trì thứ tự thêm vào, truy xuất, thêm và xóa rất nhanh.
    -   💔 Tốn bộ nhớ, giảm hiệu suất xóa/sửa khi danh sách lớn. Không hỗ trợ sort
-   `TreeSet`: Lưu trữ tăng/giảm dần, truy xuất nhanh
    -   💔 Tốn bộ nhớ hơn tất cả. Thêm xóa phức tạp hơn

### Queue interface

-   `ArrayQueue`: chèn, xóa, thêm (`O(1)`)
    -   💔 Không thao tác được với index
-   `PriorityQueue`: lưu phần tử có độ ưu tiên, thằng nào cao lấy tra trước. Thêm hoặc xóa nhanh (`O(log n)`)
    -   💔 Không cung cấp phương thức kiểm tra phần tử, không phù hợp để so sánh

### Map interface

-   `HashMap`: thêm, xóa, sửa (`O(1)`, khi không có collision), không duy trì thứ tự khi insert.
-   `LinkedHashMap`: duy trì thứ tự thêm vào, truy xuất, thêm và xoá (`O(1)`). Không phù hợp sort theo key
-   `TreeMap`: Lưu trữ tăng dần theo key

##### How does Map work?

-   Map sử dụng array để lưu các mã hash của key
-   Trong từng mã hash có thể có một linkedList để lưu các phần tử có cùng mã hash (xử lí collision)
-   Khi lấy 1 phần tử, đầu tiên nó sẽ lấy mã hash từ hàm hashCode() của key và ánh xạ vào array, sau đó so sánh giá trị key bằng hàm equals
    <img src="https://topdev.vn/blog/wp-content/uploads/2024/03/lop-HashMap-trong-Java-4.png">

## Java Stream

> Cung cấp một cách tiếp cận mới để xử lý các collection mà không cần phải thực hiện các vòng lặp lồng nhau, giúp cho mã trở nên gọn gàng và dễ hiểu hơn..

> Lớp `Collectors` cung cấp các tiện ích cho phép dễ dàng thu thập và xử lý các Stream thành các kiểu dữ liệu khác nhau như List, Collection hay Map.

-   **Stream** không lưu trữ các phần tử; nó chỉ xử lý dữ liệu từ nguồn (như collection, array) mà không làm thay đổi nguồn ban đầu.

### Stream API bao gồm 2 thao tác:

-   **Intermediate Operations**: Những thao tác này trả về một Stream mới và cho phép chaining nhiều thao tác với nhau, nhưng không thực sự thực hiện cho đến khi gặp một thao tác kết thúc. Một số thao tác trung gian phổ biến:
    -   **`filter(Predicate<T> predicate)`**: Lọc các phần tử thỏa mãn điều kiện.
    -   **`map(Function<T, R> mapper)`**: Biến đổi mỗi phần tử thành một giá trị khác.
    -   **`sorted()`, `sorted(Comparator<T> comparator)`**: Sắp xếp các phần tử.
    -   **`distinct()`**: Loại bỏ các phần tử trùng lặp.
-   **Terminal Operations**: Những thao tác này kết thúc stream và thực hiện các phép tính trên chuỗi dữ liệu. Một số thao tác kết thúc phổ biến:
    -   `forEach(Consumer<T> action)`: Thực hiện một hành động trên mỗi phần tử.
    -   `collect(Collector<T, A, R> collector)`: Thu thập các phần tử vào một collection khác.
    -   `reduce(BinaryOperator<T> accumulator)`: Giảm các phần tử thành một giá trị đơn.
    -   `count()`, `min()`, `max()`, `findAny()`, `findFirst()`, `anyMatch(Predicate<T> predicate)`, `allMatch(Predicate<T> predicate)`, `noneMatch(Predicate<T> predicate)`.

3. Ví dụ về Stream API

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
public class StreamExample {
public static void main(String[] args) {
    List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David", "Edward");
    // Lọc và chuyển đổi các tên thành chữ in hoa
    List<String> filteredNames = names.stream()
        .filter(name -> name.startsWith("A"))
        .map(String::toUpperCase)
        .collect(Collectors.toList());
    System.out.println(filteredNames); // Output: [ALICE]
    // Tính tổng độ dài các tên
    int totalLength = names.stream()
        .mapToInt(String::length)
        .sum();
    System.out.println(totalLength); // Output: 25
    }
}
```
