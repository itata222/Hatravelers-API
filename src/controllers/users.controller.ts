import { NextFunction, Request, Response } from "express";

import {
  ok,
  exisitingKey,
  badRequest,
  created,
} from "../utils/responses.utils";

import usersService from "../services/users.service";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await usersService.getAllUsers(req.body);
    ok(res, "Users: ", data);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const data = await usersService.createUser(req.body);
    created(res, "You're successfully created a new user", data);
  } catch (err: any) {
    if (err.message.includes("duplicate")) exisitingKey(res, err.message);
    else badRequest(res, err.message);
  }
};

const loginUser = async (req: Request, res: Response) => {
  console.log(req.body);

  try {
    const data = await usersService.loginUser(req.body);
    ok(res, "You're successfully logged in", data);
  } catch (err: any) {
    badRequest(res, "Unable to login");
  }
};

const logoutUser = async (req: any, res: Response) => {
  try {
    const data = await usersService.logoutUser(req.user, req.token);
    ok(res, "You're successfully logged out", data);
  } catch (err: any) {
    badRequest(res, err.message);
  }
};

export { getAllUsers, createUser, loginUser, logoutUser };
