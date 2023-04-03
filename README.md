
# JWT Basics

This is a simple **Login** application built using HTML, CSS, and JavaScript on the frontend, and Node.js and Express.js on the backend. The application uses **JSON Web Tokens (JWT)** for authentication and authorization.
## Tech Stack

**Client:** Html, CSS, Javascript

**Server:** Node, Express


## Installation

  - Download Application
  - cd JWT Basics
  - create .env file
  - set MONGO_URI variable equal to MongoDB connection string.
  - npm start
## Details
#### UI 
The Login application provides a simple and intuitive interface that makes it easy for users to Login and down to login section, there's a dashboard section where message is displayed whether token is present or not.

#### Custom APIs
The application's functionality is powered by a set of custom-built APIs that perform JWT operations like Signing the key and verifying the key.

#### Express as Middleware
Express.js is used as a middleware framework for handling HTTP requests and responses. The application also includes custom async-wrapper and error handling code to ensure that the app is stable and reliable. These custom codes help handle errors in a more efficient way and make sure that the application is not crashing in the event of a failure.

#### Summary
In Summary, **Login** is created only to understand the JWT basics. When a user enters their login credentials, the frontend sends a request to the server, which checks the user's credentials against a database. If the credentials are valid, the server generates a JWT token and sends it back to the frontend.

The frontend then stores the token in local storage and sends it with every subsequent request to the server. The server verifies the token to ensure that the user is authorized to access the requested resources.

This application is designed to help developers understand the basics of JWT-based authentication and authorization mechanisms.

## Author

- [@Pradyumna-Hegde](https://www.github.com/Pradyumna-Hegde)

