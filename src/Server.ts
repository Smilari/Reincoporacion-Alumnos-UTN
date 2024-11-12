import express, { Request, Response, NextFunction } from "express";
import { PORT } from "./utils/config";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { langMessages as msg } from "./utils/messages";
import { handleError, NotFound } from "./utils/errorHandler";

/**
 * The Server class is responsible for setting up the Express application and handling the server's lifecycle.
 * It includes methods for loading middlewares, routes, and error middlewares.
 */
export class Server {
  private readonly app: express.Application;
  private readonly port: string;

  /**
   * Creates a new instance of the Server class.
   * It sets the port, initializes the Express application, and loads the middlewares, routes, and error middlewares.
   */
  constructor() {
    this.port = PORT;
    this.app = express();
    this.loadMiddlewares();
    this.loadRoutes();
    this.loadErrorMiddlewares();
  }

  /**
   * Loads the middlewares into the Express application.
   * It includes JSON parsing, morgan logging, Helmet security headers, and CORS.
   */
  private loadMiddlewares() {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(helmet());
    this.app.use(cors());
    console.log(msg.internalServer.middlewaresLoaded);
  }

  /**
   * Loads the routes into the Express application.
   */
  private loadRoutes() {
  }

  /**
   * Loads the error middlewares into the Express application.
   * It includes handling of NotFound errors and handling of any other errors.
   */
  private loadErrorMiddlewares() {
    this.app.use((_req: Request, res: Response) => {
      handleError(new NotFound(msg.error.routeNotFound), res);
    });

    this.app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      handleError(err, res);
    });
  }

  /**
   * Starts the server and listens on the specified port.
   */
  public listen() {
    this.app.listen(this.port, () => {
      console.log(msg.internalServer.listeningOnPort(this.port));
    });
  }
}