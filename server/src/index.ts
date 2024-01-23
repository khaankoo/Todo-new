import express from "express";
import { connectDataBase } from "./utils/database";
import { auth } from "./router/user";


const start = () => {
    const app = express();

    connectDataBase()
    const PORT = 8000;
  
    app.get("/", (req, res) => {
      res.status(200).send({ succes: true, msg: "Hello world" });
    });

    app.use('/auth', auth)

    app.listen(PORT, () => {
      console.log("server is running");
    });
};

start();
