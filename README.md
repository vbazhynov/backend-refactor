# Backend Structure Homework

### :bangbang: Attention  :bangbang:
**The code was written by the professionals for educational purposes. Don't repeat at home.**

### Prerequisites:
1. `npm install`
2.  create `.env` file, copy values from `.example.env`

#### To run the server in local environment with containerized database:
1. `npm run docker:dev:db` (runs database in docker container)
2. `npm run migrate:latest && npm run seed` (run only once, next time you start the server - skip this step)
3. `npm run dev` (runs the server)

#### To run the tests under the fully containerized environment:
1. `npm run docker:test`

### Troubleshooting:
* __Issue__: running the `npm run docker:test` command fails with:
```
1 error occurred:
        * checking context: can't stat ...
```
* __Solution__: run `sudo chown -R $USER .docker_pgdata_test/` in terminal, while on the repo top level
* __Another solution__: drop all related existing containers and re-run the command
