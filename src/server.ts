import express from "express";
import { serverConfig } from "./config/index";
import pingRouter from "./routers/ping.router";

const app = express();
const PORT = serverConfig.PORT;


app.use('/ping',pingRouter);


app.listen(PORT, ()=>{
    console.log(`Server is running at: ${PORT}`);
});