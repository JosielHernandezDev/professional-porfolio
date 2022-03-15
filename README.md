<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://josielhernandez.gatsbyjs.io">
    <img alt="Gatsby" src="https://josielhernandez.gatsbyjs.io/static/1d7fc9a6e393b834e714b2db3a9b4700/5dea8/logo.png" width="60" />
  </a>
</p>
<h1 align="center">
 This is my professional profolio build whit ReactJS
</h1>

Hi, I´m Josiel Hernandez, I´m a FrontEnd Developer. This project is a ReactJs and Gatsby site to connect my gitHub profile and a site as portfolio

1.  **Section "About me"**

![image](https://user-images.githubusercontent.com/73715766/158483070-b71d8642-7a43-4378-b9c0-9e92b24a569b.png)

2.  **Section "What I Do"**

![image](https://user-images.githubusercontent.com/73715766/158483245-7bda0bbe-dce2-4c63-b19d-c9a5d7df0ade.png)

3.  **Section "Open Source Projects"**

![image](https://user-images.githubusercontent.com/73715766/158483328-6ea511ed-cb20-4097-9b1a-d9de4e92ff32.png)


## 🚀 Quick start

1. **Install Dependencies.**

   ```shell
    # npm install
    ```

2.  **Run develop envoroment.**

    ```shell
    npm run dev
    ```
    
    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    **The project have a "Fetch.js" to creat a "Profile.js" data"**
    
    ```JS
    fs = require("fs")
    const https = require("https")
    process = require("process")
    require("dotenv").config()

    const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
    const GITHUB_USERNAME = process.env.GITHUB_USERNAME
    const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA
    const ERR = {
      noUserName:
        "Github Username was found to be undefined. Please set all relevant environment variables.",
      requestFailed:
        "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
      requestFailedMedium:
        "The request to Medium didn't succeed. Check if Medium username in your .env file is correct.",
    }

    if (USE_GITHUB_DATA === "true") {
      if (GITHUB_USERNAME === undefined) {
        throw new Error(ERR.noUserName)
      }

      console.log(`Fetching profile data for ${GITHUB_USERNAME}`)
      var data = JSON.stringify({
        query: `
    {
      user(login:"${GITHUB_USERNAME}") { 
        name
        bio
        isHireable
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
              node {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazers {
                    totalCount
                  }
                  url
                  id
                  diskUsage
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
    }
    `,
      })
      const default_options = {
        hostname: "api.github.com",
        path: "/graphql",
        port: 443,
        method: "POST",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "User-Agent": "Node",
        },
      }

      const req = https.request(default_options, res => {
        let data = ""

        console.log(`statusCode: ${res.statusCode}`)
        if (res.statusCode !== 200) {
          throw new Error(ERR.requestFailed)
        }

        res.on("data", d => {
          data += d
        })
        res.on("end", () => {
          fs.writeFile("./public/profile.json", data, function (err) {
            if (err) return console.log(err)
            console.log("saved file to public/profile.json")
          })
        })
      })

      req.on("error", error => {
        throw error
      })

      req.write(data)
      req.end()
    }
    ```
    
## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-default)

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.


## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/products/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

<!-- AUTO-GENERATED-CONTENT:END -->
