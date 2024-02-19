import { Router } from "express";
import fileModel from "../models/file.model";
import multer from "multer";
import fs from "fs/promises";
const userRoutes = Router();

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

userRoutes.post("/file", async (req, res) => {
  try {
    // Create a new instance of your Mongoose model
    const newFile = new fileModel({
      name: req.file.originalname,
      file: await fs.readFile(req.file.path), // Read the file from disk
      fileSize: req.file.size,
    });

    // Save the file to MongoDB
    await newFile.save();

    // Remove the temporary file
    fs.unlink(req.file.path);

    res.status(200).send("File uploaded successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file.");
  }
});
