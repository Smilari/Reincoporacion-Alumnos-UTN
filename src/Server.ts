import express from "express";
import { PORT } from "./utils/config";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { langMessages as msg } from "./utils/messages";

export class Server {
  private readonly app: express.Application;
  private readonly port: string;

  constructor() {
    this.port = PORT;
    this.app = express();
    this.loadMiddlewares();
    this.loadRoutes();
    this.loadErrorMiddlewares();
  }

  private loadMiddlewares() {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(helmet());
    this.app.use(cors());
    console.log(msg.internalServer.middlewaresLoaded);
  }

  private loadRoutes() {
  }

  private loadErrorMiddlewares() {

  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(msg.internalServer.listeningOnPort(this.port));
    });
  }
}