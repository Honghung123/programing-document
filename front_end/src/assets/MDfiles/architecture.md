# Architectures

> Kiến trúc phần mềm là cách tổ chức và thiết kế các thành phần của hệ thống.

-   **Layered Architecture (Kiến trúc phân lớp)**: Các thành phần của hệ thống được phân chia thành các lớp như Presentation (giao diện), Business (logic nghiệp vụ), và Data (dữ liệu).
-   **Service-Oriented Architecture (Kiến trúc hướng dịch vụ)**: Đây là mô hình trong đó các dịch vụ khác nhau giao tiếp với nhau qua mạng. `SOA là tiền thân của Microservices`.
-   **Event-Driven Architecture (Kiến trúc hướng sự kiện)**: Hệ thống phản ứng với các sự kiện được kích hoạt bởi các thành phần khác nhau.

### Monolithic Architecture

> **Kiến trúc monolithic** là một kiến trúc trong đó tất cả các thành phần như giao diện người dùng, logic nghiệp vụ, và cơ sở dữ liệu đều được tích hợp trong một khối duy nhất đó.

> Các thành phần trong monlithic chủ yếu bao gồm: _Presentation_, _Business_, _Data_, _Integrated third-party services_.

-   **Đặc điểm:**
    -   **Tính gắn kết chặt chẽ**: Các thành phần của hệ thống phụ thuộc vào nhau.
    -   **Tính mở rộng**: Khó khăn trong việc mở rộng từng phần riêng lẻ của hệ thống.
        -   **Mở rộng chiều dọc (Vertical Scaling)**: Tăng công suất của máy chủ (CPU, RAM, v.v.) để xử lý thêm tải. Điều này có giới hạn vì phần cứng có thể chỉ mở rộng đến một mức nào đó.
        -   **Mở rộng chiều ngang (Horizontal Scaling)**: Nhân bản toàn bộ ứng dụng và triển khai trên nhiều máy chủ. => Không linh hoạt vì không thể mở rộng từng phần của hệ thống một cách độc lập.
    -   **Triển khai đồng nhất**: Khi có thay đổi ở bất kỳ phần nào của hệ thống, toàn bộ ứng dụng phải được triển khai lại.
-   **Ưu điểm:**
    -   **Đơn giản khi phát triển ban đầu**
    -   **Dễ dàng kiểm thử**: Vì toàn bộ hệ thống nằm trong một khối duy nhất
    -   **Dễ triển khai**: Với một file hoặc bộ file duy nhất
    -   **Hiệu suất tốt trong các hệ thống nhỏ**: Vì việc gọi hàm nội bộ nhanh hơn so với các giao tiếp qua mạng giữa các dịch vụ.
-   **Nhược điểm:**
    -   **Khó mở rộng, bảo trì**: Khi ứng dụng lớn lên, việc mở rộng hệ thống trở nên phức tạp, vì toàn bộ hệ thống phải được nhân bản thay vì chỉ mở rộng các thành phần riêng lẻ.
        => Một thay đổi nhỏ có thể yêu cầu biên dịch và triển khai lại toàn bộ ứng dụng, dễ gây ra lỗi và thời gian ngừng hoạt động.
    -   **Khả năng thử nghiệm và triển khai kém linh hoạt**: Không thể triển khai hoặc thử nghiệm từng phần của hệ thống một cách độc lập, mà phải triển khai toàn bộ ứng dụng mỗi khi có thay đổi.
    -   **Không linh hoạt trong việc áp dụng công nghệ mới**: Do sự phụ thuộc chặt chẽ giữa các thành phần, việc thay đổi công nghệ hoặc thư viện trong một phần của hệ thống có thể yêu cầu thay đổi toàn bộ hệ thống.

#### Nên dùng khi nào?

-   **Ứng dụng nhỏ hoặc vừa**: có thể là lựa chọn tốt.
-   **Dự án khởi đầu**: giúp phát triển nhanh chóng và ít phức tạp hơn so với microservices.
-   **Tần suất thay đổi, mở rộng thấp**: Monolithic có thể đáp ứng tốt.

### Microservices Architecture

> **Microservices** là kiến trúc trong đó các ứng dụng lớn được chia thành các service nhỏ, độc lập, có thể triển khai và phát triển riêng biệt. Mỗi service tập trung vào một chức năng cụ thể của hệ thống và giao tiếp với các dịch vụ khác thông qua các giao thức như `HTTP`, `gRPC` hoặc thông qua `message queues`.
