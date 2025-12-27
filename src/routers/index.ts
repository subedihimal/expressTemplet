import express from "express";
import pingRouter from "./ping.router";

const app = express();

app.use('/ping', pingRouter);


export default app;