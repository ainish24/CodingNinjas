// Please don't change the pre-written code
// Import the necessary modules here
import winston from "winston";


//function to rename the default "message" named property which displays the message to "error message"
const customFormat = winston.format( (info) => {
  const { message, level, ...otherProps } = info;
  return { ...otherProps, level, ['error message']: message };
})();

//function to format the date to desired format
const formatTimestamp = () => {
  const date = new Date();
  return date.toString();
};

export const logger = winston.createLogger({
  level: "error",
  format: winston.format.combine(
    winston.format.timestamp({format:formatTimestamp}),
    customFormat,
    winston.format.printf(({ level, timestamp, message, ...metadata}) => {
      return JSON.stringify({level,timestamp, ...metadata, message})
    })
  ),
  transports: [new winston.transports.File({ filename: "error.log" })],
});