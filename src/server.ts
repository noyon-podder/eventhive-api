import app from "./app";
import config from "./config/index";
import initDB from "./db";

const main = async () => {
  app.listen(config.port, () => {
    initDB();
    console.log(`Example app listening on port ${config.port}`);
  });
};

main();
