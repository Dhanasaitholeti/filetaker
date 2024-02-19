import multer from "multer";
import { Router } from "express";
import { uploadFile } from "../controllers/user.controller";

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

userRoutes.post("/", upload.single("file"), uploadFile);

userRoutes.post("/question",);

export default userRoutes;
