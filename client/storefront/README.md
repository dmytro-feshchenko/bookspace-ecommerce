# Storefront for bookstore playground

## Description

This is a storefront (UI) for ecommerce store. Provides basic functionality for customers, such as:
- [ ] Books catalog (with filters, search, etc.)
- [ ] Book details page (book info, downloads, preview, read online, audio player)
- [ ] Add to cart, checkout
- [ ] Profile (access to previous purchases)
- [ ] Wishlist

## Other info:

Bootstrapped from:
[Next.js](https://nextjs.org/) framework.

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

Go to [localhost:3000](http://localhost:3000)

### Manual installation (without Docker):

Install Node.js and npm/yarn on your local machine

```bash
$ npm i
$ npm run dev
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

## License

This project is [MIT licensed](LICENSE).
