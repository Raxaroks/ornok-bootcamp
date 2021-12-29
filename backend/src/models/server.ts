import express, { Application } from "express";
import cors from "cors";
import testRoutes from "../routes/test.route";
import reqresRoutes from "../routes/reqres.route";


class Server {
    private app: Application;
    private port: string;
    private APIRoutes = {
        test: "/api/test",
        reqres: "/api/reqres"
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "3000";

        this.middlewares();
        this.routes();
    }

    dbConnection() {
        // TODO: create a MongoDB connection to store data
    }

    middlewares() {
        // enable CORS
        this.app.use( cors() );

        // enable JSON body-parse
        this.app.use( express.json() );

        // serve content of the public folder
        this.app.use( express.static("public") )
    }

    routes() {
        this.app.use( this.APIRoutes.test, testRoutes );
        this.app.use( this.APIRoutes.reqres, reqresRoutes );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( "\n======================================================================".magenta );
            console.log( ` [!] Server running on port ${this.port.green}` );
            console.log( "======================================================================\n".magenta );
        } );
    }
}

export default Server;