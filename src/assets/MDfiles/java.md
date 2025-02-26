# JAVA

## OOP - Object-Oriented Programming

### **1. Tính Đóng gói (Encapsulation)**

-   **Khái niệm**: Gói gọn dữ liệu (biến) và phương thức (hàm) vào một đơn vị (lớp), đồng thời kiểm soát quyền truy cập vào dữ liệu.
-   **Cách triển khai trong Java**:
    -   Sử dụng các **access modifier** như `private`, `protected`, `public`.
    -   Cung cấp phương thức `getter` và `setter` để truy cập/sửa đổi dữ liệu.
-   **Lợi ích**:
    -   Bảo vệ dữ liệu khỏi thay đổi trái phép.
    -   Linh hoạt thay đổi logic bên trong mà không ảnh hưởng đến code bên ngoài.
-   **Ví dụ**:
    ```java
    public class Student {
        // Dữ liệu được đóng gói (private or protected)
        private String name;
        // Phương thức getter/setter để truy cập
        public String getName() {
            return name;
        }
        public void setName(String name) {
            if (name != null) {
                this.name = name;
            }
        }
    }
    ```

---

### **2. Tính Kế thừa (Inheritance)**

-   **Khái niệm**: Tạo lớp mới từ lớp đã tồn tại để tái sử dụng code.
-   **Cách triển khai trong Java**:
    -   Sử dụng từ khóa `extends`.
    -   Lớp con kế thừa thuộc tính và phương thức của lớp cha (trừ thành phần `private`).
    -   Hỗ trợ **đa kế thừa gián tiếp** qua interface (Java không hỗ trợ đa kế thừa lớp).
    -   Mọi lớp đều kế thừa từ lớp `Object`.
-   **Lợi ích**: Giảm trùng lặp code, dễ bảo trì.
-   **Ví dụ**:

    ```java
    class Animal {
        void eat() {
            System.out.println("Eating...");
        }
    }
    class Dog extends Animal {
        void bark() {
            System.out.println("Barking...");
        }
    }
    // Sử dụng
    Dog dog = new Dog();
    dog.eat();  // Kế thừa từ Animal
    dog.bark();
    ```

---

### **3. Tính Đa hình (Polymorphism)**

-   **Khái niệm**: Khả năng một đối tượng thể hiện nhiều hình thái khác nhau.
-   **Loại đa hình**:

    1. **Đa hình lúc biên dịch (Compile-time)**:
        - **Method Overloading**: Cùng tên phương thức nhưng khác tham số.
        ```java
        class Calculator {
            int add(int a, int b) { return a + b; }
            double add(double a, double b) { return a + b; }
        }
        ```
    2. **Đa hình lúc runtime (Runtime)**:

        - **Method Overriding**: Ghi đè phương thức của lớp cha.
        - Sử dụng **upcasting** để tham chiếu lớp cha trỏ đến đối tượng lớp con.

        ```java
        class Animal {
            void sound() {
                System.out.println("Animal makes a sound");
            }
        }
        class Cat extends Animal {
            @Override
            void sound() {
                System.out.println("Meow!");
            }
        }
        Animal animal = new Cat();
        animal.sound(); // Output: "Meow!" (Gọi phương thức ghi đè)
        ```

---

### **4. Tính Trừu tượng (Abstraction)**

-   **Khái niệm**: Ẩn chi tiết phức tạp, chỉ hiển thị tính năng cần thiết.
-   **Cách triển khai trong Java**:
    -   **Abstract class** (từ khóa `abstract`):
        -   Có thể chứa biến instance với các access modifier (private, protected, public).
        -   Có constructor (để khởi tạo trạng thái khi lớp con được tạo)
        -   Chứa phương thức trừu tượng và phương thức thông thường.
        -   Không thể khởi tạo đối tượng.
    -   **Interface** (từ khóa `interface`): Là một lớp "hợp đồng" định nghĩa các phương thức mà lớp triển khai phải tuân thủ.
        -   Chứa biến mặc định là `public static final`. Không có constructor. Hỗ trợ đa kế thừa.
        -   Trước Java 8: Chỉ chứa phương thức trừu tượng.
        -   Từ Java 8: Hỗ trợ `default method` và `static method`.
        -   Từ Java 9: Hỗ trợ `private method`, `private variable` .
-   **Ví dụ**:

    ```java
    // Abstract class
    abstract class Shape {
        abstract void draw(); // Phương thức trừu tượng

        void resize() {
            System.out.println("Resizing shape...");
        }
    }

    // Interface
    interface Drawable {
        void draw(); // Phương thức trừu tượng

        default void print() {
            System.out.println("Printing...");
        }
    }

    class Circle extends Shape implements Drawable {
        @Override
        void draw() {
            System.out.println("Drawing a circle");
        }
    }
    ```

    ** So sánh Abstract class với Interface**

    -   `Abstract Class`: tập trung vào chia sẻ code và trạng thái chung.
        -   Khi các lớp con có chung thuộc tính hoặc phương thức.
        -   Cần tái sử dụng code hoặc định nghĩa trạng thái (biến instance).
        -   Dễ dàng thay đổi, mở rộng mã nguồn mà không ảnh hưởng nhiều đến lớp con.
        -   Khi có mối quan hệ kế thừa rõ ràng, các lớp triển khai thật sự là con của lớp cha - Quan hệ IS-A.
        -   Ví dụ:
            -   Hệ thống quản lý động vật với lớp cơ sở Animal.
            -   Hệ thống quản lý nhân viên.
    -   `Interface`: tập trung vào định nghĩa hành vi và tính linh hoạt.

        -   Khi muốn các lớp triển khai phải có, nhưng không quan tâm triển khai như thế nào
        -   Khi cần định nghĩa một hợp đồng các hành vi chung cho nhiều lớp không liên quan có thể sử dụng. Không nhất thiết có quan hệ kế thừa - Quan hệ CAN-DO.
        -   Cần đa kế thừa.
        -   Ví dụ:
            -   Hệ thống quản lý Phương tiện giao thông

        => Sử dụng kết hợp cả hai để tận dụng tối đa sức mạnh của OOP trong Java.

---

### **5. Các tính chất khác liên quan**

-   **Kết hợp (Composition)**: Xây dựng đối tượng phức tạp từ các đối tượng đơn giản hơn (ví dụ: Lớp `Car` chứa đối tượng `Engine`).
-   **Liên kết (Association)**: Mối quan hệ giữa các đối tượng (ví dụ: Sinh viên và giáo viên).

---
