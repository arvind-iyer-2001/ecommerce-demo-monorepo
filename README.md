# Ecommerce-Demo Applications
This is an Ecommerce Service, quite similar to Shopify. There is an Admin Dashboard to Manage all your stores and their metrics. For each store, a website can be created, by just deploying the store application and setting the environment variables.

## Technologies used
- Next 13 (App Router)
- React
- Shadcn UI
- PlanetScale/MySQL
- Clerk
- Tailwind
- React Hook Forms
- Prisma
- Stripe
- Axios

## Getting Started
0. Clone this repository
```bash
    git clone https://github.com/arvind-iyer-2001/ecommerce-demo-monorepo
```

1. Set Up Environment
```bash
    cd ./admin
    cp .env.example .env
```

Replace the following fields in the ./admin/.env file
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=PUBLIC_CLERK_PUBLISHABLE_KEY-Replace
CLERK_SECRET_KEY=CLERK_SECRET_KEY-Replace
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL='mysql://<username>:pscale_pw_<password>@aws.connect.psdb.cloud/database_name?sslaccept=strict'-Replace

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="******"
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="*******"

STRIPE_API_KEY=pk_test_-----------------------
STRIPE_API_SECRET=sk_test_--------------------
STRIPE_WEBHOOK_SECRET=whsec_------------------

FRONTEND_STORE_URL=http://localhost:8081
```


```bash
    cd ./store
    cp .env.example .env
```

Sync the Prisma Schemas with the local environment and the database Provider
```bash
    pnpm init
```
  
4. Run the development server for the admin app:
```bash
    pnpm run admin:dev
```

5. Open [http://localhost:8080](http://localhost:8080) with your browser to see the admin app.

6. Create your own store using the admin app and copy the NEXT_PUBLIC_API_URL from the Settings tab, paste it into your ./store/.env file. 

7. Run the development server for the admin app:
```bash
    pnpm run store:dev
```
Then open [http://localhost:8081](http://localhost:8081) with your browser to see the admin app.

## Learn More

To learn more about some of the technologies used in this, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive guide and API reference for Next.js, a popular React framework for server-rendered applications.
- [Shadcn](https://ui.shadcn.com/) - A toolset for building your own component library, making UI development faster and more efficient.
- [Clerk](https://dashboard.clerk.com/) - Provides ready-to-use user management UIs and APIs, optimized for React and Next.js applications.
- [PlanetScale](https://planetscale.com/) - A database service platform based on MySQL, designed for scalability and ease of use.
- [Prisma](https://www.prisma.io/) - An open-source database toolkit that includes an ORM for Node.js and TypeScript, making database access easier and more efficient.
- [Stripe](https://stripe.com/) - A payment processing service that offers a set of APIs and tools to manage online transactions, subscriptions, and other financial operations.
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development, allowing for highly customizable designs with less CSS.
- [React Hook Forms](https://react-hook-form.com/) - A React library for building forms with built-in hooks, making form validation and management easier.

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
