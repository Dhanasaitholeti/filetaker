import dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import RoutesHandler from "./routes";
import connectToDb from "./utils/db";
import cors from "cors";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDb();

RoutesHandler(app);

app.listen(8000, () => {
  console.log(`server running on http://localhost:8000`);
});
