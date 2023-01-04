# **API BOILER PLATE:**

## <ins> **Stack:**</ins>

- Typescript
- NodeJs
- Express
- Prisma

# **DOCUMENTATION:**

## <ins>**Dev Build:**</ins>

### <ins>**With database config:**</ins>

If you want to use the database with Prisma, If you want to use the database with Prisma, you will first have to decide what type of database you want to use (mysql, postgresql, mongodb, etc...)

To do this, you will first need to configure your database, (In the case of a "mysql" database):

1. Go to the ./prisma/schema.prisma file, and configure your database as follows:

        datasource db {
            provider = "mysql"
            url = env("DATABASE_URL")
        }

2. Create an ".env" file then add an environment variable "DATABASE_URL" with the value of your database uri as follows:

        DATABASE_URL=<PROTOCOL>://<ID>:<PASSWORD>@localhost:3306/<DATABASE_NAME>

3. Design your database schema on the ./prisma/schema.prisma

4. You can seed your database from a ./prisma/seed.ts file

<br>

Then run:

    pnpm build:dev:db || npm run build:dev:db

You can take a look at the prisma documentation here **-> [Prisma Documentation](https://www.prisma.io/docs) <-**

### <ins>**Without database config:**</ins>

Run:

    pnpm build:dev || npm run build:dev