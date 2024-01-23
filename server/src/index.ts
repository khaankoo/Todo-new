import express from "express";
import { connectDataBase } from "./utils/database";
import { auth } from "./router/User";

const PORT = 8000;

const start = () => {
    const app = express();
    app.use(express.json())

    connectDataBase();
    app.use('/auth', auth);
  
    app.get("/", (req, res) => {
      res.status(200).send({ succes: true, msg: "Hello world" });
    });


    app.listen(PORT, () => {
      console.log("server is running");
    });
};

start();
