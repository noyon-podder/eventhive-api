import express, { Request, Response, Application } from "express";
import cors from "cors";
import logger from "./middleware/logger";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app: Application = express();

// middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200,
  }),
);

// CUSTOM MIDDLEWARE
app.use(logger);
// IN BUILT MIDDLEWARE
app.use(express.json());
app.use(express.text());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

export default app;
