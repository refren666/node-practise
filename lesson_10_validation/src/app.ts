import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";

// declare global {
//   var rootDir: string;
// }

const apiRoutes = require("./routes/apiRoutes");
const app = express();

// global.rootDir = __dirname; // lesson_10_validator/src

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRoutes);

const { PORT } = process.env;

app.listen(PORT, async () => {
  console.log(`Server started on port: ${PORT}!`);

  try {
    const connection = await createConnection();
    if (connection) {
      console.log("Database connected");
    }
  } catch (e) {
    console.log(e);
  }
});
