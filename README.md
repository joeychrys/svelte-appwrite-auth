# SvelteKit Appwrite Authentication Demo

This project shows how to use Appwrite's authentication API to enable user registration, login, and logout with an email session. With this app, you can test the different authentication flows and see how they work in a Svelte-Kit application. 

This project assumes that you have already set up an Appwrite server or already hosting with Appwrite. For more information on how to get started with Appwrite, here are some of my favorite links:

- [Appwrite documentation](https://appwrite.io/doc)
- [Linode documentation for getting started with Appwrite](https://www.linode.com/docs/guides/getting-started-appwrite/)
- [Appwrite Youtube channel](https://www.youtube.com/watch?v=aO4mw8smXkI)

Also, feel free to reach out to me on discord if you need any help; yoyojoe#5510

# Installation

Clone the repository:

```bash
git clone https://github.com/joeychrys/svelte-appwrite-auth.git
```

Change into the project directory:

```bash
cd svelte-appwrite-auth
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

# Tips and Tricks

* Make sure that when a user is created that they are "verified". You can verify users through the Appwrite console or use email verification. If the account is not "verified" then you can not create an email session.

# Contributing
Thank you for your interest in helping! Feel free to make a PR if anything needs to be fixed/ updated.

# License
The source code for this project is licensed under the MIT license, which you can find in the MIT-LICENSE.txt file.
