# unitsix/react-boilerplate

## Pre-requisites

* Docker
* Docker Compose
* Make

## Checkout & Install

```bash
git clone https://github.com/unitsit/react-boilerplate.git
cd ./react-boilerplate
make build
```

## Configure

Generate a new .env file.

```bash
make .env
```

Copy and paste appropriate values from the secret store into your local .env file. **Warning: Never commit this file.**

* NPM_TOKEN
* CODECLIMATE_REPO_TOKEN

## Develop

Run the solution:

```bash
make shell
bash# make _start
```

To see the app running locally, you can access it at http://0.0.0.0:8080/ on your local machine.

Run tests:

```bash
make
bash# make _test           # All tests
bash# make _testUnitWatch  # Only unit tests, in watch mode
```

## Build

Fully test and build SPA package:

```bash
make build
```

## Deploy

Deploy to AWS S3:

```bash
make deploy
```
