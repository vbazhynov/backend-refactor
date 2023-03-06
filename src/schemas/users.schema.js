import joi from "joi";

const usersPostSchema = joi
  .object({
    id: joi.string().uuid(),
    type: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi
      .string()
      .pattern(/^\+?3?8?(0\d{9})$/)
      .required(),
    name: joi.string().required(),
    city: joi.string(),
  })
  .required();

const usersPutSchema = joi
  .object({
    email: joi.string().email(),
    phone: joi.string().pattern(/^\+?3?8?(0\d{9})$/),
    name: joi.string(),
    city: joi.string(),
  })
  .required();

const usersGetSchema = joi
  .object({
    id: joi.string().uuid(),
  })
  .required();

export { usersPostSchema, usersPutSchema, usersGetSchema };
