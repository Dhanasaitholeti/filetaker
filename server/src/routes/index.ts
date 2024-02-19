import { Application, Request, Response } from "express";
import userRoutes from "./user.route";

const RoutesHandler = (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Backend is Wokring");
  });
  app.use("/file", userRoutes);
};

export default RoutesHandler;
