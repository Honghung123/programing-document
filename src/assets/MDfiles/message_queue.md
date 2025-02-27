# Message Queue

> Message Queue (MQ) là một cơ chế giao tiếp không đồng bộ giữa các dịch vụ, cho phép ứng dụng trao đổi dữ liệu thông qua việc gửi/nhận messages mà không cần kết nối trực tiếp.

---

## Kiến trúc Message Queue:

### **1. Thành phần chính**

1. **Producer (Nhà sản xuất)**:

    - Tạo và gửi messages đến Message Broker.
    - Ví dụ: Microservice A gửi yêu cầu xử lý đơn hàng.

2. **Message Broker**:

    - Trung tâm quản lý messages, đảm bảo định tuyến, lưu trữ, và phân phối.
    - **Các thành phần con**:
        - **Queue**: Vùng lưu trữ tạm thời (bộ nhớ/đĩa) để chứa messages chờ xử lý.
        - **Exchange** (trong RabbitMQ): Định tuyến messages đến queue dựa trên rules (routing key, topic).
        - **Topics/Partitions** (trong Kafka): Chia messages thành các phân đoạn để xử lý song song.

3. **Consumer (Người tiêu dùng)**:
    - Nhận và xử lý messages từ queue.
    - Ví dụ: Microservice B xử lý thanh toán khi nhận message từ queue.

---

### **2. Mô hình giao tiếp**

-   **Point-to-Point**:

    -   Mỗi message được gửi đến **một consumer duy nhất**.
    -   Dùng cho tác vụ phân tán (như xử lý đơn hàng).

-   **Publish/Subscribe**:
    -   Message được gửi đến **nhiều consumer** (thông qua topics hoặc fanout exchange).
    -   Dùng cho broadcast thông báo hoặc cập nhật real-time.

---

### **3. Luồng hoạt động**

1. **Gửi message**:

    - Producer gửi message kèm metadata (ví dụ: routing key) đến Broker.
    - Broker xác định queue/topic đích và lưu trữ message.

2. **Lưu trữ**:

    - Message được lưu trong queue (có thể persistent trên đĩa để đảm bảo không mất dữ liệu).

3. **Nhận message**:

    - Consumer "poll" hoặc subscribe để nhận message từ queue.
    - Broker đảm bảo mỗi message chỉ được giao đến consumer một lần (hoặc theo chính sách cụ thể).

4. **Xác nhận (Acknowledgment)**:

    - Consumer gửi **ack** sau khi xử lý thành công.
    - Nếu không có ack, Broker sẽ gửi lại message (retry mechanism).

5. **Xử lý lỗi**:
    - Messages thất bại nhiều lần được chuyển vào **Dead-Letter Queue (DLQ)** để phân tích sau.

---

### **4. Tính năng quan trọng**

-   **Persistence**: Lưu message trên đĩa để chống mất dữ liệu khi hệ thống sập.
-   **Scalability**:
    -   **Partitioning** (Kafka): Chia topic thành các phân đoạn, xử lý song song.
    -   **Clustering** (RabbitMQ): Nhóm nhiều broker để cân bằng tải và dự phòng.
-   **Delivery Guarantees**:
    -   **At-least-once**: Đảm bảo message được giao ít nhất một lần (có thể trùng lặp).
    -   **Exactly-once**: Xử lý message đúng một lần (cần cơ chế deduplication).
-   **Ordering**: Đảm bảo thứ tự messages (ví dụ: Kafka duy trì thứ tự trong từng partition).

---

### **5. Security**

-   **Authentication/Authorization**: Xác thực producer/consumer (ví dụ: dùng SASL, OAuth2).
-   **Encryption**: Mã hóa dữ liệu trong quá trình truyền (TLS/SSL) và lưu trữ.

---

### **6. Hệ sinh thái phổ biến**

-   **RabbitMQ**:

    -   Sử dụng exchange + queue, hỗ trợ AMQP protocol.
    -   Mạnh về flexibility (hỗ trợ nhiều mô hình).

        <img src="https://i0.wp.com/i.imgur.com/nw2ikEd.png?resize=160,120">

-   **Apache Kafka**:

    -   Kiến trúc log-based, phân tán cao, throughput lớn.
    -   Phù hợp xử lý stream data.

        <img src="https://www.neovasolutions.com/wp-content/uploads/2023/11/Apache-Kafka-Architecture-1024x576.png">

-   **Amazon SQS**: Managed service của AWS, hỗ trợ queue FIFO hoặc standard.

---

### **7. Ứng dụng thực tế**

-   **Microservices**: Giảm coupling giữa các service.
-   **Xử lý bất đồng bộ**: Upload file, gửi email.
-   **Event-Driven Architecture**: Phản ứng với sự kiện real-time (ví dụ: cập nhật inventory).

---

### **8. Thách thức**

-   **Đảm bảo tính nhất quán**: Xử lý message ordering và deduplication.
-   **Quản lý tài nguyên**: Scaling consumer khi tải cao.
-   **Giám sát**: Theo dõi độ trễ, số lượng message tồn đọng (dùng Prometheus, Grafana).

---

**Kết luận**: Message Queue là thành phần quan trọng trong kiến trúc phân tán, giúp hệ thống linh hoạt, tin cậy và dễ mở rộng. Việc lựa chọn công nghệ (RabbitMQ, Kafka, SQS) phụ thuộc vào yêu cầu về throughput, độ trễ và mô hình giao tiếp.

### **Bảng So Sánh RabbitMQ vs Kafka**

| **Tiêu chí**            | **RabbitMQ**                                                    | **Apache Kafka**                                                          |
| ----------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Mục đích chính**      | Message Broker (gửi/nhận message)                               | Distributed Streaming Platform (xử lý luồng sự kiện)                      |
| **Mô hình**             | Push-based (gửi message đến consumer)                           | Pull-based (consumer tự lấy message từ partition)                         |
| **Giao thức**           | AMQP, MQTT, STOMP                                               | Custom protocol (TCP-based)                                               |
| **Lưu trữ message**     | Tạm thời (xóa sau khi xác nhận)                                 | Lưu trữ lâu dài (theo cấu hình, có thể vài ngày/năm)                      |
| **Kiến trúc**           | Exchange → Queue → Consumer                                     | Topic → Partitions → Consumer Groups                                      |
| **Message Ordering**    | Đảm bảo thứ tự trong từng queue                                 | Đảm bảo thứ tự trong từng partition                                       |
| **Delivery Guarantees** | At-least-once, Exactly-once (với xác nhận)                      | At-least-once, Exactly-once (với transactions)                            |
| **Scalability**         | Vertical scaling (thêm node cluster)                            | Horizontal scaling (thêm partitions và brokers)                           |
| **Throughput**          | ~50k messages/giây (phụ thuộc cấu hình)                         | ~1 triệu+ messages/giây (do phân tán và lưu trữ log)                      |
| **Độ trễ**              | Thấp (microseconds đến milliseconds)                            | Cao hơn (do cơ chế batch và lưu trữ)                                      |
| **Use Cases Điển Hình** | RPC, task queues, microservices (giao tiếp đồng bộ/bất đồng bộ) | Event sourcing, real-time analytics, log aggregation, streaming pipelines |
| **Tính năng nổi bật**   | Flexible routing, DLQ, TTL                                      | High durability, replayability, stream processing (Kafka Streams, KSQL)   |
| **Quản lý Consumer**    | Broker quản lý trạng thái consumer                              | Consumer tự quản lý offset (vị trí đọc message)                           |
| **Ecosystem**           | Plugins (quản lý, monitoring)                                   | Kafka Connect (integration), Kafka Streams, Schema Registry               |

---

### **Khi nào chọn RabbitMQ?**

1. **Microservices cần giao tiếp linh hoạt**:
    - Cần routing phức tạp (ví dụ: fanout, topic-based routing).
    - Ví dụ: Gửi thông báo đến nhiều service dựa trên loại sự kiện (order.created, payment.failed).
2. **Task Queues & RPC**:
    - Phân phối tác vụ nền (xử lý ảnh, gửi email).
    - Yêu cầu xác nhận message (ack) để đảm bảo không mất dữ liệu.
3. **Low Latency**:
    - Ứng dụng cần phản hồi nhanh (ví dụ: API request/response qua message).
4. **Dễ triển khai**:
    - Cần một message broker đơn giản, hỗ trợ đa giao thức (AMQP, MQTT).

**Ví dụ thực tế**:

-   Hệ thống đặt phòng khách sạn: Mỗi booking được gửi vào queue để xử lý thanh toán, gửi email xác nhận, và cập nhật inventory.

---

### **Khi nào chọn Kafka?**

1. **Event Streaming & Real-Time Analytics**:
    - Xử lý luồng sự kiện liên tục (ví dụ: IoT sensor data, clickstream analytics).
    - Cần replay lại dữ liệu để phân tích lịch sử.
2. **High Throughput**:
    - Hệ thống cần xử lý hàng triệu message/giây (ví dụ: log aggregation).
3. **Durability & Retention**:
    - Lưu trữ message lâu dài (ví dụ: audit logs, compliance).
4. **Event-Driven Architecture**:
    - Kiến trúc dựa trên sự kiện (ví dụ: CQRS, Event Sourcing).
5. **Scalability Mạnh**:
    - Dễ dàng mở rộng bằng cách thêm partitions và brokers.

**Ví dụ thực tế**:

-   Nền tảng giao dịch chứng khoán: Tích hợp dữ liệu real-time từ nhiều nguồn, xử lý để đưa ra quyết định giao dịch.

---

### **Các Yếu Tố Quyết Định**

| **Yếu tố**            | **Chọn RabbitMQ**                    | **Chọn Kafka**                                  |
| --------------------- | ------------------------------------ | ----------------------------------------------- |
| **Message Retention** | Ngắn hạn (sau khi xử lý xóa message) | Dài hạn (lưu trữ theo retention policy)         |
| **Throughput**        | Trung bình (~50k msg/giây)           | Rất cao (~1M+ msg/giây)                         |
| **Độ phức tạp**       | Đơn giản                             | Phức tạp (cần hiểu partitions, consumer groups) |
| **Loại Workload**     | Tác vụ đơn lẻ, RPC                   | Luồng sự kiện liên tục                          |
| **Khả năng Replay**   | Không hỗ trợ                         | Hỗ trợ mạnh (đọc lại message từ offset bất kỳ)  |

---

### **Tóm Tắt Lựa Chọn**

-   **RabbitMQ**:

    -   **Dùng khi**: Bạn cần một message broker linh hoạt, hỗ trợ nhiều mô hình giao tiếp (pub/sub, RPC), độ trễ thấp, và không yêu cầu lưu trữ message lâu dài.
    -   **Ví dụ**: Microservices, hệ thống task queue, ứng dụng tài chính cần xác nhận giao dịch ngay lập tức.

-   **Kafka**:
    -   **Dùng khi**: Bạn xử lý luồng sự kiện (event streaming), cần throughput cực cao, lưu trữ dữ liệu để replay hoặc phân tích, và xây dựng hệ thống event-driven.
    -   **Ví dụ**: Hệ thống log tập trung, real-time recommendation engines, IoT data pipelines.

---

### **Lưu Ý Khi Triển Khai**

-   **RabbitMQ**:
    -   Sử dụng **quorum queues** để đảm bảo tính nhất quán trong cluster.
    -   Cấu hình **Dead-Letter Exchanges (DLX)** để xử lý message lỗi.
-   **Kafka**:
    -   Chọn số **partitions** phù hợp với số consumer (mỗi partition chỉ được xử lý bởi một consumer trong group).
    -   Dùng **Kafka Streams** hoặc **KSQL** để xử lý stream data phức tạp.

**Lời Khuyên**:

-   **Kết hợp cả hai** trong cùng hệ thống nếu cần: Dùng RabbitMQ cho giao tiếp real-time và Kafka cho event sourcing.
-   **Managed Services**: Dùng Amazon MQ (RabbitMQ) hoặc Confluent Cloud (Kafka) để giảm chi phí vận hành.
