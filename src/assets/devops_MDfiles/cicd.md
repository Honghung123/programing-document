# CI / CD

## Concepts

> `Continuous Integration (CI)` refers to the practice of automatically and frequently integrating code changes into a shared source code repository.

-   When you commit code to your repository, you can continuously **build** and **test** the code to make sure that the commit doesn't introduce errors. Your tests can include **code linters** (which check style formatting), **security checks**, **code coverage**, **functional tests**, and other custom checks.
-   Building and testing your code **requires a server**. You can build and test updates **locally** before pushing code to a repository, or you can **use a CI server** that checks for new code commits in a repository.

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
