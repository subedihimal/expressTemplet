import express from "express";
import { serverConfig } from "./config/index";
import pingRouter from "./routers/ping.router";
import { genericErrorHandler } from "./middleware/error.middleware";

const app = express();
const PORT = serverConfig.PORT;

//For Reading JSON Body
app.use(express.json());

//Routes
//Expects JSON Body and Query Params
app.use('/ping',pingRouter);

//Custom Error Handling Middleware
app.use(genericErrorHandler);


app.listen(PORT, ()=>{
    console.log(`Server is running at: ${PORT}`);
});