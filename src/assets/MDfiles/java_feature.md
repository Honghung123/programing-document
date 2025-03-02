## **Java 8 (2014) – LTS**

-   **Lambda Expressions**: Hỗ trợ lập trình hàm.
    ```java
    (a, b) -> a + b;
    ```
-   **Stream API**: Xử lý dữ liệu dạng chuỗi (filter, map, reduce).
    ```java
    list.stream().filter(x -> x > 5).forEach(System.out::println);
    ```
-   **Optional**: Tránh `NullPointerException`.
-   **Default Methods trong Interface**: Thêm phương thức mặc định vào interface.
-   **New Date/Time API**: `LocalDate`, `LocalTime`, `LocalDateTime`.
-   `Supplier`, `Consumer`, `Function`, `Predicate`, `Comparator`.

## **Java 9 (2017)**

-   **Factory Methods cho Collections**: Khởi tạo collection ngắn gọn.
    ```java
    List<String> list = List.of("A", "B", "C");
    ```
-   **Private Methods trong Interface**: Tách logic chung trong interface.

### **Java 10 (2018)**

-   **Local-Variable Type Inference (`var`)**: Suy luận kiểu dữ liệu tự động.
    ```java
    var list = new ArrayList<String>();
    ```
-   **Garbage Collector Interface**: Tách GC khỏi code base JVM.

### **Java 11 (2018) – LTS**

-   **HTTP Client (Standard)**: Gửi HTTP request qua `java.net.http`.
-   **Single-File Source Execution**: Chạy file `.java` không cần compile.
    ```bash
    java HelloWorld.java
    ```
-   **String Methods Mới**: `isBlank()`, `lines()`, `repeat(n)`.

### **Java 12 (2019)**

-   **Switch Expressions (Preview)**: Viết switch ngắn gọn hơn.
    ```java
    int day = switch (dayCode) {
      case "MON" -> 1;
      default -> 0;
    };
    ```
-   **Shenandoah GC**: GC low-pause-time cho heap lớn.

### **Java 13 (2019)**

-   **Text Blocks (Preview)**: Chuỗi multi-line dễ đọc.
    ```java
    String json = """
      {
        "name": "Java",
        "version": 13
      }
    """;
    ```
-   **Dynamic CDS Archives**: Tối ưu khởi động ứng dụng.

### **Java 14 (2020)**

-   **Pattern Matching cho `instanceof` (Preview)**:
    ```java
    if (obj instanceof String s) {
      System.out.println(s.length());
    }
    ```
-   **Records (Preview)**: Lớp immutable chứa dữ liệu.
    ```java
    record Person(String name, int age) {}
    ```
-   **Switch Expressions (Standard)**: Chính thức hóa từ Java 12.

### **Java 15 (2020)**

-   **Sealed Classes (Preview)**: Giới hạn lớp con kế thừa.
    ```java
    public sealed class Shape permits Circle, Square {}
    ```
-   **Text Blocks (Standard)**: Chính thức hóa từ Java 13.
-   **ZGC & Shenandoah GC**: Nâng cấp hiệu suất.

### **Java 16 (2021)**

-   **Records (Standard)**: Chính thức hóa từ Java 14.
-   **Pattern Matching cho `instanceof` (Standard)**.
-   **Vector API (Incubator)**: Tối ưu xử lý vector (SIMD).

### **Java 17 (2021) – LTS**

-   **Sealed Classes (Standard)**: Chính thức hóa từ Java 15.
-   **Pattern Matching cho Switch (Preview)**:
    ```java
    Object obj = "Hello";
    String result = switch (obj) {
      case Integer i -> "Số: " + i;
      case String s -> "Chuỗi: " + s;
      default -> "Không xác định";
    };
    ```

### **Java 21**

-   `Record pattern`:

```java
record RandomPoint(ColoredPoint cp) {}
public static Color getRamdomPointColor(RandomPoint r) {
    if(r instanceof RandomPoint(ColoredPoint cp)) {
        return cp.color();
    }
    return null;
}
```

-   `String literal`:

```java
String name = "Baeldung";
String welcomeText = STR."Welcome to \{name}";
System.out.println(welcomeText);
```

-   `Virtual Thread`: reducing the effort of developing high-concurrent applications.
-   `Pattern Matching for switch case`:

```java
static double getBalanceWithSwitchPattern(Account account) {
    double result = 0;
    switch (account) {
        case null -> throw new RuntimeException("Oops, account is null");
        case SavingsAccount sa -> result = sa.getSavings();
        case TermAccount ta -> result = ta.getTermAccount();
        case CurrentAccount ca -> result = ca.getCurrentAccount();
        default -> result = account.getBalance();
    };
    return result;
}
```
