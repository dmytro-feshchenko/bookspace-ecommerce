SHELL:=/bin/bash
.DEFAULT_GOAL := init
# put here commands, that have the same name as files in dir
.PHONY: build run logs clean kill init enter start stop restart

include .env

# Allows to pass arguments to restart or enter command
# e.g. 'make restart api'. Comma in the end is not the typo.
ifeq (,$(filter $(firstword $(MAKECMDGOALS)), build, start, stop, restart, kill, logs, run, enter, ))
  # use the rest as arguments for Goal command
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  # ...and turn them into do-nothing targets
  $(eval $(RUN_ARGS):;@:)
endif

# build node and npm install
build:
	docker-compose up --build -V $(RUN_ARGS)

# run docker-compose
run:
	docker-compose up $(RUN_ARGS)

# docker-compose up with daemon
daemon:
	docker-compose up -d

# start container
start:
	docker-compose start $(RUN_ARGS)

# stop container
stop:
	docker-compose stop $(RUN_ARGS)

# restart container
restart:
	docker-compose restart $(RUN_ARGS)

# login to /bin/bash
enter:
	docker-compose exec $(RUN_ARGS) sh

# kill docker container
kill:
	docker-compose kill $(RUN_ARGS)

logs:
	docker-compose logs --follow $(RUN_ARGS)