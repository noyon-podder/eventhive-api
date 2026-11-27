import { NextFunction, Request, Response } from "express";
import config from "../config";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || "Internal server Error",
    stack: config.node_env === "development" ? err.stack : "",
  });

  next();
};

export default globalErrorHandler;
