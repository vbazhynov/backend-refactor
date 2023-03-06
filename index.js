import express, { json } from "express";
import knex from "knex";
import jwt from "jsonwebtoken";

import ee from "events";
import { initRoutes } from "./src/api/index.js";
import { development } from "./knexfile.js";
const app = express();

const port = 3000;

export const statEmitter = new ee();
const stats = {
  totalUsers: 3,
  totalBets: 1,
  totalEvents: 1,
};

export let db;
app.use(json());
app.use((uselessRequest, uselessResponse, neededNext) => {
  db = knex(development);
  db.raw("select 1+1 as result")
    .then(function () {
      neededNext();
    })
    .catch(() => {
      throw new Error("No db connection");
    });
});

initRoutes(app);

const server = app.listen(port, () => {
  statEmitter.on("newUser", () => {
    stats.totalUsers++;
  });
  statEmitter.on("newBet", () => {
    stats.totalBets++;
  });
  statEmitter.on("newEvent", () => {
    stats.totalEvents++;
  });

  console.log(`App listening at http://localhost:${port}`);
});

// Do not change this line
export default { app, server };
