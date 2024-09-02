import Joi from "joi";
import { checkEmailInUse } from "../utils/functions.utils";

const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
});

const userNewSchema = Joi.object({
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  //   repeat_password: Joi.ref("password"),
  age: Joi.number().integer().min(0).max(100),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string()
    .email()
    .required()
    .external(async (email) => {
      const isEmailInUse = await checkEmailInUse(email);
      if (isEmailInUse) {
        throw new Error("email in use");
      }

      return email;
    }),
});

const userSchema = {
  userLoginSchema,
  userNewSchema,
};

export default userSchema;
