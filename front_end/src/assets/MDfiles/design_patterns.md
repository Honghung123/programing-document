# DESIGN PATTERNS

## Tổng quan

> `Design Pattern` là các "khuôn mẫu" mô tả cách tổ chức code để tăng tính linh hoạt, dễ bảo trì và mở rộng, giúp giải quyết những vấn đề phổ biến trong thiết kế phần mềm.

> => `Design Pattern` giúp lập trình viên áp dụng best practices một cách có hệ thống, tránh `reinvent the wheel`.

-   **Khi Nào Áp Dụng Design Pattern?**

    -   `Khi gặp vấn đề tái diễn`: Nếu vấn đề đã có giải pháp mẫu, hãy áp dụng pattern phù hợp.
    -   `Cần tăng tính linh hoạt`: Ví dụ: Dùng Factory để dễ thay đổi logic khởi tạo.
    -   `Giảm sự phụ thuộc`: Ví dụ: Dependency Injection (một dạng của Factory) giúp giảm coupling.
    -   `Cải thiện khả năng bảo trì`: Code tuân theo pattern dễ đọc và sửa đổi hơn.

    => Lưu ý: **Không lạm dụng** pattern! Đôi khi giải pháp đơn giản hơn sẽ hiệu quả hơn việc áp dụng pattern không cần thiết.

## Phân loại

### `Creational Patterns`

> Tập trung vào cách tạo đối tượng một cách linh hoạt và tách biệt khỏi hệ thống.

#### **1. Singleton**

-   > Đảm bảo một lớp chỉ có một thể hiện duy nhất và cung cấp phạm vi truy cập toàn cục.
-   **Khi nào dùng**: Khi cần quản lý tài nguyên chia sẻ (ví dụ: database connection, logger).

#### **2. Factory Method**

-   > Định nghĩa interface để tạo đối tượng, nhưng để lớp con quyết định lớp nào được khởi tạo.
-   **Khi nào dùng**: Khi không biết trước chính xác loại đối tượng cần tạo (ví dụ: hệ thống hỗ trợ nhiều loại database).

#### **3. Abstract Factory**

-   > Tạo ra các họ đối tượng liên quan mà không cần chỉ định lớp cụ thể.
-   **Khi nào dùng**: Khi cần đảm bảo tính tương thích giữa các đối tượng (ví dụ: GUI toolkit hỗ trợ nhiều theme).

#### **4. Builder**

-   > Tách quá trình xây dựng đối tượng phức tạp thành các bước độc lập.
-   **Khi nào dùng**: Khi đối tượng có nhiều thuộc tính tùy chọn hoặc cần kiểm soát từng bước khởi tạo (ví dụ: tạo HTTP request với headers, body...).

### `Structural Patterns`

> Tập trung vào cách tổ chức các đối tượng và lớp thành cấu trúc lớn hơn.

#### **1. Adapter**

-   > "Chuyển đổi" interface của một lớp thành interface khác mà client mong đợi.
-   **Khi nào dùng**: Khi tích hợp các thành phần có interface không tương thích (ví dụ: kết nối thư viện bên thứ ba).

#### **2. Decorator**

-   > Thêm chức năng vào đối tượng một cách linh hoạt bằng cách bao bọc (wrap) nó.
-   **Khi nào dùng**: Khi cần mở rộng đối tượng mà không làm thay đổi lớp gốc (ví dụ: thêm encryption vào data stream).

#### **3. Facade**

-   > Cung cấp một interface đơn giản hóa cho một hệ thống phức tạp.
-   **Khi nào dùng**: Khi muốn ẩn độ phức tạp của hệ thống con (ví dụ: API gateway trong microservices).

#### **4. Composite**

-   > Tổ chức các đối tượng theo cấu trúc cây để xử lý đồng nhất cả nhóm và cá thể.
-   **Khi nào dùng**: Khi làm việc với cấu trúc phân cấp (ví dụ: hệ thống file với thư mục và file).

### `Behavioral Patterns`

> Tập trung vào cách các đối tượng tương tác và phân chia trách nhiệm.

#### **1. Observer**

-   > Định nghĩa cơ chế một-nhiều để các đối tượng phụ thuộc (observer) nhận thông báo khi đối tượng chủ (subject) thay đổi.
-   **Khi nào dùng**: Khi cần cập nhật real-time (ví dụ: notification system, event-driven UI).

#### **2. Strategy**

-   > Định nghĩa một họ thuật toán, đóng gói từng thuật toán và cho phép hoán đổi linh hoạt.
-   **Khi nào dùng**: Khi có nhiều biến thể của một thuật toán (ví dụ: các phương thức thanh toán khác nhau).

#### **3. Command**

-   > Đóng gói một yêu cầu (request) thành đối tượng độc lập, hỗ trợ undo/redo và queue các lệnh.
-   **Khi nào dùng**: Khi cần hỗ trợ transactions hoặc lịch sử thao tác (ví dụ: ứng dụng có chức năng undo).

#### **4. Chain of Responsibility**

-   > Chuyển request dọc theo một chuỗi các trình xử lý (handler) đến khi được xử lý.
-   **Khi nào dùng**: Khi có nhiều đối tượng có thể xử lý request (ví dụ: hệ thống validation từng bước).
