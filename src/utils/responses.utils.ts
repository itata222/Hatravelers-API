import { Response } from "express";

const {
  ErrorResponse_,
  SuccessResponse_,
} = require("../models/responses.model");

const ok = (res: Response, message: string = "", data: any) => {
  res.send(new SuccessResponse_(true, 200, "Ok", message, data));
};

const created = (res: Response, message: string = "", data: any) => {
  res
    .status(201)
    .send(new SuccessResponse_(true, 201, "Created", message, data));
};

const badRequest = (res: Response, message: string = "") => {
  res.status(400).send(new ErrorResponse_(false, 400, "Bad request", message));
};

const notAuthorized = (res: Response, message: string = "") => {
  res
    .status(400)
    .send(new ErrorResponse_(false, 400, "Not Authorized", message));
};

const notFound = (res: Response, message: string = "") => {
  res.status(404).send(new ErrorResponse_(false, 404, "Not found", message));
};

const exisitingKey = (res: Response, message: string = "") => {
  res.status(400).send(new ErrorResponse_(false, 400, "Existing Key", message));
};

const internalServerError = (res: Response, message: string = "") => {
  res
    .status(500)
    .send(new ErrorResponse_(false, 500, "Internal server error", message));
};

export {
  ok,
  exisitingKey,
  created,
  badRequest,
  notFound,
  internalServerError,
  notAuthorized,
};
