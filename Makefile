PACKAGE_DIR=dist/
ifdef DOTENV
	DOTENV_TARGET=dotenv
else
	DOTENV_TARGET=.env
endif
ifdef AWS_ROLE
	ASSUME_REQUIRED?=assumeRole
endif

################
# Entry Points #
################

shell: $(DOTENV_TARGET)
	docker-compose run -p 8080:8080 --rm serverless make _shell

start: $(DOTENV_TARGET)
	docker-compose run -p 8080:8080 --rm serverless make _deps _start

test: $(DOTENV_TARGET)
	docker-compose run --rm serverless make _deps _testUnitWithCoverage

build: $(DOTENV_TARGET)
	docker-compose run --rm serverless make _deps _build

deploy: $(DOTENV_TARGET) $(ASSUME_REQUIRED)
	docker-compose run --rm serverless make _deps _build _deploy _cacheInvalidation

cacheInvalidation:
	docker-compose run serverless make _cacheInvalidation

remove: $(DOTENV_TARGET)
	docker-compose run --rm serverless make _remove

assumeRole: .env
	docker run --rm -e "AWS_ACCOUNT_ID" -e "AWS_ROLE" amaysim/aws:1.1.3 assume-role.sh >> .env
.PHONY: assumeRole

##########
# Others #
##########

# Create .env based on .env.template if .env does not exist
.env:
	@echo "Create .env with .env.template"
	cp .env.template .env

# Create/Overwrite .env with $(DOTENV)
dotenv:
	@echo "Overwrite .env with $(DOTENV)"
	cp $(DOTENV) .env

_shell: _registry
	bash

_registry:
	echo "//registry.npmjs.org/:_authToken=$(NPM_TOKEN)" >> .npmrc
	yarn config set registry http://registry.npmjs.org

# _deps depends on node_modules
_deps: node_modules

# run yarn install
node_modules:
	echo "//registry.npmjs.org/:_authToken=$(NPM_TOKEN)" >> .npmrc
	yarn config set registry http://registry.npmjs.org
	yarn install

_test:
	yarn run lint
	yarn run test
	# yarn run pact-test

_systemTest:
	yarn run system-test

_testUnitWithCoverage:
	yarn run lint
	./node_modules/nyc/bin/nyc.js --reporter=json yarn run test
	./node_modules/codeclimate-test-reporter/bin/codeclimate.js < ./coverage/lcov.info
	# yarn run pact-test

_testUnit:
	yarn run test

_testUnitWatch:
	yarn run test -- --watch

# _build runs WebPack, which transcompiles the src folder using Babel, installs nodejs production modules, and creates a package ready for upload to S3.
_build:
	yarn run build

_cacheInvalidation:
	aws cloudfront create-invalidation --distribution-id=$(shell aws cloudformation --region ap-southeast-2 describe-stacks --stack-name $(REALM)-$(PROJECT)-$(ENV) --query 'Stacks[0].Outputs[?OutputKey==`WebAppCloudFrontDistributionIdOutput`].OutputValue' --output=text) --paths "/*"

_start:
	yarn start

_deploy:
	mkdir -p dist
	rm -fr .serverless
	sls deploy -v --force
	sls syncToS3 -v
	sls domainInfo -v

_remove:
	sls remove -v
	rm -fr .serverless

_clean:
	rm -fr node_modules .serverless dist
