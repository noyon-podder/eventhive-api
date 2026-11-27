import { NextFunction, Request, Response } from "express";
import fs from "fs";

const logger = (req: Request, res: Response, next: NextFunction) => {
  const log = `Method: ${req.method} URL: ${req.url} Time: ${Date.now()}`;

  fs.appendFile("logger.txt", log, (err: any) => {
    console.log(err);
  });

  next();
};

export default logger;
