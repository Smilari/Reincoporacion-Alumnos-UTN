import { langMessages as msg } from "./messages";
import { NODE_ENV } from "./config";
import { Response } from "express";

/**
 * Handles the error by logging it and returning a JSON response with the appropriate status code and message.
 * @param err The error object to handle.
 * @param res The response object to send the error response.
 */
export const handleError = ((err: any, res: Response) => {
  const {
    name = msg.error.internal,
    statusCode = 500,
    message = msg.error.internal,
    success = false,
    stack,
  } = err;

  return res.status(statusCode).json({
    name,
    statusCode,
    message,
    success,
    ...(NODE_ENV === "development" ? {stack} : {}),
  });
});

/**
 * Creates a custom error class with a name, status code, and message.
 * @param name The name of the error.
 * @param statusCode The status code of the error.
 * @returns A custom error class.
 */
export const createErrorFactory = function (name: string, statusCode: number) {
  return class CustomizedError extends Error {
    private statusCode: number;
    private success: boolean;

    constructor(message: string) {
      super();
      this.name = name;
      this.statusCode = statusCode;
      this.message = message;
      this.success = false;
    }
  };
};

export const ValidationError = createErrorFactory("ValidationError", 400);
export const Unauthorized = createErrorFactory("UnauthorizedError", 401);
export const Forbidden = createErrorFactory("ForbiddenError", 403);
export const NotFound = createErrorFactory("NotFoundError", 404);
