import { Router } from "express";
import jwt from "jsonwebtoken";
import { db } from "../../index.js";
import { validateBody, validateParams } from "../helpers/schema.validator.js";
import {
  tokenValidator,
  userDismatchValidator,
} from "../helpers/token.validator.js";

const router = Router();

router.get("/:id", validateParams("usersGet"), (req, res) => {
  try {
    db("user")
      .where("id", req.params.id)
      .returning("*")
      .then(([result]) => {
        if (!result) {
          res.status(404).send({ error: "User not found" });
          return;
        }
        return res.send({
          ...result,
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
    return;
  }
});

router.post("/", validateBody("usersPost"), (req, res) => {
  req.body.balance = 0;
  db("user")
    .insert(req.body)
    .returning("*")
    .then(([result]) => {
      result.createdAt = result.created_at;
      delete result.created_at;
      result.updatedAt = result.updated_at;
      delete result.updated_at;
      statEmitter.emit("newUser");
      return res.send({
        ...result,
        accessToken: jwt.sign(
          { id: result.id, type: result.type },
          process.env.JWT_SECRET
        ),
      });
    })
    .catch((err) => {
      if (err.code == "23505") {
        res.status(400).send({
          error: err.detail,
        });
        return;
      }
      res.status(500).send("Internal Server Error");
      return;
    });
});

router.put(
  "/:id",
  validateBody("usersPut"),
  tokenValidator,
  userDismatchValidator,
  (req, res) => {
    db("user")
      .where("id", req.params.id)
      .update(req.body)
      .returning("*")
      .then(([result]) => {
        return res.send({
          ...result,
        });
      })
      .catch((err) => {
        if (err.code == "23505") {
          console.log(err);
          res.status(400).send({
            error: err.detail,
          });
          return;
        }
        console.log(err);
        res.status(500).send("Internal Server Error");
        return;
      });
  }
);

export default router;
