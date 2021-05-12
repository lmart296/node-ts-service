import express from "express";
import { Logger } from "tslog";
import dotenv from "dotenv";

// initialize configuration
dotenv.config();

const log = new Logger();
const app = express();
const port = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;
const env = process.env.NODE_ENV;

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    log.info(`Server started at ${host}:${port}`);
} );