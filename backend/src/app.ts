import "colors";
import dotenv from "dotenv"; 
import Server from "./models/server";
dotenv.config();

const server = new Server();
console.log( "\n.::::: ORNOK BOOTCAMP - REST SERVER with TypeScript and Express :::::.".red )
server.listen();