import winston from "winston";
import "winston-daily-rotate-file";

// const logger = winston.createLogger({
//     level: 'error',
//     format: winston.format.combine(
//         winston.format.timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
//         winston.format.simple()
//     ),
//     transports: [new winston.transports.File({ filename: 'logs/server.log' })]
// });

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        winston.format.printf(({ level, message, timestamp }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    transports: [
    new winston.transports.DailyRotateFile({
        filename:"logs/server-%DATE%.log",
        datePattern:'YYYY-MM-DD-HH',
        maxSize: "10m", // Rotate log file if file size is more than 10mb
        maxFiles: "3d"   // Keep logs for last three days only
    })

]
})

export default logger;