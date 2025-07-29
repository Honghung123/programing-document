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

    **So sánh Abstract class với Interface**

    -   `Abstract Class`: phù hợp khi bạn có các lớp con có chung một số thuộc tính và phương thức, nhưng cần triển khai khác nhau ở một số phương thức cụ thể.
        -   Ví dụ:
            -   Hệ thống quản lý động vật với lớp cơ sở Animal, Vehicle, Employee. 
    -   `Interface`: tập trung vào định nghĩa hành vi và tính linh hoạt.
        -   Khi muốn các lớp triển khai phải có, nhưng không quan tâm triển khai như thế nào 
        -   Cần đa kế thừa.
        -   Ví dụ:
            -   Hệ thống payment(processPayment, calculateInterest,...)

        => Sử dụng kết hợp cả hai để tận dụng tối đa sức mạnh của OOP trong Java.

### Rủi ro khi sử dụng Downcasting

-   **Downcasting** là quá trình ép kiểu từ một lớp cha sang lớp con.
-   **Rủi ro**:
    -   **ClassCastException**: Nếu ép kiểu không chính xác, sẽ ném ra lỗi runtime. 
        -   Ví dụ:
            ```java
            Animal animal = new Cat();
            Dog dog = (Dog) animal; // Ép kiểu không chính xác
            ```
            Cách khắc phục:
            ```java
            if (animal instanceof Dog) {
                Dog dog = (Dog) animal;
            }
            ```

### **5. Các tính chất khác liên quan**

-   **Kết hợp (Composition)**: Xây dựng đối tượng phức tạp từ các đối tượng đơn giản hơn (ví dụ: Lớp `Car` chứa đối tượng `Engine`).
-   **Liên kết (Association)**: Mối quan hệ giữa các đối tượng (ví dụ: Sinh viên và giáo viên).

## Exception

> An event that disrupts the normal flow of the program. It is an object which is thrown at runtime.

-   **Types of Java Exceptions:** There are **mainly two** types of exceptions(**Oracle has 3**):
    -   **Checked(checked** at **compile-time):** **IOException**, **SQLException, …**
    -   **Unchecked(checked** at **runtime): ArithmeticException**, **NullPointerException**, **ArrayIndexOutOfBoundsException**,…
    -   **Error** is **considered** as the **unchecked** exception. Some example of errors are **OutOfMemoryError**, **VirtualMachineError**, **AssertionError,…**

## Multithreading

> Một kỹ thuật cho phép thực thi nhiều tác vụ đồng thời nhằm tăng hiệu suất và tận dụng tối đa tài nguyên.

-   **Process (Tiến trình)**: Chương trình đang chạy, có không gian bộ nhớ riêng.
-   **Thread (Luồng)**: Đơn vị nhỏ nhất trong process, chia sẻ bộ nhớ với các thread khác trong cùng process.
-   **Lợi ích**:
    -   Tận dụng CPU đa lõi.
    -   Cải thiện hiệu suất (performance) và phản hồi (responsiveness).
    -   Xử lý đồng thời nhiều tác vụ (ví dụ: vừa tải file vừa cập nhật UI).

### **2. Cách tạo Thread trong Java**

#### **a. Kế thừa lớp `Thread`**

```java
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread is running: " + Thread.currentThread().getName());
    }
}

MyThread t1 = new MyThread();
t1.start(); // Bắt đầu luồng
```

#### **b. Implement Interface `Runnable` (Ưu tiên)**

```java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Runnable running: " + Thread.currentThread().getName());
    }
}

// Sử dụng
Thread t2 = new Thread(new MyRunnable());
t2.start();
```

#### **c. Sử dụng Lambda Expression (Java 8+)**

```java
Thread t3 = new Thread(() -> {
    System.out.println("Lambda thread: " + Thread.currentThread().getName());
});
t3.start();
```

#### **d. Implement `Callable` và `Future` (Trả về kết quả)**

```java
ExecutorService executor = Executors.newSingleThreadExecutor();
Future<Integer> future = executor.submit(() -> {
    return 42;
});
System.out.println("Kết quả: " + future.get()); // Blocking cho đến khi có kết quả
executor.shutdown();
```

### **3. Vòng đời của Thread (Thread Lifecycle)**

1. **NEW**: Thread được tạo nhưng chưa gọi `start()`.
2. **RUNNABLE**: Sau `start()`, đang chạy hoặc sẵn sàng chạy.
3. **BLOCKED/WAITING**: Chờ tài nguyên hoặc thông báo từ thread khác.
4. **TIMED_WAITING**: Chờ với thời gian xác định (ví dụ: `sleep(1000)`).
5. **TERMINATED**: Kết thúc công việc.

### **4. Đồng bộ hóa (Synchronization)**

#### **a. Vấn đề Race Condition**

-   **Ví dụ**: Hai thread cùng thay đổi biến `count`.

```java
class Counter {
    private int count = 0;
    public void increment() { count++; } // Không an toàn với đa luồng
}
```

#### **b. Giải pháp: Sử dụng `synchronized`**

```java
public synchronized void increment() { count++; } // Đồng bộ hóa phương thức
// Hoặc đồng bộ hóa khối code
public void increment() {
    synchronized(this) { // Sử dụng lock của đối tượng
        count++;
    }
}
```

#### **c. ReentrantLock (Java 5+)**

```java
private Lock lock = new ReentrantLock();

public void increment() {
    lock.lock();
    try {
        count++;
    } finally {
        lock.unlock();
    }
}
```

### **5. Giao tiếp giữa các Thread: `wait()`, `notify()`, `notifyAll()`**

-   **wait()**: Tạm dừng thread và giải phóng lock.
-   **notify()**: Đánh thức một thread đang chờ.
-   **Ví dụ**: Producer-Consumer

```java
class Buffer {
    private int data;
    private boolean available = false;

    public synchronized void produce(int value) throws InterruptedException {
        while (available) wait(); // Chờ đến khi buffer trống
        data = value;
        available = true;
        notifyAll();
    }

    public synchronized int consume() throws InterruptedException {
        while (!available) wait(); // Chờ đến khi có dữ liệu
        available = false;
        notifyAll();
        return data;
    }
}
```

### **6. Các công cụ nâng cao trong `java.util.concurrent`**

#### **a. Executor Framework**

-   **Quản lý thread pool**:

```java
ExecutorService executor = Executors.newFixedThreadPool(5);
executor.submit(() -> System.out.println("Task executed by thread pool"));
executor.shutdown();
```

#### **b. CountDownLatch**

-   **Đợi nhiều thread hoàn thành**:

```java
CountDownLatch latch = new CountDownLatch(3);

for (int i = 0; i < 3; i++) {
    new Thread(() -> {
        // Thực hiện công việc
        latch.countDown();
    }).start();
}

latch.await(); // Chờ đến khi count = 0
System.out.println("Tất cả thread đã hoàn thành");
```

#### **c. CyclicBarrier**

-   **Đồng bộ hóa điểm chung**:

```java
CyclicBarrier barrier = new CyclicBarrier(3, () -> {
    System.out.println("Tất cả đã đến barrier");
});

for (int i = 0; i < 3; i++) {
    new Thread(() -> {
        barrier.await(); // Chờ các thread khác
    }).start();
}
```

#### **d. Concurrent Collections**

-   **Collections an toàn với đa luồng**:
    -   `ConcurrentHashMap`
    -   `CopyOnWriteArrayList`
    -   `BlockingQueue`

### **7. Xử lý Deadlock**

-   **Nguyên nhân**: Hai thread chờ nhau giải phóng tài nguyên.
-   **Ví dụ**:

```java
// Thread 1
synchronized (lockA) {
    synchronized (lockB) { ... }
}

// Thread 2
synchronized (lockB) {
    synchronized (lockA) { ... }
}
```

-   **Giải pháp**:
    -   Sử dụng thứ tự lock nhất quán.
    -   Sử dụng `tryLock()` với timeout.

### **8. Best Practices**

-   **Tránh shared mutable state**: Sử dụng immutable objects.
-   **Ưu tiên high-level concurrency utilities** (Executor, Concurrent Collections).
-   **Hạn chế dùng `synchronized`** trên phạm vi rộng.
-   **Sử dụng `volatile` cho biến cần visibility** (đảm bảo các thread thấy giá trị mới nhất).
-   **Đặt tên thread** để dễ debug:

```java
Thread t = new Thread(() -> {}, "My-Thread-1");
```

### **9. Ví dụ thực tế: Parallel Processing**

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Xử lý song song với Parallel Stream
int sum = numbers.parallelStream()
                 .mapToInt(n -> n * 2)
                 .sum();
System.out.println("Sum: " + sum);
```

### **10. Các lỗi thường gặp**

-   **Race Conditions**: Không đồng bộ hóa đúng cách.
-   **Deadlock**: Thiết kế lock không hợp lý.
-   **Memory Consistency Issues**: Sử dụng `volatile` sai cách.
-   **Thread Starvation**: Một thread không được CPU time.

## Java I/O

## Java Reflection

> A mechanism that allows examining class, method, field,... create new instance, revoke method and access private fields at run time.

-   Usage: Spring Framework(DI), Hibernate
-   The **java.lang.Class** class provides many methods that can be used to get metadata, examine and change the run time behavior of a class.
-   The `java.lang` and `java.lang.reflect` packages provide classes for java reflection.

#### Các Class chính trong `java.lang.reflect`

| Class         | Mô tả                                                                 |
| ------------- | --------------------------------------------------------------------- |
| `Class`       | Đại diện cho một lớp hoặc interface.                                  |
| `Method`      | Đại diện cho một phương thức của lớp.                                 |
| `Field`       | Đại diện cho một trường dữ liệu (biến) của lớp.                       |
| `Constructor` | Đại diện cho constructor của lớp.                                     |
| `Modifier`    | Cung cấp thông tin về modifiers (public, private, static, final, ...) |

---

### **3. Các bước làm việc với Reflection**

##### **a. Lấy đối tượng `Class`**

```java
// Cách 1: Sử dụng .class
Class<MyClass> clazz1 = MyClass.class;
// Cách 2: Từ đối tượng có sẵn
MyClass obj = new MyClass();
Class<?> clazz2 = obj.getClass();
// Cách 3: Từ tên lớp (Fully Qualified Name)
Class<?> clazz3 = Class.forName("com.example.MyClass");
```

##### **b. Tạo đối tượng từ Constructor**

```java
Class<?> clazz = MyClass.class;
// Lấy constructor không đối số
Constructor<?> constructor = clazz.getDeclaredConstructor();
constructor.setAccessible(true); // Nếu constructor là private
MyClass instance = (MyClass) constructor.newInstance();
// Lấy constructor có đối số
Constructor<?> constructorWithArgs = clazz.getDeclaredConstructor(String.class, int.class);
MyClass instance2 = (MyClass) constructorWithArgs.newInstance("Hello", 123);
```

##### **c. Truy cập và thay đổi giá trị trường (Field)**

```java
Field field = clazz.getDeclaredField("fieldName");
field.setAccessible(true); // Cho phép truy cập trường private
// Lấy giá trị
Object value = field.get(instance);
// Đặt giá trị mới
field.set(instance, newValue);
```

##### **d. Gọi phương thức (Method)**

```java
Method method = clazz.getDeclaredMethod("methodName", parameterTypes);
method.setAccessible(true); // Nếu phương thức là private
// Gọi phương thức không đối số
Object result = method.invoke(instance);
// Gọi phương thức có đối số
Method methodWithArgs = clazz.getDeclaredMethod("sum", int.class, int.class);
int result = (int) methodWithArgs.invoke(instance, 5, 10);
```

#### Hạn chế của Reflection

-   **Hiệu suất**: Chậm hơn so với cách gọi trực tiếp do kiểm tra runtime.
-   **Bảo mật**: Có thể bypass access control (private, protected) nếu Security Manager cho phép.
-   **Khó bảo trì**: Code trở nên phức tạp và khó debug.

#### Ứng dụng thực tế

-   **Annotation Processing**: Đọc và xử lý annotation tại runtime.
-   **Dependency Injection**: Framework như Spring sử dụng Reflection để inject bean.
-   **Dynamic Proxy**: Tạo proxy động để xử lý logic trước/sau khi gọi phương thức.

```java
InvocationHandler handler = (proxy, method, args) -> {
    System.out.println("Before method: " + method.getName());
    Object result = method.invoke(target, args);
    System.out.println("After method: " + method.getName());
    return result;
};
MyInterface proxy = (MyInterface) Proxy.newProxyInstance(
    MyInterface.class.getClassLoader(),
    new Class[]{MyInterface.class},
    handler
);
```

#### Lưu ý quan trọng

-   Luôn kiểm tra **Security Manager** nếu ứng dụng chạy trong môi trường hạn chế.
-   Sử dụng **setAccessible(true)** cẩn thận để tránh vi phạm nguyên tắc đóng gói.
-   Ưu tiên các cách tiếp cận thông thường nếu không cần tính linh hoạt của Reflection.
