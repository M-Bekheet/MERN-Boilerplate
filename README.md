<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.web-dev.works">
    <img alt="Avatar" src="https://raw.githubusercontent.com/Lartwel/lartwel.github.io/master/Emoticons/mern.png?token=AGBYT6UYN4CXD57UPE6KJQS7K5XT2" width="600" />
  </a>
</p>
<h1 align="center">
  MERN Boilerplate
</h1>

> MERN Stack Boilerplate with React TypeScript.

## 🔥 Features

- Stack: React/TypeScript, Node/Express, and MongoDB/Mongoose.
- Registration API Setup (User &amp; Profile Models).
- Authentication Support.
- Frontend is built in Create-React-App with TypeScript support

## 🚀 Quick start

1. **Clone Project.**

```shell
git clone https://github.com/Lartwel/mern
```

1.  **Start developing.**

    Create default.json file in /backend/config directory.
    Write your MongoDB data in the file according to your config like this.

    ```shell
    {
    "mongoURI": "mongodb://127.0.0.1:27017/mern",
    "jwtSecret": "secret"
    }
    ```

    Run your MongoDB client.
    Then navigate into the backend directory and run the full-stack app

    ```shell
    cd backend/
    yarn start
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── backend
      ├── config
      ├── middleware
      ├── models
      ├── routes/api
      ├── node_modules
    ├── client
      ├── src ==> React App Components
      ├── public
      ├── .gitignore
      ├── package.json
      ├── README.md
      ├── tsconfig.json
      └── node_modules
    ├── README.md
