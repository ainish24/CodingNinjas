// Please don't change the pre-written code
// Import the necessary modules here
import {logger} from './logger.middleware.js'
export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  // Write your code here

  logger.error(err.message,{
    "request URL": req.originalUrl
  });

  res.status(500).send(err.message)
};
