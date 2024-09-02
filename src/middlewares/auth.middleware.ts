import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../schemas/user.schema";
import { NextFunction, Request, Response } from "express";
import { notAuthorized } from "../utils/responses.utils";

interface CustomJwtPayload extends JwtPayload {
  _id: string;
}

const auth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = jwt.verify(
      token,
      process.env.TOKEN_SECRET || ""
    ) as CustomJwtPayload;
    const user = await User.findOne({
      _id: data._id,
      "tokens.token": token,
    });
    if (!user) throw new Error("its not an user");
    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    return notAuthorized(res, "");
  }
};

export default auth;
