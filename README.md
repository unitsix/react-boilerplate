# unitsix/react-boilerplate

[![Build Status](https://travis-ci.com/unitsix/react-boilerplate.svg?branch=master)](https://travis-ci.com/unitsix/react-boilerplate) [![Maintainability](https://api.codeclimate.com/v1/badges/0906f22527d1b99a4cb8/maintainability)](https://codeclimate.com/github/unitsix/react-boilerplate/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/0906f22527d1b99a4cb8/test_coverage)](https://codeclimate.com/github/unitsix/react-boilerplate/test_coverage)

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
* BIT_TOKEN
* CODECLIMATE_REPO_TOKEN

If using bit.dev; to get token you will need to run `make bitToken` follow the URL in terminal to login, the token will be provided, added to .env and .npmrc

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

## Slack
Add to travis

```bash
travis encrypt "XXX:xxxx" --add notifications.slack --com
```

View in apps in Slack
