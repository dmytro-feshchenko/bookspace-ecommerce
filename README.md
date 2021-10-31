# Bookstore playground

This is some sort of real-world app (can I call it like that?) serving as a playground for trying different experimental approaches. Need to refresh some of the concepts in memory + would be nice to combine all of them together and try some wild and crazy combinations. It's a simple pet project, nothing more, so not expecting to make it next Netflix/Facebook/TicTok/Telegram/etc.

But feel free to use some of the components for your experiments :)

## Description

This is going to be a plain simple e-commerce store. Don't really want to dive into some unfamiliar business domain, so stopped on selling/distributing books (which should be close to most of people anyway).

Never tried to serve Next.js via Nest.js (with SSR + PWA + caching), so it should be interesting.

I think it would be better to keep the project as simple as possible in terms of functionality + avoid complicated business requirements (e.g. delivery, retailers, warehouses, etc.). Most probably will make some mock `stock` service in API and that's that. So, just need to update quantities in this service with proper API calls.

## Project structure:

## Main features:
- [ ] Catalog with books (physical/digital/audio) + filtering
- [ ] Shopping logic (add to cart, checkout with Stripe/PayPal/..., giftcards, etc.).
- [ ] Rating system (reviews, popularity, sort by, third-party services, etc.)
- [ ] Stream audio + read books online, downloadable content
- [ ] Profile (see purchases)
- [ ] Dashboard (manage books, genres, authors, etc.)

## Some things which might be implemented
- [ ] Third-party integrations (e.g. to convert books between different formats).
- [ ] Recommendations (need to think about it)

## Planned features
- [ ] Monorepo with Docker (docker-compose), don't want to make it too complicated
- [ ] Deploy to DigitalOcean (or any other hosting with Docker support)
- [ ] Travis CI (didn't think too much about it yet)
- [ ] Nest.js API (with micro-services using Redis as transporter, but might also use RPC here).
- [ ] Next.js storefront - e-commerce web app with classic functionality (catalog, filters, cart, checkout, profile, recommendations, etc.).
- [ ] Simple Next.js backend (going to share most of the components with a storefront to speed up development).

### API
Stack: Nest.js (Node.js) based on Express, Redis (as transporter), PostgreSQL (as main DB, need to decide per service), Swagger (docs)
- [ ] Use Redis as transporter
- [ ] GraphQL
- [ ] Split up onto microservices (customers, books, authors, etc.)
- [ ] PostgreSQL (we do have classic relational schema here, no need to overcomplicate this).

### Next.js storefront
Stack: Next.js (React) + Typescript
- [ ] SSR + PWA
- [ ] React Queries + GraphQL
- [ ] Storybook with components library (most probably will be made as shared separate project)
- [ ] Use Jest for testing

### Next.j backend (simple)
Stack: Next.js (React) + Typescript

Need to pull shared components from the storefront and reuse them. No need for SSR or complicated schemas here.
- [ ] Use Jest for testing
- [ ] [Future] Real-time features based on web-sockets (would be nice create some connected widgets on storefront)

## Installation

Just started this project. Need to add a section here as soon as the basic structure is ready.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)