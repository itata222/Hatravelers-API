import dotenv from "dotenv";
dotenv.config({ path: `config/.env.${process.env.NODE_ENV}` });

import app from "./app";
import DB from "./databases/mongoose.db";

const signals = ["SIGINT", "SIGTERM", "SIGHUP"];
const gracefulShutdown = (signal: any, server: any) => {
  process.on(signal, async () => {
    server.close();

    await DB.disconnectFromDB();

    console.log("Server was shutdown successful!");

    process.exit(0);
  });
};

const PORT = process.env.PORT;

const server = app.listen(PORT, async () => {
  await DB.connectToDB();
  console.log(`Server is running on port: ${PORT}`);
  for (let signal of signals) {
    gracefulShutdown(signal, server);
  }
});
