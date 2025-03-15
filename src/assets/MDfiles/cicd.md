# CI / CD

## Concepts

> `Continuous Integration (CI)` refers to the practice of automatically and frequently integrating code changes into a shared source code repository.

> `Continous Delivery/Deployment` là một quy trình gồm 2 phần đề cập đến việc tích hợp, kiểm thử và phân phối các thay đổi mã. `Continous Delivery` dừng lại trước khi deploy automatically in production, while `Continous deployment` automatically releases the updates into the production environment.

> The main idea is to automate the process of integrating code changes, testing them, and deploying them to production.

#### Characteristics:

-   `CI/CD` relies heavily on version control systems like `Git`.
-   CI/CD tools: `Jenkins`, `GitHub Actions`, `GitLab CI`, `CircleCI`, `Travis CI`, etc.
-   `Testing` is a big part of CI/CD. Types of tests: unit, integration, end-to-end.
-   Deployment part environments (`dev`, `staging`, `production`), deployment strategies like `blue-green`, `canary`, `rolling updates`.
-   `Infrastructure management` is part of CD. Tools like `infrastructure as code (IaC)`, `Terraform` or `AWS CloudFormation`.
-   `Monitoring and logging` come after deployment. Tools like Prometheus, Grafana, ELK stack are used to monitor their applications and pipelines to detect issues quickly.
-   `Integrating security checks` into the CI/CD pipeline, like vulnerability scanning for dependencies and container images.
-   Many` CI/CD pipelines` use `Docker` for consistent environments.
