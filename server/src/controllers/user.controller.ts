import { Request, Response } from "express";
import fs from "fs/promises";
import fileModel from "../models/file.model";
import { v4 as uuidv4 } from "uuid";

export const uploadFile = async (req: Request, res: Response) => {
  {
    try {
      // Create a new instance of your Mongoose model
      const newFile = await fileModel.create({
        name: req.file.originalname,
        file: await fs.readFile(req.file.path), // Read the file from disk
        fileSize: req.file.size,
      });
      // Remove the temporary file
      fs.unlink(req.file.path);
      res.status(200).send("File uploaded successfully!");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error uploading file.");
    }
  }
};

export const answerTheQUestion = (req: Request, res: Response) => {
  const randomString = uuidv4();
  res.status(200).send(randomString);
};
