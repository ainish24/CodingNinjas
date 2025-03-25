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
  if (err instanceof customErrorHandler) {
    logger.error(err.message,{"request URL": req.originalUrl});
    res.status(err.statusCode).send(err.message);
  } else {
    logger.error("oops! something went wrong...Try again later!",{"request URL": req.originalUrl});
    res.status(500).send("oops! something went wrong...Try again later!");
  }
};
