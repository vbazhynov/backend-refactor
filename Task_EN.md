_Congratulations! Not by hearsay, you already know about the Backend structure, NodeJS and how to write clean, readable and high-quality code. But there is one "but"... Not all projects that will come on your way will be written by developers who also know about this as much as you are_

---

### Task

**Refactor** [the project](https://github.com/BinaryStudioAcademy/lecture-starter-backend-structure), **keeping** all it's functionality (oh yeah, **this** is working)

### Project details

- The project has only the backend part
- Whole project functionality is working and even covered by the tests. How to run the server and tests you will know by reading the [README.md](https://github.com/BinaryStudioAcademy/lecture-starter-backend-structure/blob/main/README.md)
- Unfortunately, there is no documentation or the "requirements" regarding the business logic... However - you have the source code, so as they say: `"The code is the documentation"`

![Neo from the Matrix, seating near Oracle and saying: "Who needs documentation, I can read code"](https://i.ibb.co/cN2CmJx/meme1.jpg "Meme")

- Beside of invoking the tests, to figure out the existing business logic - the Postman [collection](https://github.com/BinaryStudioAcademy/lecture-starter-backend-structure/tree/main/postman) is here to help. Please feel free importing it into your own Postman to see the requests examples and playing with those requests during manual testing.

Technologies:

- [NodeJS](https://nodejs.org/en/) + [Express](https://expressjs.com/)
- [Postgres](https://www.postgresql.org/) + [Knex](https://knexjs.org/)
- [Docker](https://www.docker.com/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [joi](https://www.npmjs.com/package/joi)
- [mocha](https://www.npmjs.com/package/mocha)

### What you have to do:

1. Split the code by _layers_ (business logic layer, data access layer , etc.)
2. Create file structure
3. Get rid of code duplicates
4. Eliminate anti-patterns usage
5. Fix inefficient implementation (redundant calls to DB, unnecessary loops, etc.)

**Warning**:

- `index.js` file **must** export an Express server instance
- do not edit files in `tests` folder, the original ones will be used after all

**Optional tasks**:

1. Add logger (of your [choice](https://www.highlight.io/blog/nodejs-logging-libraries)). On each `request` you need to log: 
   * incoming request: URL, method, date of invocation
   * server response: URL, method, total time of processing the request, response HTTP code
2. During server start-up:
   * validate the environment variables. In case if something is missing - log error and terminate the node process.
   * validate the database connection. In case if the server couldn't connect to the DB - log error and terminate the node process
3. Implement [graceful shutdown](https://hackernoon.com/graceful-shutdown-in-nodejs-2f8f59d1c357)
4. Configure the [pre-commit](https://dev.to/ajmaurya/set-up-eslint-prettier-and-pre-commit-hooks-using-husky-for-wordpress-from-scratch-1djk) hook to run [eslint](https://eslint.org/)

### What will be evaluated:

- Persist the project functionality.
- Code quality (clean, readable)

#### Max points: 9.

> Extra 1 point can be earned for completing **all** "optional tasks"

---

_Happy refactoring!_
