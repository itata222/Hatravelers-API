import { NextFunction, Response } from "express";
import userSchema from "../validations/users.validation";
import { badRequest } from "../utils/responses.utils";

const userLoginValidation = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = userSchema.userLoginSchema.validate(req.body);
    if (error) {
      return badRequest(res, error.message);
    }
    next();
  } catch (err) {
    console.log("Err", err);
    next(err);
  }
};

const userNewValidation = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    await userSchema.userNewSchema.validateAsync(req.body);
    next();
  } catch (err: any) {
    if (err.message.includes("email in use"))
      return badRequest(res, "email in use");
    next(err);
  }
};

const validation = {
  userLoginValidation,
  userNewValidation,
};

export default validation;
