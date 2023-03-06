import * as schema from "../schemas/index.js";
import createError from "http-errors";

const validateBody = (route) => {
  return async function (req, res, next) {
    try {
      const validated = await schema[route].validateAsync(req.body);
      req.body = validated;
      next();
    } catch (err) {
      if (err.isJoi) {
        return next(createError(422, { message: err.message }));
      }
      next(createError(500));
    }
  };
};

const validateParams = (route) => {
  return function (req, res, next) {
    const validated = schema[route].validateAsync(req.params);
    if (validated.error) {
      res
        .status(400)
        .send(
          next(
            createError(422, { message: validated.error.details[0].message })
          )
        );
    }
    next();
  };
};

export { validateBody, validateParams };
