import { Response } from "express";
import usersRouter from "../routers/users.router";

const AWS = require("aws-sdk");
const multer = require("multer");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const upload = multer({ storage: multer.memoryStorage() });

usersRouter.post(
  "/upload",
  upload.single("file"),
  (req: any, res: Response) => {
    const file = req.file;
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    s3.upload(params, (err: any, data: any) => {
      if (err) {
        return res.status(500).json({ error: "Upload failed", details: err });
      }
      res.status(200).json({ message: "Upload successful", data });
    });
  }
);
