# Svelte-Kit Appwrite Authentication Demo

This project shows how to use Appwrite's authentication API to enable user registration, login, and logout with email secession. With this app, you can test the different authentication flows and see how they work in a Svelte-Kit application. 

This project assumes that you have already set up an Appwrite server or already hosting with Appwrite. For more information on how to get started with Appwrite, here are some of my favorite links:

- [Appwrite documentation](https://appwrite.io/doc)
- [Linode documentation for getting started with Appwrite](https://www.linode.com/docs/guides/getting-started-appwrite/)
- [Appwrite Youtube channel](https://www.youtube.com/watch?v=aO4mw8smXkI)


# Installation

Clone the repository:

```bash
git clone https://github.com/username/project-name.git
```

Change into the project directory:

```bash
cd project-name
```

Install dependencies using yarn:

```bash
yarn install
```

# Environment Variables

Before starting the application, you need to create a .env file in the root directory of the project. You can use the .env.example file as a reference. The following environment variables need to be defined:

```bash
VITE_APP_ENDPOINT=https://yourappdomain/v1
VITE_APP_PROJECT=AppwriteProjectID
```

# Usage

To start a local development server, run the following command:

```bash
yarn dev
```

This will start the development server and your app should be available at `http://localhost:5173/`.
