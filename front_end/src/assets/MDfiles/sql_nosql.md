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

-   **NoSQL** là cơ sở dữ liệu **phi quan hệ**, linh hoạt về cấu trúc, phù hợp với dữ liệu phi cấu trúc
-   Các hệ thống NoSQL phổ biến: MongoDB, Cassandra, Redis, và Couchbase.

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
4. **Hiệu suất cao. Không hỗ trợ JOIN**:
    - Thiết kế denormalized để tối ưu cho các tác vụ đọc/ghi nhanh và xử lý dữ liệu lớn.

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

# INDEX

### **1. Khái Niệm**

> **Index** là cấu trúc dữ liệu giúp tăng tốc độ truy vấn dữ liệu trong cơ sở dữ liệu (CSDL). Nó hoạt động giống như "mục lục" trong sách, cho phép hệ thống tìm kiếm dữ liệu nhanh chóng mà không cần quét toàn bộ bảng.

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

# Query Optimization

### **1. Sử Dụng Index Hiệu Quả**

-   **Tạo Index trên các cột thường dùng trong `WHERE`, `JOIN`, `ORDER BY`**  
    Ví dụ:
    ```sql
    CREATE INDEX idx_user_email ON Users(email); -- Tăng tốc tìm kiếm theo email
    ```
-   **Tránh Over-Indexing**  
    Quá nhiều index làm chậm thao tác ghi (INSERT/UPDATE/DELETE).
-   **Composite Index cho truy vấn nhiều cột**
    ```sql
    CREATE INDEX idx_name_age ON Employees(last_name, age); -- Tối ưu truy vấn WHERE last_name = 'Smith' AND age > 30
    ```

---

### **2. Tối Ưu Cấu Trúc Truy Vấn**

-   **Chỉ SELECT các cột cần thiết**

    ```sql
    -- Không tốt:
    SELECT * FROM Orders;

    -- Tốt hơn:
    SELECT order_id, order_date, total FROM Orders;
    ```

-   **Thay Subquery bằng JOIN**

    ```sql
    -- Subquery chậm:
    SELECT * FROM Products
    WHERE category_id IN (SELECT category_id FROM Categories WHERE name = 'Electronics');

    -- JOIN nhanh hơn:
    SELECT p.*
    FROM Products p
    JOIN Categories c ON p.category_id = c.category_id
    WHERE c.name = 'Electronics';
    ```

---

### **3. Phân Tích Execution Plan**

Sử dụng lệnh `EXPLAIN` (MySQL/PostgreSQL) hoặc `EXPLAIN PLAN` (Oracle) để xem cách CSDL xử lý truy vấn.  
Ví dụ:

```sql
EXPLAIN SELECT * FROM Users WHERE email = 'user@example.com';
```

-   **Điều chỉnh dựa trên kết quả**: Thêm index hoặc viết lại truy vấn nếu phát hiện Full Table Scan.

---

### **4. Tối Ưu JOIN**

-   **Đảm bảo cột JOIN có Index**
    ```sql
    CREATE INDEX idx_order_customer ON Orders(customer_id); -- Index cho JOIN Orders và Customers
    ```
-   **Thứ tự JOIN**: Ưu tiên bảng nhỏ trước.
    ```sql
    -- Ví dụ: Bảng Customers (10k records) JOIN Orders (1M records)
    SELECT *
    FROM Customers c
    JOIN Orders o ON c.customer_id = o.customer_id; -- Hiệu quả hơn nếu Customers được lọc trước
    ```

---

### **5. Phân Trang (Pagination) Thông Minh**

-   **Tránh OFFSET lớn** (gây chậm):

    ```sql
    -- Truyền thống (chậm khi OFFSET lớn):
    SELECT * FROM Orders ORDER BY order_date DESC LIMIT 10 OFFSET 10000;

    -- Keyset Pagination (nhanh hơn):
    SELECT * FROM Orders
    WHERE order_date < '2023-01-01' -- Sử dụng giá trị cột thay vì OFFSET
    ORDER BY order_date DESC
    LIMIT 10;
    ```

---

### **6. Tránh Hàm/Toán Tử Trên Cột Index**

-   **Không tốt**:
    ```sql
    SELECT * FROM Users WHERE UPPER(name) = 'JOHN'; -- Index trên name không được sử dụng
    ```
-   **Tốt hơn**:
    ```sql
    SELECT * FROM Users WHERE name = 'John'; -- Sử dụng Index
    ```

---

### **7. Batch Operations và Bulk Insert**

-   **Gộp nhiều INSERT thành một lần**:

    ```sql
    -- Chậm:
    INSERT INTO Logs (message) VALUES ('Error 1');
    INSERT INTO Logs (message) VALUES ('Error 2');

    -- Nhanh hơn:
    INSERT INTO Logs (message)
    VALUES ('Error 1'), ('Error 2'), ('Error 3');
    ```

---

### **8. Tối Ưu Schema và Kiểu Dữ Liệu**

-   **Chọn kiểu dữ liệu phù hợp**:

    ```sql
    -- Không tốt: Dùng VARCHAR cho số điện thoại
    CREATE TABLE Contacts (phone VARCHAR(20));

    -- Tốt hơn: Dùng INT/BIGINT nếu chỉ lưu số
    CREATE TABLE Contacts (phone BIGINT);
    ```

-   **Denormalization khi cần**: Thêm cột dư thừa để tránh JOIN phức tạp.

---

### **9. Caching Kết Quả Truy Vấn**

-   **Sử dụng Redis/Memcached**: Lưu kết quả truy vấn ít thay đổi (ví dụ: danh sách sản phẩm nổi bật).

---

### **10. Theo Dõi và Tinh Chỉnh Định Kỳ**

-   **Phát hiện truy vấn chậm**: Sử dụng công cụ như `slow_query_log` (MySQL) hoặc `pg_stat_statements` (PostgreSQL).
-   **Xóa Index không sử dụng**: Giảm overhead cho thao tác ghi.

---

### **Ví Dụ Tổng Hợp**

**Truy vấn ban đầu (chậm)**:

```sql
SELECT *
FROM Orders
WHERE customer_id = 100
ORDER BY order_date DESC;
```

**Tối ưu hóa**:

1. Thêm Composite Index:
    ```sql
    CREATE INDEX idx_customer_order_date ON Orders(customer_id, order_date);
    ```
2. Giới hạn cột SELECT và sử dụng LIMIT:
    ```sql
    SELECT order_id, order_date, total
    FROM Orders
    WHERE customer_id = 100
    ORDER BY order_date DESC
    LIMIT 20;
    ```

---

### **Lưu Ý Quan Trọng**

-   **Cân bằng giữa đọc và ghi**: Index cải thiện tốc độ đọc nhưng làm chậm ghi.
-   **Test hiệu suất**: Đo lường thời gian truy vấn trước/sau khi tối ưu.
-   **Tránh tối ưu quá sớm**: Ưu tiên code dễ đọc trước, tối ưu khi phát hiện vấn đề thực tế.
