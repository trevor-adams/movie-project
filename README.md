# Movie Project

Add a brief description of this project

## Getting started

### Initial setup

Copy `.env.example` to `.env` and fill out the `.env` file with your environment variables!

```sh
cp .env.example .env
```

Now you're ready to set everything up locally:

1. **Install Docker** by following their [installation instructions for your OS](https://docs.docker.com/get-docker/).

2. **Start the local development database** with `docker-compose`:

```sh
docker-compose up
```

3. **Install the dependencies** with `npm`:

```sh
npm install
```


4. **Push the schema to the local development database** with `npx`:

```sh
npx prisma db push
```

5. **Seed the local development database** with `npx`:

```sh
npx prisma db seed
```