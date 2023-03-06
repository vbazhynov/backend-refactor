import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  console.log("here");
  res.send("Hello World!");
});

export { router };
