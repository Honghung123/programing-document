# SQL - NoSQL

---

### **1. SQL (Structured Query Language)**

#### **Khái niệm**

-   **SQL** là ngôn ngữ truy vấn dùng để quản lý và thao tác với **cơ sở dữ liệu quan hệ (RDBMS)**.
-   Dữ liệu được lưu trữ dưới dạng **bảng** (table) với các hàng (row) và cột (column), liên kết qua **khóa chính (primary key)** và **khóa ngoại (foreign key)**.

#### **Đặc điểm**

1. **Schema cố định**:
    - Phải định nghĩa cấu trúc bảng (schema) trước khi thêm dữ liệu.
    - Ví dụ: Bảng `Users` có các cột `id`, `name`, `email`.
2. **ACID Properties**:
    - **Atomicity**: Giao dịch hoàn thành toàn bộ hoặc không hoàn thành.
    - **Consistency**: Dữ liệu luôn hợp lệ sau mỗi giao dịch.
    - **Isolation**: Giao dịch độc lập với nhau.
    - **Durability**: Dữ liệu được lưu trữ vĩnh viễn sau khi commit.
3. **Ngôn ngữ truy vấn mạnh**:
    - Sử dụng SQL để thực hiện các thao tác CRUD (Create, Read, Update, Delete).
    - Hỗ trợ các phép `JOIN`, `GROUP BY`, `HAVING`, v.v.
4. **Vertical Scaling**:
    - Mở rộng bằng cách nâng cấp phần cứng (CPU, RAM).

#### **Ví dụ về SQL Query**

```sql
-- Tạo bảng
CREATE TABLE Users (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);

-- Truy vấn dữ liệu
SELECT name, email FROM Users WHERE id = 1;

-- JOIN hai bảng
SELECT Orders.order_id, Users.name
FROM Orders
JOIN Users ON Orders.user_id = Users.id;
```

#### **Cơ sở dữ liệu SQL phổ biến**

-   MySQL, PostgreSQL, Oracle, Microsoft SQL Server.

#### **Trường hợp sử dụng**

-   Ứng dụng yêu cầu tính toàn vẹn dữ liệu cao (ngân hàng, thương mại điện tử).
-   Dữ liệu có cấu trúc rõ ràng và quan hệ phức tạp.

---

### **2. NoSQL (Not Only SQL)**

#### **Khái niệm**

-   **NoSQL** là cơ sở dữ liệu **phi quan hệ**, linh hoạt về cấu trúc, phù hợp với dữ liệu phi cấu trúc (unstructured) hoặc bán cấu trúc (semi-structured).

#### **Đặc điểm**

1. **Schema linh hoạt**:
    - Không cần định nghĩa schema trước.
    - Dữ liệu có thể thay đổi động (ví dụ: JSON, XML).
2. **BASE Properties**:
    - **Basically Available**: Luôn sẵn sàng phản hồi.
    - **Soft State**: Dữ liệu có thể thay đổi theo thời gian.
    - **Eventually Consistent**: Đảm bảo tính nhất quán sau một khoảng thời gian.
3. **Horizontal Scaling**:
    - Mở rộng bằng cách thêm node (phân tán dữ liệu trên nhiều máy chủ).
4. **Không hỗ trợ JOIN**:
    - Thiết kế denormalized để tối ưu tốc độ đọc/ghi.

#### **Các loại NoSQL**

1. **Document Database**:
    - Lưu trữ dữ liệu dạng document (JSON, BSON).
    - Ví dụ: MongoDB, CouchDB.
2. **Key-Value Store**:
    - Lưu trữ dữ liệu dạng cặp key-value.
    - Ví dụ: Redis, DynamoDB.
3. **Column-Family Store**:
    - Lưu trữ dữ liệu theo cột thay vì hàng.
    - Ví dụ: Cassandra, HBase.
4. **Graph Database**:
    - Tối ưu cho dữ liệu quan hệ dạng đồ thị.
    - Ví dụ: Neo4j, Amazon Neptune.

#### **Trường hợp sử dụng**

-   Ứng dụng real-time (chat, IoT).
-   Dữ liệu lớn (Big Data) và tốc độ ghi cao.
-   Hệ thống cần mở rộng linh hoạt (social media, phân tích log).

---

### **3. So sánh SQL vs NoSQL**

| **Tiêu chí**        | **SQL**                       | **NoSQL**                      |
| ------------------- | ----------------------------- | ------------------------------ |
| **Cấu trúc**        | Schema cố định                | Schema linh hoạt               |
| **Query Language**  | SQL                           | Không chuẩn hóa (tùy database) |
| **Scaling**         | Vertical (nâng cấp phần cứng) | Horizontal (thêm node)         |
| **ACID vs BASE**    | Tuân thủ ACID                 | Tuân thủ BASE                  |
| **Quan hệ dữ liệu** | Hỗ trợ JOIN                   | Denormalized, không JOIN       |
| **Ví dụ**           | MySQL, PostgreSQL             | MongoDB, Redis, Cassandra      |

---

### **4. Khi nào nên dùng SQL hoặc NoSQL?**

-   **Dùng SQL**:
    -   Dữ liệu có cấu trúc rõ ràng, quan hệ phức tạp.
    -   Yêu cầu tính toàn vẹn cao (giao dịch tài chính).
-   **Dùng NoSQL**:
    -   Dữ liệu phi cấu trúc, thay đổi thường xuyên.
    -   Cần xử lý lượng dữ liệu khổng lồ và tốc độ cao.

---

### **5. Kết hợp SQL và NoSQL (Polyglot Persistence)**

Nhiều hệ thống hiện đại sử dụng cả hai loại để tận dụng ưu điểm:

-   SQL: Lưu thông tin người dùng, đơn hàng.
-   NoSQL: Lưu log, dữ liệu phân tích, cache (Redis).

---

### **Kết luận**

-   **SQL** phù hợp cho ứng dụng cần tính nhất quán và quan hệ dữ liệu phức tạp.
-   **NoSQL** linh hoạt, hiệu suất cao, phù hợp cho big data và hệ thống phân tán.
-   Lựa chọn phụ thuộc vào yêu cầu nghiệp vụ, loại dữ liệu và khả năng mở rộng.

## INDEX

### **1. Khái Niệm**

    **Index** là cấu trúc dữ liệu giúp tăng tốc độ truy vấn dữ liệu trong cơ sở dữ liệu (CSDL). Nó hoạt động giống như "mục lục" trong sách, cho phép hệ thống tìm kiếm dữ liệu nhanh chóng mà không cần quét toàn bộ bảng.

-   **Mục đích**: Giảm thời gian truy vấn, đặc biệt với các bảng lớn.
-   **Cơ chế**: Index lưu trữ giá trị của một hoặc nhiều cột và con trỏ đến vị trí dữ liệu thực tế trên đĩa.

---

### **2. Các Loại Index Phổ Biến**

#### **a. Clustered Index**

-   **Đặc điểm**:
    -   Sắp xếp dữ liệu vật lý trong bảng theo thứ tự của index.
    -   Mỗi bảng chỉ có **một** clustered index (thường là PRIMARY KEY).
-   **Ví dụ**:
    ```sql
    CREATE TABLE Users (
        UserID INT PRIMARY KEY,  -- Tự động tạo clustered index
        UserName VARCHAR(50)
    );
    ```

#### **b. Non-Clustered Index**

-   **Đặc điểm**:
    -   Tạo một cấu trúc riêng biệt (B-tree) chứa giá trị các cột được index và con trỏ đến dữ liệu gốc.
    -   Một bảng có thể có **nhiều** non-clustered index.
-   **Ví dụ**:
    ```sql
    CREATE INDEX idx_UserName ON Users(UserName);  -- Tạo non-clustered index trên cột UserName
    ```

#### **c. Composite Index**

-   **Đặc điểm**:
    -   Index trên **nhiều cột** cùng lúc.
    -   Hiệu quả khi truy vấn sử dụng nhiều cột trong điều kiện `WHERE` hoặc `JOIN`.
-   **Ví dụ**:
    ```sql
    CREATE INDEX idx_Name_Email ON Users(UserName, Email);
    ```

#### **d. Unique Index**

-   **Đặc điểm**:
    -   Đảm bảo giá trị trong cột là **duy nhất**.
    -   Áp dụng cho PRIMARY KEY hoặc cột cần ràng buộc duy nhất.
-   **Ví dụ**:
    ```sql
    CREATE UNIQUE INDEX idx_UniqueEmail ON Users(Email);
    ```

---

### **3. Khi Nào Sử Dụng Index?**

-   **Cột thường xuyên được truy vấn** trong `WHERE`, `ORDER BY`, `JOIN`.
-   **Bảng lớn** (hàng triệu bản ghi) để giảm thời gian quét toàn bộ.
-   **Cột có tính chọn lọc cao** (ví dụ: `UserID`, `Email`).

#### **Trường hợp không nên dùng**:

-   Bảng nhỏ (dưới 1000 bản ghi).
-   Cột thường xuyên được **update** hoặc **insert** (vì index làm chậm thao tác ghi).
-   Cột chứa giá trị `NULL` hoặc trùng lặp nhiều.

---

### **4. Ưu và Nhược Điểm**

| **Ưu điểm**                    | **Nhược điểm**                                  |
| ------------------------------ | ----------------------------------------------- |
| Tăng tốc truy vấn `SELECT`.    | Tốn dung lượng lưu trữ.                         |
| Hỗ trợ sắp xếp và phân nhóm.   | Làm chậm thao tác `INSERT`, `UPDATE`, `DELETE`. |
| Tối ưu hóa JOIN giữa các bảng. | Quản lý phức tạp nếu có quá nhiều index.        |

---

### **5. Ví Dụ Thực Tế**

**Truy vấn chậm không có index**:

```sql
SELECT * FROM Orders WHERE CustomerID = 123;  -- Quét toàn bộ bảng Orders
```

**Tạo index để tối ưu**:

```sql
CREATE INDEX idx_CustomerID ON Orders(CustomerID);
```

Sau khi tạo index, truy vấn chỉ quét phạm vi nhỏ → **tốc độ nhanh hơn**.

---

### **6. Best Practices**

1. **Chọn cột phù hợp**: Ưu tiên cột dùng trong `WHERE`, `JOIN`, `ORDER BY`.
2. **Tránh over-indexing**: Chỉ tạo index khi cần thiết.
3. **Sử dụng composite index** cho các truy vấn phức tạp.
4. **Theo dõi hiệu suất**: Sử dụng công cụ như `EXPLAIN` (trong PostgreSQL/MySQL) để phân tích truy vấn.

---

### **7. Lưu ý**

-   Index không phải "viên đạn bạc". Đôi khi cần tối ưu truy vấn hoặc thiết kế CSDL.
-   Cân bằng giữa tốc độ đọc và ghi để đảm bảo hiệu suất tổng thể.
