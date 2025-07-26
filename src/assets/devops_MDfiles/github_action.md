# Github Action

## Concepts - [Github Action](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions)

> `GitHub Actions` is a **CI/CD platform** that allows you to automate your build, test, and deployment pipeline.

> `Workflows` is a configurable automated process that will run one or more jobs.

-   `Workflows` are defined by a **.yml/.yaml** file checked in to your repository(in `.github/workflows`) and **will run when triggered by an event(push, pull request,...) in your repository**, or **they can be triggered manually**, or **at a defined schedule.**
-   A repository can have multiple workflows(by defining them in different .yml files in the `.github/workflows` directory), each of which can perform a different set of tasks such as:
    -   Building and testing pull requests
    -   Deploying your application every time a release is created
    -   Adding a label whenever a new issue is opened
-   A workflow basic:
    -   1️⃣ One or more events that will trigger the workflow.
    -   2️⃣ One or more jobs, each of which will execute on a runner machine and run a series of one or more steps.
    -   3️⃣ Each step can either run a script that you define or run an action, which is a reusable extension that can simplify your workflow.
        <img src="https://docs.github.com/assets/cb-25535/mw-1440/images/help/actions/overview-actions-simple.webp" alt="Workflow basic">

> An `event` is a specific activity in a repository that triggers a workflow run.

-   There are some ways to trigger a workflow: - Events that occur in your workflow's repository - Events that occur outside of GitHub and trigger a repository_dispatch event on GitHub - Scheduled times - Manual

> A `job` is a set of steps in a workflow that is executed on the same runner. Each step is either **a shell script** that will be executed, or **an action** that will be run. Steps are **executed in order** and are **dependent on each other**.

-   You can configure a job's dependencies with other jobs. By default, jobs have no dependencies and **run in parallel**. When a job takes a dependency on another job (using the `needs` keyword), it waits for the dependent job to complete before running.

> An `action` is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task.

-   Use an `action` to help reduce the amount of repetitive code that you write in your workflow files.
-   An `action` can **pull** your Git repository from GitHub, set up the correct **toolchain** for your build environment, or set up the **authentication** to your cloud provider.
-   You can **write your own** actions, or you can find `actions` to use in your workflows in the **GitHub Marketplace**.

> A `runner` is a server that runs your workflows when they're triggered. Each runner can run a single job at a time.

-   GitHub provides **Ubuntu Linux**, **Microsoft Windows**, and **macOS** runners to run your `workflows`.
-   Each `workflow` run executes in a **fresh**, **newly-provisioned** virtual machine.

> `Workflow templates` are templates that help you to create your own `GitHub Actions workflows` for a repository instead of starting from a **blank** workflow file and are useful because some of the work will **already have been done** for you.

-   To use a workflow template, search for the template you want in the **Actions** tab of the repository you want to use the template in. Then click **Configure**, modify template and click **Commit Changes ...** on the top of the page to apply.

> `Variables` provide a way to store and reuse non-sensitive configuration information. You can store any configuration data such as compiler flags, usernames, or server names as variables.

-   `Variables` are interpolated on the runner machine that runs your workflow. Commands that run in actions or workflow steps can create, read, and modify variables.
-   You can **set your own** custom variables or **use the default** environment variables that GitHub sets automatically.
-   You can set a custom variable in two ways:

    -   For using in **a single workflow**, you can use the `env` key in the workflow file. You can define variables that are scoped for:

        -   The entire workflow, by using **env** at the top level of the workflow file.
        -   The contents of a job within a workflow, by using **jobs.<job_id>.env**.
        -   A specific step within a job, by using **jobs.<job_id>.steps[*].env**.

    -   To define a configuration variable **across multiple workflows**, you can define it at the organization, repository, or environment level.

-   Naming convention:
    -   ✅ Can contain a-zA-z0-9, underscore. Must be unique. Case insensitive.
    -   ❌ Cannot start with a number, **GITHUB\_** prefix, contains whitespace.

> `Contexts` are a way to access information about workflow runs, variables, runner environments, jobs, and steps. Syntax: `${{ <context> }}`

-   Each context is an object that contains properties, which can be strings or other objects.

-   Contexts:
 
| Context name | Type   | Description                                                                                                                                                                                                                                                              |
| ------------ | ------ |  ------------------------------------------------------- |
| `github`     | object | Information about the workflow run. See [Github context](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs#example-contents-of-the-github-context)                              |
| `env`        | object | Contains variables set in a workflow, job, or step. See [Env context](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs#example-usage-of-the-env-context)                       |
| `vars`       | object | Contains variables set at the repository, organization, or environment. See [vars context](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs#example-usage-of-the-vars-context) |
| `job`        | object | Information about the currently running job.                                                                                                                                                                                                                             |
| `jobs`       | object | For reusable workflows only, contains outputs of jobs from the reusable workflow.                                                                                                                                                                                        |
| `steps`      | object | Information about the currently running step.                                                                                                                                                                                                                            |
| `runner`     | object | Information about the runner that is running the workflow.                                                                                                                                                                                                               |
| `secrets`    | object | Contains the names and values of secrets that are available to a workflow run.                                                                                                                                                                                           |
| `strategy`   | object | Information about the matrix execution strategy for the current job.                                                                                                                                                                                                     |
| `matrix`     | object | Contains the matrix properties defined in the workflow that apply to the current job.                                                                                                                                                                                    |
| `needs`      | object | Contains the outputs of all jobs that are defined as a dependency of the current job.                                                                                                                                                                                    |
| `inputs`     | object | Contains the inputs of a reusable or manually triggered workflow.                                                                                                                                                                                                        | ------------------------------------------------------- |

-   As part of an expression, you can access context information using one of two syntaxes.
    -   Index syntax: **github['sha']**
    -   Property dereference syntax: **github.sha**

> `Expressions` is used to programmatically set environment variables in workflow files and access contexts.

-   An `expression` can be any combination of literal values, references to a context, or functions. You can combine literals, context references, and functions using operators.
-   `Expressions` are commonly used with the conditional if keyword in a workflow file to determine whether a step should run. When an if conditional is true, the step will run.
-   Syntax: `${{ <expression> }}`. Example:

```yml
env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    NULL_ENV: ${{ null }}
    BOOLEAN_ENV: ${{ false }}
    INT_ENV: ${{ 711 }}
    FLOAT_ENV: ${{ -9.2 }}
    HEX_ENV: ${{ 0xff }}
    EXPO_ENV: ${{ -2.99e-2 }}
    STRING_ENV: Mona the Octocat
    STRING_IN_BRACKETS_ENV: ${{ 'It''s open source!' }}
```

-   Operator: `() [] . ! > <= == != && ||`

    -   Github ignores case when comparing strings. Example: `abc`, `ABC`, `AbC` is always true when comparing.
    -   **steps.<step_id>.outputs.<output_name>** evaluates as a string.
    -   For numerical comparison, the `fromJSON()` function can be used to convert a string to a number.
    -   GitHub performs loose equality comparisons. If the types do not match, GitHub coerces the type to a number(**null -> 0, true -> 1, false -> 0, "" -> 0, "1" -> 1, "a1" -> NaN, array -> NaN, object -> NaN, undefined -> NaN**).
    -   When `NaN` is one of the operands of any relational comparison (`>, <, >=, <=`), the result is always **false**.
    -   **Objects** and **arrays** are only considered **equal** when they are the **same instance**.

-   `Ternary operator` can use in expressions to dynamically **set the value** of an environment variable based on a **condition**, **without** having to write separate **if-else blocks** for each possible option. Ex:

    ```yml
    env:
        MY_ENV_VAR: ${{ github.ref == 'refs/heads/main' && 'value_for_main_branch' || 'value_for_other_branches' }}
    ```

-   GitHub offers a set of `built-in functions` that you can use in expressions. Some functions **cast values to a string** to perform comparisons. (null -> '', boolean -> 'true | false', array|object -> cannot convert to string, number -> decimal)

    -   `contains('Hello world', 'llo')` returns true. `contains(github.event.issue.labels.*.name, 'bug')` returns **true** if the issue related to the event has a label **"bug"**. `contains(fromJSON('["push", "pull_request"]'), github.event_name)` returns true if **github.event_name** is **"push"** or **"pull_request"**.
    -   `startsWith('Hello world', 'He')` returns true.
    -   `endsWith('Hello world', 'ld')` returns true.
    -   `format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')` returns **"Hello Mona the Octocat"**. `format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')` returns **"{Hello Mona the Octocat!}"**.
    -   `join(github.event.issue.labels.*.name, ', ')` may return **'bug, help wanted'**.
    -   `toJSON(job)` might return **{ "status": "success" }**.
    -   `fromJSON(value)` returns a JSON object or JSON data type for value.

    ```yml
    name: build
    on: push
    env:
        continue: true
        time: 3
    jobs:
        job1:
            runs-on: ubuntu-latest
            env:
                local_env: "This env variable is only used in job1"
            outputs:
            matrix: ${{ steps.set-matrix.outputs.matrix }}
            steps:
            - id: set-matrix
              run: echo "matrix={\"include\":[{\"project\":\"foo\",\"config\":\"Debug\"},{\"project\":\"bar\",\"config\":\"Release\"}]}" >> $GITHUB_OUTPUT
            - name: "Say Hello Mona it's Monday"
              run: echo "$local_step_env $local_env. The global env times is $time!"
              env:
                local_step_env: Mona
        job2:
            needs: job1
            runs-on: ubuntu-latest
            strategy:
            matrix: ${{ fromJSON(needs.job1.outputs.matrix) }}
            steps:
                - run: echo "Matrix - Project ${{ matrix.project }}, Config ${{ matrix.config }}"
        job1:
            runs-on: ubuntu-latest
            steps:
                - continue-on-error: ${{ fromJSON(env.continue) }}
                  timeout-minutes: ${{ fromJSON(env.time) }}
                  run: echo ...
    ```

    -   Status check functions: `success()`, `failure()`, `cancelled()`, `always()`

    ```yml
    steps:
        ...
        - name: Failing step - trigger cancellation workflow
            id: demo
            run: exit 1
        - name: The job will excute - returns true when all previous steps have succeeded.
          if: ${{ success() }}
        - name: The job has always run regardless of success or failure
          if: ${{ always() }}
        - name: The job will excute - returns true if the workflow was canceled.
          if: ${{ cancelled() }}
        - name: The demo step will excute - returns true when any previous step of a job fails
            if: ${{ failure() && steps.demo.conclusion == 'failure' }}
    ```

    -   Object filters:

    ```yml
    [{ "name": "apple", "quantity": 1 }, { "name": "orange", "quantity": 2 }, { "name": "pear", "quantity": 1 }]
    # The filter fruits.*.name returns the array [ "apple", "orange", "pear" ].

    {
    "scallions":
        {
            "colors": ["green", "white", "red"],
            "ediblePortions": ["roots", "stalks"],
        },
    "beets":
        {
            "colors": ["purple", "red", "gold", "white", "pink"],
            "ediblePortions": ["roots", "stems", "leaves"],
        },
    "artichokes":
        {
            "colors": ["green", "purple", "red", "black"],
            "ediblePortions": ["hearts", "stems", "leaves"],
        },
    }
    # The filter vegetables.*.ediblePortions could evaluate to:
        [
            ["roots", "stalks"],
            ["hearts", "stems", "leaves"],
            ["roots", "stems", "leaves"],
        ]
    ```

### Custom a worklow template

-   Start a workflow by creating a new file in the `.github/workflows` directory. The file will be called `custom-workflow.yml`.

```yml
name: custom-workflow

on: # Trigger the workflow with the 'on' key
    push:
        branches: [master, dev, "!dependabot"]
        branches-ignore: [dependabot]
        tags: # Sequence of patterns matched against refs/tags
            - v2
            - v1.*
        paths:
            - "**.js"
            - "!**.log" # Ignore all log files
        paths-ignore:
            - "docs/**"
    # Multiple events to trigger the workflow. Note: If multiple triggering events for your workflow occur at the same time, multiple workflow runs will be triggered.
    pull_request:
    fork:
    issues:
        types:
            - closed
    schedule:
        # Daily at 8:20 UTC
        - cron: '20 8 * * *'

    workflow_dispatch: # Manually trigger the workflow
        inputs:
            logLevel:
                description: "Log level"
                required: true
                default: "warning"
                type: choice
                options:
                    - info
                    - warning
                    - debug
            tags:
                description: "Test scenario tags"
                required: false
                type: boolean
            environment:
                description: "Environment to run tests against"
                type: environment
                required: true
            chosen-os:
                required: true
                type: choice
                options:
                    - ubuntu-latest
                    - macos-latest
                    - windows-latest
                    - macos-13
                description: "Chosen OS to run the build job on"
    workflow_run: # you can use this event to specify what branches the triggering workflow must run on in order to trigger your workflow.
        workflows: ["Build"]
        types: [requested]
        branches:
            - "releases/**"
            - "!releases/**-alpha"
        branches-ignore:
            - "dependabot/**"

jobs:
    build:
        if: github.event.label.name == 'bug' # Only run the job if the issue has the 'bug' label. You must always use the ${{ }} expression syntax
        runs-on: [ubuntu-latest, "${{ inputs.chosen-os }}"] #  define the type of machine (runner) to run the job on.
            # group: ubuntu-runners
            # labels: ubuntu-20.04-16core
        env:
            NODE_ENV: production
            NODE_VERSION: 18
        container:
            image: node:$NODE_VERSION
            credentials:
                username: ${{ github.actor }} # ${{ secrets.DOCKER_USERNAME }}
                password: ${{ secrets.DOCKER_PASSWORD }}
            env:
                NODE_ENV: development
            ports:
                - 80
            volumes:
                - my_docker_volume:/volume_mount
            options: --cpus 1
        steps:
            - uses: actions/checkout@v2
            - name: Setup .NET
              if: github.event.issue
              uses: actions/setup-dotnet@v1
              with:
                  dotnet-version: 5.0.x
            - name: Build
              run: dotnet build --configuration Release --no-restore
            - name: Test
              run: dotnet test --no-restore --verbosity normal
            - name: bash-version
              run: echo "::add-mask::$NODE_VERSION version Node.js"
    log-the-inputs:
        runs-on: ubuntu-latest
         # This job will run after the prequisite job is completed regardless of success or failure
        if: ${{ always() }}
        needs: [build] # The prerequisite job ids
        steps:
            - run: |
                echo "Log level: $LEVEL"
                echo "Tags: $TAGS"
                echo "Environment: $ENVIRONMENT"
            env:
                LEVEL: ${{ inputs.logLevel }}
                TAGS: ${{ inputs.tags }}
                ENVIRONMENT: ${{ inputs.environment }}
            - name: Use the repository action
                uses: actions/checkout@v4
            - name: Use the local action
                uses: ./github/actions/build-artifact-action
            - name: Referencing a container on Docker Hub
                uses: docker://alpine:latest # reference the action with the docker://{image}:{tag} format
    demo-run-command:
        runs-on: ubuntu-latest
        steps:
            - run: npm i -g bats
    demo-run-script:
        defaults:
        run:
            working-directory: ./scripts
        steps:
            - name: Check out the repository to the runner
              uses: actions/checkout@v4
            - name: Run a script
              run: ./my-script.sh
            - name: Run another script
              run: ./my-other-script.sh
```

-   An example of using `workflow_dispatch` to enable a workflow to be triggered manually,
    <img src="https://docs.github.com/assets/cb-78157/mw-1440/images/help/actions/workflow-dispatch-inputs.webp" />
