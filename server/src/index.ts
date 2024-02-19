import express, { Application } from "express";
import bodyParser from "body-parser";
import RoutesHandler from "./routes";

const app: Application = express();
app.use(bodyParser);

RoutesHandler(app);

app.listen(8000, () => {
  console.log(`server running on http://localhost:8000`);
});
