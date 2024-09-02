import { NextFunction, Request, Response } from "express";

import { internalServerError } from "../utils/responses.utils";

const errorHandler = (
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  internalServerError(res);
};

export { errorHandler };
