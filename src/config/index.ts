import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

const config = {
  port: process.env.PORT || "5000",
  node_env: process.env.NODE_ENV,
};

export default config;
