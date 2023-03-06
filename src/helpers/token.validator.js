import jwt from "jsonwebtoken";

const tokenValidator = async (req, res, next) => {
  let token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send({ error: "Not Authorized" });
  }
  token = token.replace("Bearer ", "");
  try {
    const tokenPayload = jwt.verify(token, process.env.JWT_SECRET);
    if (tokenPayload.type != "admin") {
      throw new Error();
    }
    req.body.user_id = tokenPayload.id;
  } catch (err) {
    return res.status(401).send({ error: "Not Authorized" });
  }
  next();
};

const userDismatchValidator = (req, res, next) => {
  if (req.params.id !== req.body.user_id) {
    return res.status(401).send({ error: "UserId mismatch" });
  }
  next();
};

export { tokenValidator, userDismatchValidator };
