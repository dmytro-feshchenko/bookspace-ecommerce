# API for bookstore playground

## Description

This is an API for bookstore app.

## Planned features:
- [+] Docker based with multi-stage build
- [ ] Micro-services (based on Nest.js)
- [ ] GraphQL
- [ ] Redis (caching, communication between microservices, might be used for recommendation engine)
- [ ] PostgreSQL in role of DBs

## Planned entities:
- [ ] Books
- [ ] Authors
- [ ] Genres
- [ ] Tags, Categories
- [ ] Users
- [ ] Carts, Purchases
- [ ] Stocks


## Other info:

Bootstrapped from:
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

Copy .env.example as .env
```bash
cp .env.example .env
```

### For Docker based installation (easy way):

Run
```bash
make build
```

Go to [localhost:3300](http://localhost:3300)

### Manual installation (without Docker):

Install Node.js and npm on your local machine

```bash
$ npm i
$ npm run start:dev
```

Go to [localhost:3000](http://localhost:3000)

## Commands

We are using Makefile with the following commands available:

```bash
# development
$ make run [optional_args]

# enter to bash
$ make enter [service_name]
# e.g. make enter api

# build containers
$ make build

# logs
$ make logs [optional_args]
```

## GraphQL

We use schema first approach here, so generate interfaces/classes based on GraphQL schemas.

When application starts it generates appropriate structures from files in `graphql` directory.

You can run script to generate these on demand:

```bash
ts-node generate-typings
```

### GraphQL Playground
Go to [localhost:3300/grahql](http://localhost:3300/graphql) to see GraphQL IDE

## Debug

If you are using Visual Studio Code:

Copy `docker/helpers/vscode_launch.json` to your `.vscode/.launch.json` (or edit it in either User/Workspace settings)

Change `docker-compose.yml`
```bash
#from
command: npm run start:dev

# to
command: npm run start:debug
```

And rebuild your containers
```bash
make build
```

This step will be tuned in a future...

## License

This project is [MIT licensed](LICENSE).
