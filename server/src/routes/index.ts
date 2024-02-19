import { Application, Request, Response } from "express";

const RoutesHandler = (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Backend is Wokring");
  });
};

export default RoutesHandler;
